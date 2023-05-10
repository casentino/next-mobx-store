import React from 'react';
import { MobXStoreContext } from '@next-mobx-store/core';

export default function useRootStore() {
	const context = React.useContext(MobXStoreContext);

	if (context === undefined) {
		throw new Error('useRootStore must be used within RootStoreProvider');
	}

	return context;
}
