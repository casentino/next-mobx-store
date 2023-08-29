import { initializeRootStore } from '@next-mobx-store/core';
import type { HydrationDataType, HydrationLocalStoreType, IRootStore } from '@next-mobx-store/type';
import type { AppProps } from 'next/app';

export default function useHydrateProps<P extends Omit<AppProps<{
  hydrationData?: HydrationDataType, hydrationLocalStore?: HydrationLocalStoreType;
}>, 'Component'>>(props: P) {
  const { pageProps, ...other } = props;
  if (!pageProps) {
    return { store: {} as IRootStore, props };
  }
  const { hydrationData, hydrationLocalStore } = pageProps;

  return { store: initializeRootStore(hydrationData), props: { hydrationLocalStore, ...other } };
}
