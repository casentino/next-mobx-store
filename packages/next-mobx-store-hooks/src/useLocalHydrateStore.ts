import { deserializeStore } from '@next-mobx-store/core/src/hydrationUtils';
import type { HydrationLocalStoreType } from '@next-mobx-store/type';
import type { AppProps } from 'next/app';

export default function useLocalHydrateStores<P extends AppProps<{
  hydrationLocalStore?: HydrationLocalStoreType;
}>>(props: P) {
  const { hydrationLocalStore } = props.pageProps;
  if (!hydrationLocalStore) return;
  const storeEntries = Object.entries(hydrationLocalStore);
  storeEntries.forEach(([storeName, store]) => {
    if (!hydrationLocalStore[storeName]) return;
    store.hydrate(deserializeStore(store, hydrationLocalStore[storeName]));
  });
}


