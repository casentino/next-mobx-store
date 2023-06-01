import { HydrationStore } from './HydrationType';
import { IHydrationStore } from './IHydrationStore';

export interface LocalPageProps {
	localPageStores?: {
		[storename: string]: HydrationStore;
	};
}
export type LocalHydrateStores = {
	[storename: string]: IHydrationStore;
};
