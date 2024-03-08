"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from 'next/navigation'
import ReduxProvider from "../../app/StoreProvider";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { loginAction } from "@/lib/features/auth/authSlice";

function LoginLayout() {
  const { isLoading, isLogin } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Email dan password harus diisi");
      return;
    }
    dispatch(loginAction({ email, password }));
  }

  useEffect(() => {
    if (isLogin) {
      alert("Login berhasil");
      redirect('/');
    }
  }, [isLogin]);

  return (
      <main className="flex min-h-screen flex-col items-center p-6 sm:p-12">
        <h2 className="mb-3 text-2xl font-semibold">Login</h2>
        <div className="bg-white rounded-xl p-6">
          <Link href={"/"}>Kembali ke halaman utama</Link>
          <div className="mt-5 flex flex-col gap-4">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white rounded-lg p-2"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </main>
  );
}

export default function LoginPage() {
  return (
    <ReduxProvider>
      <LoginLayout />
    </ReduxProvider>
  );
}
