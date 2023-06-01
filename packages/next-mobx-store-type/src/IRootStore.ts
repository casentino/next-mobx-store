import { HydrationDataType } from './HydrationType';
export interface IRootStore {
	hydrate(hydrateStores?: HydrationDataType): void;
}
