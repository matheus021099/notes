import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { NotesProvider } from "@/lib/NotesContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotesProvider>
  );
}
