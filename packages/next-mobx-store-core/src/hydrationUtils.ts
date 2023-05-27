import type {
	HydrationStore,
	IHydrationStore,
	DesrializedStore,
	EntriesType,
	SerailizedStore,
} from '@next-mobx-store/type';
import { observable, ObservableMap, ObservableSet, toJS } from 'mobx';
import { isNullable } from './common/utils';
import { CreateRootStoreConfig } from './createRootStore';
import { ObservableArrayAdministration, ObservableValue } from 'mobx/dist/internal';

function serializeStoreUtil<Store extends IHydrationStore>(store: Store): SerailizedStore<Store> {
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
function deserializeStoreUtil<Store extends IHydrationStore>(
	store: Store,
	serailizedStore: HydrationStore<Store>
): DesrializedStore<Store, HydrationStore<Store>> {
	if (typeof serailizedStore !== 'object') return {};
	const entreis = Object.entries(serailizedStore) as Array<EntriesType<Store>>;

	const deserializeStore: Partial<Record<keyof Store, any>> = {};
	entreis.forEach(([key, value]) => {
		if (value instanceof Array) {
			if (store[key] instanceof ObservableSet || store[key] instanceof Set) {
				deserializeStore[key] = observable.set(value);
			}
			if (store[key] instanceof ObservableMap || store[key] instanceof Map) {
				deserializeStore[key] = observable.map(value);
			}
			if (store[key] instanceof Array) {
				deserializeStore[key] = observable.array(value);
			}
		} else if (typeof value === 'object' && value !== null) {
			deserializeStore[key] = observable.object(value);
		} else {
			deserializeStore[key] = observable.box(value);
		}
	});
	return deserializeStore as DesrializedStore<Store, HydrationStore<Store>>;
}

const hydrationUtil = new (class {
	private _serialize: typeof serializeStoreUtil = serializeStoreUtil;
	private _deserialize: typeof deserializeStoreUtil = deserializeStoreUtil;
	setSerialize(serialize: typeof serializeStoreUtil) {
		this._serialize = serialize;
	}
	get serializationStore() {
		return this._serialize;
	}

	setDeserialize(deserialize: typeof deserializeStoreUtil) {
		this._deserialize = deserialize;
	}
	get deserializationStore() {
		return this._deserialize;
	}
})();
export function initializeHydrationUtil({ serialize, deserialize }: Partial<CreateRootStoreConfig>) {
	hydrationUtil.setSerialize(serialize || serializeStore);
	hydrationUtil.setDeserialize(deserialize || deserializeStore);
}
export const serializeStore = hydrationUtil.serializationStore;
export const deserializeStore = hydrationUtil.deserializationStore;
