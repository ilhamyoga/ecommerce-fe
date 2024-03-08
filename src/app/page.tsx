import Image from "next/image";
import Link from "next/link";

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
}

function ProductItem({ name, price }: ProductItemProps) {
  return (
    <div className="flex flex-col gap-2 bg-white rounded p-3">
      <div className="w-24 h-24 bg-gray-100 rounded-md"></div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">Rp{price}</p>
      </div>
      <button className="p-1 rounded-md bg-blue-400">
        Tambah
      </button>
    </div>
  );
}

export default function Home() {
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
          href={"/cart"}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Keranjang{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Lihat barang yang kamu pilih</p>
        </Link>
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
      </div>

      <div className="mt-5 gap-4 flex">
        {products.map((item) => (
          <ProductItem
            key={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </main>
  );
}
