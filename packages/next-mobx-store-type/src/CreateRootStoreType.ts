import type { HydrationStore, HydrationDataType } from './HydrationType';
import type { SerailizedStore, DesrializedStore } from './HydrationUtilType';
import type { IHydrationStore } from './IHydrationStore';
import type { IRootStore } from './IRootStore';

export type CreateRootStoreConfig = {
  serialize: <Store extends IHydrationStore>(store: Store) => SerailizedStore<Store>;
  deserialize: <Store extends IHydrationStore>(
    sotre: Store,
    serailizedStore: HydrationStore<Store>
  ) => DesrializedStore<Store, HydrationStore<Store>>;
  hydrate: (hydrateStores?: HydrationDataType<IRootStore>) => void;
};
