import Image from "next/image";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import { Card } from "@/components/Card";

const notoSans = Open_Sans({ subsets: ["latin"] });

const Home = () => (
  <main
    className={`flex flex-col items-center h-full gap-4 ${notoSans.className}`}
  >
    <Head>
      <title>Summize</title>
    </Head>
    <div className="flex flex-col text-center">
      <h1 className="text-2xl font-bold text-slate-200">Summize</h1>
      <p className="text-sm text-slate-300">
        The ultimate browser extension companion
      </p>
    </div>
    <Image
      className="rounded-lg"
      src="/demo.gif"
      alt="Summize demo"
      width="800"
      height="800"
      priority
    />
    <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:gap-10">
      <Card
        title="Productive"
        description="Summarize your articles in a snap"
      />
      <Card title="Intelligent" description="Based on OpenAI models" />
      <Card title="Easy" description="All it takes is a click" />
    </div>
  </main>
);
export default Home;
