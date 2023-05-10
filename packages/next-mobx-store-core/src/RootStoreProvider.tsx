import React from 'react';
import { HydrationDataType, IRootStore } from '@next-mobx-store/type';
import initializeRootStore from './initializeRootStore';

export const MobXStoreContext = React.createContext<IRootStore | undefined>(undefined);

interface RootStoreProviderProps {
	hydrateData?: HydrationDataType;
}

export default function RootStoreProvider({ children, hydrateData }: React.PropsWithChildren<RootStoreProviderProps>) {
	const store = initializeRootStore(hydrateData);
	return <MobXStoreContext.Provider value={store}>{children}</MobXStoreContext.Provider>;
}
