import type { IRootStore, HydrationDataType, IHydrationStore, HydrationStore } from '@next-mobx-store/type';
import { hasHydrate } from './common/utils';
import { deserializationStore } from './hydrationUtils';

export let rootInstance: IRootStore;
export function setRootInstance(instance: IRootStore) {
	if (!rootInstance) {
		rootInstance = instance;
	}
}
export default function createRootStore<Store extends object>(storeInstance: Store) {
	function isInHydarateStore<Target extends Record<string, unknown>>(
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
			if (hasHydrate(store) && isInHydarateStore(storeName, hydrateStores)) {
				const hydrateData = hydrateStores[storeName as keyof HydrationDataType];
				store.hydrate(deserializationStore(store, hydrateData));
			}
		});
	}
	const store = Object.assign<Store, IRootStore>(storeInstance, {
		hydrate(hydrateStores?: HydrationDataType<Store>) {
			if (!hydrateStores) return;

			callHydrateFunction(storeInstance, hydrateStores);
		},
	});
	setRootInstance(store);
	return store;
}
