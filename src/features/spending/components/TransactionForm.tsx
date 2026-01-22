"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema, type TransactionFormValues } from "../schema";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const MOCK_CATEGORIES = [
  { id: "1", name: "Salary", type: "INCOME" },
  { id: "2", name: "Freelance", type: "INCOME" },
  { id: "3", name: "Food", type: "EXPENSE" },
  { id: "4", name: "Transport", type: "EXPENSE" },
  { id: "5", name: "Shopping", type: "EXPENSE" },
];

export function TransactionForm({ onSuccess }: { onSuccess?: () => void }) {
  const form = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      amount: 0,
      note: "",
      date: new Date(),
      type: "EXPENSE",
    },
  });

  const type = form.watch("type");
  const filteredCategories = MOCK_CATEGORIES.filter((cat) => cat.type === type);

  function onSubmit(values: TransactionFormValues) {
    console.log(values);
    // TODO: Connect to mutation
    if (onSuccess) {
      onSuccess();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold uppercase">Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-2 border-foreground h-14 rounded-xl font-bold bg-background focus:ring-0 focus:shadow-[4px_4px_0px_0px_var(--foreground)] transition-all">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-2 border-foreground font-bold shadow-[4px_4px_0px_0px_var(--foreground)]">
                    <SelectItem value="INCOME">Income</SelectItem>
                    <SelectItem value="EXPENSE">Expense</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold uppercase">Amount</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    variant="brutalist"
                    placeholder="0"
                    value={
                      field.value
                        ? new Intl.NumberFormat().format(field.value)
                        : ""
                    }
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      const numberValue = value ? parseInt(value, 10) : 0;
                      field.onChange(numberValue);
                    }}
                    className="no-spinner"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold uppercase">Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-2 border-foreground h-14 rounded-xl font-bold bg-background focus:ring-0 focus:shadow-[4px_4px_0px_0px_var(--foreground)] transition-all">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-2 border-foreground font-bold shadow-[4px_4px_0px_0px_var(--foreground)]">
                  {filteredCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-bold uppercase">Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left border-2 border-foreground h-14 rounded-xl font-bold bg-background hover:bg-background hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--foreground)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "P")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 border-2 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)]"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold uppercase">Note</FormLabel>
              <FormControl>
                <Input
                  variant="brutalist"
                  placeholder="Optional note"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" variant="brutalist">
          Save Transaction
        </Button>
      </form>
    </Form>
  );
}
