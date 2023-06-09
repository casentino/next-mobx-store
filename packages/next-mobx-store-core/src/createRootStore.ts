import type {
  IRootStore,
  HydrationDataType,
  CreateRootStoreConfig,
} from "@next-mobx-store/type";
import { hasHydrate } from "./common/utils";
import { deserializeStore, initializeHydrationUtil } from "./hydrationUtils";

export let rootInstance: IRootStore;
export function setRootInstance(instance: IRootStore) {
  if (!rootInstance) {
    rootInstance = instance;
  }
}

export default function createRootStore<Store extends object>(
  storeInstance: Store,
  config?: Partial<CreateRootStoreConfig>
) {
  if (config) {
    const { serialize, deserialize } = config;
    initializeHydrationUtil({ serialize, deserialize });
  }
  function isInHydarateStore<Target extends Record<string, unknown>>(
    memberName: string | number | symbol,
    rootMember: Target
  ): memberName is keyof Target {
    if (memberName in rootMember) {
      return true;
    }
    return false;
  }
  function callHydrateFunction(
    store: Store,
    hydrateStores: HydrationDataType<Store>
  ) {
    const storeMembers = Object.entries(store);
    storeMembers.forEach(([storeName, store]) => {
      if (hasHydrate(store) && isInHydarateStore(storeName, hydrateStores)) {
        const hydrateData = hydrateStores[storeName as keyof HydrationDataType];
        store.hydrate(deserializeStore(store, hydrateData));
      }
    });
  }
  const hydrate = config?.hydrate
    ? config.hydrate
    : (hydrateStores?: HydrationDataType<Store>) => {
        if (!hydrateStores) return;

        callHydrateFunction(storeInstance, hydrateStores);
      };
  const store = Object.assign<Store, IRootStore>(storeInstance, { hydrate });
  setRootInstance(store);
  return store;
}
