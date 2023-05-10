import type { HydrationDataType } from '@next-mobx-store/type';
import createRootStore, { rootInstance, setRootInstance } from './createStore';
import { getIsServer } from './common/utils';

export default function initializeRootStore(hydrationData?: HydrationDataType) {
	const store = rootInstance ?? createRootStore({});

	if (hydrationData) {
		store.hydrate(hydrationData);
	}
	if (getIsServer()) {
		return store;
	}
	if (!rootInstance) {
		setRootInstance(store);
	}
	return store;
}
