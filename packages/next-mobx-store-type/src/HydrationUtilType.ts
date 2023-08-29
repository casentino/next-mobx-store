import type { HydrationStore } from './HydrationType';
import type { IHydrationStore } from './IHydrationStore';

export type SerailizedStore<Store extends IHydrationStore> = HydrationStore<Store>;

export type DesrializedStore<Store extends IHydrationStore, HStore = HydrationStore<Store>> = {
  [K in keyof HStore]?: K extends keyof Store ? Store[K] : HStore[K];
};

export type EntriesType<Store extends IHydrationStore> = [keyof Store, StoreValues<Store>];

type StoreValues<
	Store extends IHydrationStore,
	S extends HydrationStore<Store> = HydrationStore<Store>,
	Key extends keyof S = keyof S,
> = S[Key];
