import alerts from "../types/alert";

const AlertCard = () => {
  return (
    <div className="flex flex-col border-4 border-foreground bg-card p-6 shadow-[8px_8px_0px_0px_var(--foreground)]">
      <h3 className="font-black text-xl mb-4 text-destructive">VIBE ALERT</h3>
      <ul className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-2">
        {alerts.map((alert) => (
          <li key={alert.id}>
            <div className="flex flex-col gap-1 border-2 border-foreground  p-2">
              <h3 className="font-black text-xl text-destructive">
                {alert.title}
              </h3>
              <p className="font-bold text-muted-foreground  max-w-md">
                {alert.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertCard;
