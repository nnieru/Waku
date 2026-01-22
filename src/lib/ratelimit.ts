/**
 * Simple in-memory sliding window rate limiter
 * For production with multiple server instances, consider using Redis-based solutions
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private store: Map<string, RateLimitEntry> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests: number = 5, windowMs: number = 60 * 1000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;

    // Cleanup old entries every minute
    setInterval(() => this.cleanup(), 60 * 1000);
  }

  private cleanup() {
    const now = Date.now();
    const entries = Array.from(this.store.entries());
    for (const [key, entry] of entries) {
      if (now > entry.resetTime) {
        this.store.delete(key);
      }
    }
  }

  /**
   * Check if the identifier is rate limited
   * @param identifier - Unique identifier (e.g., IP address, user ID)
   * @returns Object with success status and remaining attempts
   */
  check(identifier: string): {
    success: boolean;
    remaining: number;
    resetIn: number;
  } {
    const now = Date.now();
    const entry = this.store.get(identifier);

    if (!entry || now > entry.resetTime) {
      // First request or window has reset
      this.store.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs,
      });
      return {
        success: true,
        remaining: this.maxRequests - 1,
        resetIn: this.windowMs,
      };
    }

    if (entry.count >= this.maxRequests) {
      // Rate limited
      return {
        success: false,
        remaining: 0,
        resetIn: entry.resetTime - now,
      };
    }

    // Increment counter
    entry.count++;
    return {
      success: true,
      remaining: this.maxRequests - entry.count,
      resetIn: entry.resetTime - now,
    };
  }

  /**
   * Reset rate limit for an identifier (e.g., after successful auth)
   */
  reset(identifier: string): void {
    this.store.delete(identifier);
  }
}

// Auth rate limiter: 5 attempts per minute
export const authRateLimiter = new RateLimiter(5, 60 * 1000);

// Stricter login rate limiter: 5 attempts per 5 minutes
export const loginRateLimiter = new RateLimiter(5, 5 * 60 * 1000);

// Helper to get client IP from headers
export function getClientIP(headers: Headers): string {
  // Check common headers for client IP (when behind proxy/load balancer)
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  const realIP = headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  // Fallback
  return "unknown";
}
