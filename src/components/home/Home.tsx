import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LogoBanner } from "@/components/sections/LogoBanner";
import { LinksList } from "@/components/sections/LinksList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black transition-colors">
      <Header />

      <main className="flex-grow flex items-center justify-center py-6 md:py-12 px-4">
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md w-full max-w-[90%] sm:max-w-md p-4 sm:p-6 md:p-8 transition-colors">
          <div className="flex flex-col items-center">
            <LogoBanner />
            <LinksList />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
