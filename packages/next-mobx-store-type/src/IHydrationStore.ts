import { DesrializedStore } from './HydrationUtilType';

export interface IHydrationStore {
	hydrate(hydrateData?: DesrializedStore<IHydrationStore>): void;
}
