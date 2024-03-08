'use client';

import Image from "next/image";
import Link from "next/link";
import ReduxProvider from "./StoreProvider";
import { useAppSelector, useAppDispatch } from '../lib/hooks'

const products = [
  { id: 1, name: "Sepatu", price: 120000 },
  { id: 2, name: "Kemeja", price: 80000 },
  { id: 3, name: "Celana", price: 100000 },
  { id: 4, name: "Topi", price: 50000 },
  { id: 5, name: "Jaket", price: 150000 },
];

interface ProductItemProps {
  name: string;
  price: number;
  stock?: number;
  onClick?: () => void;
}

function ProductItem({ name, price, stock, onClick }: ProductItemProps) {
  return (
    <div className="flex flex-col gap-2 bg-white rounded p-3">
      <div className="w-24 h-24 bg-gray-100 rounded-md"></div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">Rp{price}</p>
        <p className="text-xs opacity-50">Stok: {stock}</p>
      </div>
      <button className="p-1 rounded-md bg-blue-400" onClick={onClick}>
        Beli
      </button>
    </div>
  );
}

function HomeLayout() {
  const { isLogin } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const handlePurchase = () => {
    if (isLogin) {
      console.log("Pembelian berhasil")
    } else {
      alert("Silahkan login terlebih dahulu")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10 md:p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mt-12 flex">
        <Link
          href={"/login"}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Login{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Masuk ke akun kamu</p>
        </Link>
        <Link
          href={"/register"}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Register{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Daftar akun baru</p>
        </Link>
      </div>

      <div className="mt-5 gap-4 flex">
        {products.map((item) => (
          <ProductItem
            key={item.id}
            name={item.name}
            price={item.price}
            stock={10}
            onClick={handlePurchase}
          />
        ))}
      </div>
    </main>
  );
}

export default function HomePage() {
  return (
    <ReduxProvider>
      <HomeLayout />
    </ReduxProvider>
  );
}