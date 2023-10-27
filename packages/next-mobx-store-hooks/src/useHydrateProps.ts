import { initializeRootStore } from '@next-mobx-store/core';
import type { HydrationDataType } from '@next-mobx-store/type';
import type { AppInitialProps } from 'next/app';
import { useMemo } from 'react';

type UseHydratePropsParameter = AppInitialProps<{
  hydrationData?: HydrationDataType
}>['pageProps']

export default function useHydrateProps<Props extends UseHydratePropsParameter>(pageProps: Props) {
  const { hydrationData, ...props } = pageProps
  const store = useMemo(() => initializeRootStore(pageProps.hydrationData), []);

  return {
    store, props: { ...props }
  };
}
