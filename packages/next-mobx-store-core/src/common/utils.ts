import { HydrationDataType, IHydrationStore } from '@next-mobx-store/type';

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

export function isEmptyObject(data?: object): data is HydrationDataType {
  if (!data) return false;
  if (typeof data === 'object' && JSON.stringify(data) === '{}') {
    return false;
  }
  return true;
}

export function isInHydarateStore<Target extends Record<string, unknown>>(
  memberName: string | number | symbol,
  rootMember: Target,
): memberName is keyof Target {
  if (memberName in rootMember) {
    return true;
  }
  return false;
}
