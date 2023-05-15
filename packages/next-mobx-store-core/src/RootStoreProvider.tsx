import React from 'react';
import { IRootStore } from '@next-mobx-store/type';

export const MobXStoreContext = React.createContext<IRootStore | undefined>(undefined);

interface RootStoreProviderProps {
	store?: IRootStore;
}

export default function RootStoreProvider({ children, store }: React.PropsWithChildren<RootStoreProviderProps>) {
	return <MobXStoreContext.Provider value={store}>{children}</MobXStoreContext.Provider>;
}
