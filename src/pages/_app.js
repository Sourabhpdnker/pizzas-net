import Footer from "@/components/layouts/Footer";
import Layout from "@/components/layouts/Layout";
import Navbar from "@/components/layouts/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>

    </ThemeProvider>
  );
}
