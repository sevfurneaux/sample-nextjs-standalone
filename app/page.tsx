export const revalidate = 60;

export default async function Page() {
  const currentDate = new Date().toLocaleString();

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Next.js ISR Test</h1>
      <p>Current date (server-rendered):</p>
      <p className="text-blue-600 font-mono">{currentDate}</p>
      <p className="text-sm mt-2 text-gray-500">
        This page revalidates every 60 seconds.
      </p>
    </main>
  );
}
