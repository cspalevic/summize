import { Header } from "@/components/Header";
import { AppProps } from "next/app";
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <div className="p-2">
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
