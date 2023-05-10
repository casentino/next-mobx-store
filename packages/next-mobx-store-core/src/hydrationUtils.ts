import type {
	HydrationStore,
	IHydrationStore,
	DesrializedStore,
	EntriesType,
	SerailizedStore,
} from '@next-mobx-store/type';
import { observable, ObservableMap, ObservableSet, toJS } from 'mobx';
import { isNullable } from './common/utils';

export function serializationStore<Store extends IHydrationStore>(store: Store): SerailizedStore<Store> {
	function parser(o: Record<string, any>) {
		return Object.entries(o).reduce((prev, curr) => {
			const [key, value] = curr;
			let parsedValue = value;

			if (typeof parsedValue === 'object') {
				if (parsedValue instanceof Map || parsedValue instanceof ObservableMap) {
					parsedValue = Array.from(parsedValue.entries());
				}
				if (parsedValue instanceof Set || parsedValue instanceof ObservableSet) {
					parsedValue = Array.from(parsedValue.values());
				}
			}
			if (value instanceof Function || isNullable(value)) {
				return prev;
			}
			return {
				...prev,
				[key.replace('_', '')]: parsedValue,
			};
		}, {});
	}
	return parser(toJS(store));
}

export function deserializationStore<Store extends IHydrationStore>(
	store: Store,
	serailizedStore: HydrationStore<Store>
): DesrializedStore<Store, HydrationStore<Store>> {
	if (typeof serailizedStore !== 'object') return {};
	const entreis = Object.entries(serailizedStore) as Array<EntriesType<Store>>;

	return entreis.reduce<DesrializedStore<Store, HydrationStore<Store>>>((prev, curr) => {
		const [key, value] = curr;
		if (value instanceof Array) {
			if (store[key] instanceof ObservableSet || store[key] instanceof Set) {
				return {
					...prev,
					[key]: observable.set(value),
				};
			}
			if (store[key] instanceof ObservableMap || store[key] instanceof Map) {
				return {
					...prev,
					[key]: observable.map(value),
				};
			}
			if (store[key] instanceof Array) {
				return {
					...prev,
					[key]: observable.array(value),
				};
			}
		}
		return {
			...prev,
			[key]: value,
		};
	}, {});
}
