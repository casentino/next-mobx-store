import type { IRootStore, HydrationDataType } from '@next-mobx-store/type';

export default function createRootStore<Store extends object>(storeInstance: Store) {
	function hasHydrate(store: object): store is Record<string, unknown> & { hydrate: Function } {
		if ('hydrate' in store && store.hydrate instanceof Function) {
			return true;
		}
		return false;
	}
	function isInHydarateSore<Target extends Record<string, unknown>>(
		memberName: string | number | symbol,
		rootMember: Target
	): memberName is keyof Target {
		if (memberName in rootMember) {
			return true;
		}
		return false;
	}
	function callHydrateFunction(store: Store, hydrateStores: HydrationDataType<Store>) {
		const storeMembers = Object.entries(store);
		storeMembers.forEach(([storeName, store]) => {
			if (hasHydrate(store) && isInHydarateSore(storeName, hydrateStores) && hydrateStores[storeName]) {
				store.hydrate(hydrateStores[storeName]);
			}
		});
	}
	return Object.assign<Store, IRootStore>(storeInstance, {
		hydrate(hydrateStores?: HydrationDataType<Store>) {
			if (!hydrateStores) return;

			callHydrateFunction(storeInstance, hydrateStores);
		},
	});
}
