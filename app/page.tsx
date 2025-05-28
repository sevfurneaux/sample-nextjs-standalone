import { revalidatePath } from "next/cache";

export const dynamicParams = true;
export const revalidate = false;

async function revalidateHomePage() {
  "use server";
  revalidatePath("/");
}

export default function HomePage() {
  const currentDate = new Date().toLocaleString();

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">
        Static Page with Server Revalidation
      </h1>
      <p>Current date (server-rendered):</p>
      <p className="text-blue-600 font-mono">{currentDate}</p>

      <form action={revalidateHomePage} className="mt-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Revalidate Page
        </button>
      </form>
    </main>
  );
}
