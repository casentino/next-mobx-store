import { deserializeStore } from '@next-mobx-store/core';
import { LocalHydrateStores, LocalPageProps } from '@next-mobx-store/type';

export default function useLocalHydrateStores<P extends LocalPageProps>(stores: LocalHydrateStores, props: P) {
	const { localPageStores } = props;
	if (!localPageStores) return;
	const storeEntries = Object.entries(stores);
	storeEntries.forEach(([storeName, store]) => {
		if (!localPageStores[storeName]) return;
		store.hydrate(deserializeStore(store, localPageStores[storeName]));
	});
}
