import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FormData } from "@/components/Contact";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
