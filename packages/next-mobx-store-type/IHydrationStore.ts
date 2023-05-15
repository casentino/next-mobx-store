import { HydrationStore } from './HydrationType';
import { DesrializedStore } from './HydrationUtilType';

export interface IHydrationStore {
	hydrate(hydrateData?: DesrializedStore<IHydrationStore, HydrationStore>): void;
}
