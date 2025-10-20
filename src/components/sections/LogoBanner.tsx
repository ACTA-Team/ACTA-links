import Image from "next/image";

export function LogoBanner() {
  return (
    <div className="w-full max-w-[100px] mt-4 mb-4">
      <Image
        src="/black.png"
        alt="ACTA Logo"
        width={280}
        height={80}
        className="w-full h-auto object-contain dark:hidden"
      />
      <Image
        src="/white.png"
        alt="ACTA Logo"
        width={280}
        height={80}
        className="w-full h-auto object-contain hidden dark:block"
      />
    </div>
  );
}
