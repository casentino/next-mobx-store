import { observable } from 'mobx';
import AllObservableTypeStore from './mocks/AllObservableTypeStore';
import { serializeStore } from '../hydrationUtils';

describe('hydration util test', () => {
	let aotStore: AllObservableTypeStore;
	let allKeys: string[];
	beforeEach(() => {
		aotStore = new AllObservableTypeStore();
		const mapState = new Map<string, any>();
		const setState = new Set<string>();
		mapState.set('12', '12');
		mapState.set('13', '13');
		setState.add('12');
		setState.add('13');
		const plainObj = {
			foo: 'Foo',
			bar: 'BAR',
			list: 'LIST',
			arr: [1, 2, 3],
		};
		aotStore.allSetter({
			numberState: 12,
			stringState: '12',
			mapState,
			setState,
			plainObjectState: plainObj,
			observableMapState: observable.map(mapState),
			observableSetState: observable.set(setState),
			booleanState: true,
			numberOptionalState: undefined,
			stringOptionalState: undefined,
			booleanOptionalState: undefined,
			plainObjectOptionalState: undefined,
			mapOptionalState: undefined,
			setOptionalState: undefined,
			observableMapOptionalState: undefined,
			observableSetOptionalState: undefined,
		});
		allKeys = Object.keys(aotStore);
	});
	it('serialize have to exclude function', () => {
		const serialize: Record<string, any> = serializeStore(aotStore);
		allKeys.forEach((key) => {
			expect(serialize[key]).not.toBeInstanceOf(Function);
		});
	});
});
