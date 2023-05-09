import { HydrationStore } from './HydrationType';

export interface IHydrationStore {
	hydrate(hydrateData?: HydrationStore): void;
}
