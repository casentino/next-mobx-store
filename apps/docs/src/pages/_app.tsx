import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RootStoreProvider } from "@next-mobx-store/core";
import { useHydrateProps } from "@next-mobx-store/hooks";

export default function App({ Component, pageProps }: AppProps) {
  const { store, ...props } = useHydrateProps(pageProps);
  return (
    <RootStoreProvider store={store}>
      <Component {...props} />
    </RootStoreProvider>
  );
}
