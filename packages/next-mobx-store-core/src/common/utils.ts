import { IHydrationStore } from '@next-mobx-store/type';

export const getIsServer = () => typeof window === 'undefined';

export function isNullable(value: unknown) {
	if (value === undefined || value === null || Number.isNaN(value)) {
		return true;
	}
	return false;
}

export function hasHydrate(store: object): store is IHydrationStore {
	if ('hydrate' in store && store.hydrate instanceof Function) {
		return true;
	}
	return false;
}
