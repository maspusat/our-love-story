import { differenceInDays } from "date-fns";

export function calculateLoveDays(date: string) {
  return differenceInDays(new Date(), new Date(date));
}