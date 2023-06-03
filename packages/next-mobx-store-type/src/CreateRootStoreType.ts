import { HydrationStore, HydrationDataType } from './HydrationType';
import { SerailizedStore, DesrializedStore } from './HydrationUtilType';
import { IHydrationStore } from './IHydrationStore';
import { IRootStore } from './IRootStore';

export type CreateRootStoreConfig = {
	serialize: <Store extends IHydrationStore>(store: Store) => SerailizedStore<Store>;
	deserialize: <Store extends IHydrationStore>(
		sotre: Store,
		serailizedStore: HydrationStore<Store>
	) => DesrializedStore<Store, HydrationStore<Store>>;
	hydrate: (hydrateStores?: HydrationDataType<IRootStore>) => void;
};
