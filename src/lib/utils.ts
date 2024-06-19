import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortDocs(a: any, b: any) {
  const aDate = a.frontMatter?.last_update?.date;
  const bDate = b.frontMatter?.last_update?.date;


  if (aDate < bDate) {
    return 1;
  }
  if (bDate < aDate) {
    return -1;
  }

  return 0;
}