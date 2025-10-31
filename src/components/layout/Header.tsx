import Link from "next/link";
import Image from "next/image";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/font-awesome-icons";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function Header() {
  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 py-3 md:py-4 transition-colors">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6">
            <Image
              src="/black.png"
              alt="ACTA"
              width={24}
              height={24}
              className="w-full h-full dark:hidden"
            />
            <Image
              src="/white.png"
              alt="ACTA"
              width={24}
              height={24}
              className="w-full h-full hidden dark:block"
            />
          </div>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://github.com/ACTA-Team"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <GithubIcon className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://x.com/ActaXyz"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/acta-org"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.instagram.com/acta.xyz?igsh=MTF3czdzYTVlemxmMw=="
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <InstagramIcon className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <AnimatedThemeToggler className="w-full h-full p-0 [&>svg]:w-4 [&>svg]:h-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
