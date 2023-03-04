import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="w-full p-4 flex justify-between items-center m-auto border- lg:w-[55rem]">
    <Image
      src="/icon-32x32.png"
      alt="Summize Icon"
      width="32"
      height="32"
      priority
    />
    <div className="flex items-center">
      <Link
        className="flex items-center gap-1"
        href="https://github.com/cspalevic/summize"
        target="_blank"
      >
        <Image
          src="/github-mark.png"
          width="24"
          height="24"
          alt="GitHub Logo"
          className="bg-white rounded-lg"
        />
        <p className="text-slate-200">GitHub</p>
      </Link>
    </div>
  </header>
);
