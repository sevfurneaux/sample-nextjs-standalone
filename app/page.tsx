"use client";

import { revalidatePath } from "next/cache";
import { useTransition } from "react";

export const revalidate = false; // Fully static

export default function HomePage() {
  const currentDate = new Date().toLocaleString();
  const [isPending, _] = useTransition();

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">
        Static Page with Inline Revalidation
      </h1>
      <p>Current date (server-rendered):</p>
      <p className="text-blue-600 font-mono">{currentDate}</p>
      <form
        action={async () => {
          "use server";
          revalidatePath("/");
        }}
        className="mt-4"
      >
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isPending ? "Revalidating..." : "Revalidate Page"}
        </button>
      </form>
    </main>
  );
}
