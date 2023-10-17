import { initializeRootStore } from '@next-mobx-store/core';
import type { HydrationDataType, HydrationLocalStoreType, IRootStore } from '@next-mobx-store/type';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';

export default function useHydrateProps<P extends Omit<AppProps<{
  hydrationData?: HydrationDataType, hydrationLocalStore?: HydrationLocalStoreType;
}>, 'Component'>>(props: P) {
  const { pageProps, ...other } = props;
  const store = useMemo(() => {
    if (!pageProps) return {};
    return initializeRootStore(pageProps.hydrationData)
  }, []);

  if (!pageProps) {
    return { store, props };
  }
  const { hydrationLocalStore } = pageProps;
  return {
    store, props: { hydrationLocalStore, ...other }
  };
}
