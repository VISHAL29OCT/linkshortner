import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh] bg-blue-50">
        
        {/* LEFT */}
        <div className="flex flex-col gap-4 justify-center ">
          <div className="max-w-md ml-auto">
        <p className="text-gray-800 font-semibold">

              THE BEST URL SHORTNER
            </p>

           <p className="text-gray-800 font-semibold">

              we are the most straight forward shortner in the market where
              we do not need login only do the work as you need
            </p>

            <div className="flex gap-2 py-3 text-white">
              <Link
                href="/generate"
                className="bg-blue-400 rounded-lg shadow-2xl p-2 font-bold"
              >
                TRY NOW
              </Link>

              <Link
                href="https://github.com"
                className="bg-blue-400 rounded-lg shadow-2xl p-2 font-bold"
              >
                GITHUB
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-full w-full">
          <Image
            alt="teamimage"
            src="/team.png"
            fill
            className="object-cover mix-blend-darken"
            priority
          />
        </div>

      </section>
    </main>
  );
}
