import {
  observable, isObservable, ObservableMap, ObservableSet,
} from 'mobx';

import { DesrializedStore, HydrationStore } from '@next-mobx-store/type';
import AllObservableTypeStore, { storeKeys } from './mocks/AllObservableTypeStore';
import { deserializeStore, serializeStore } from '../hydrationUtils';

describe('hydration util test', () => {
  let aotStore: AllObservableTypeStore;

  let serialize: Record<string, any>;
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
    serialize = serializeStore(aotStore);
  });
  it('serialize have to exclude function', () => {
    storeKeys.forEach((key) => {
      expect(serialize[key]).not.toBeInstanceOf(Function);
    });
  });

  it('serialize have to change collection', () => {
    function isMap(value: unknown): value is Map<string, unknown> | ObservableMap {
      if (value instanceof Map || value instanceof ObservableMap) {
        return true;
      }
      return false;
    }
    function isSet(value: unknown): value is Set<string> | ObservableSet {
      if (value instanceof Set || value instanceof ObservableSet) {
        return true;
      }
      return false;
    }
    storeKeys.forEach((key) => {
      if (isMap(serialize[key])) {
        expect(serialize[key]).toBeInstanceOf(Array);
        expect(serialize[key][0]).toBeInstanceOf(Array);
      }
      if (isSet(serialize[key])) {
        expect(serialize[key]).toBeInstanceOf(Array);
        expect(typeof serialize[key][0] === 'string').toBeTruthy();
      }
    });
  });

  it('serialize store is not Observable value', () => {
    storeKeys.forEach((key) => {
      expect(isObservable(serialize[key])).toBeFalsy();
    });
  });
  it('deserialize result have to observable values', () => {
    const deserialize = deserializeStore(aotStore, serialize);
    storeKeys.forEach((key) => {
      const property = deserialize[key as keyof DesrializedStore<AllObservableTypeStore, HydrationStore<AllObservableTypeStore>>];
      if (property !== undefined) {
        expect(isObservable(property)).toBeTruthy();
      }
    });
  });
});
