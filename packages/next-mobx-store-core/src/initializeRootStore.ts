import type { HydrationDataType } from '@next-mobx-store/type';
import { rootInstance } from './createRootStore';
import { isHydrationDataType } from './common/utils';

export default function initializeRootStore(hydrationData?: HydrationDataType) {
  if (!rootInstance) {
    throw Error(
      `RootStore is ${rootInstance}. Must use \`createRootStore()\` to make the \`RootStore\` hydratable.`,
    );
  }
  const store = rootInstance;

  if (isHydrationDataType(hydrationData)) {
    store.hydrate(hydrationData);
  }

  return store;
}
