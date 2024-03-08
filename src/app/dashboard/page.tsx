"use client";
import Link from "next/link";
import ReduxProvider from "../../app/StoreProvider";

export default function DashboardPage() {

  return (
    <ReduxProvider>
      <main className="flex min-h-screen flex-col items-center p-6 sm:p-12">
        <h2 className="mb-3 text-2xl font-semibold">Dashboard</h2>
        <div className="bg-white rounded-xl p-6">
          <Link href={"/"}>Kembali ke halaman utama</Link>
        </div>
      </main>
    </ReduxProvider>
  );
}
