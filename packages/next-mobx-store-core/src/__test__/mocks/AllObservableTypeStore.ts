import { DesrializedStore, IHydrationStore } from '@next-mobx-store/type';
import { ExcludeType } from '@next-mobx-store/type/dist/Utils';

import {
  ObservableMap,
  ObservableSet,
  action,
  makeAutoObservable,
  observable,
} from 'mobx';

export default class AllObservableTypeStore implements IHydrationStore {
  private _numberState = 0;

  private _numberOptionalState?: number;

  private _stringState = '';

  private _stringOptionalState?: string;

  private _booleanState = false;

  private _booleanOptionalState?: boolean;

  private _plainObjectState: Record<string, any> = { name: 'plain', role: '' };

  private _plainObjectOptionalState?: Record<string, any>;

  private _mapState: Map<string, any> = new Map<string, any>();

  private _mapOptionalState?: Map<string, any>;

  private _setState: Set<string> = new Set<string>();

  private _setOptionalState?: Set<string>;

  private _observableMapState: ObservableMap<string, any> = observable.map<
  string,
  any
  >();

  private _observableMapOptionalState?: ObservableMap<string, any>;

  private _observableSetState: ObservableSet<string> = observable.set<string>();

  private _observableSetOptionalState?: ObservableSet<string>;

  allSetter(
    obj: Partial<ExcludeType<AllObservableTypeStore, CallableFunction>>,
  ) {
    const entriesObj = Object.entries(obj);
    entriesObj.forEach(([key, value]) => {
      action(() => {
        this[`_${key}` as keyof this] = value as this[keyof this];
      });
    });
  }

  setNumberState(numberState: number) {
    this._numberState = numberState;
  }

  setNumberOptionalState(numberOptionalState: number) {
    this._numberOptionalState = numberOptionalState;
  }

  setStringState(stringState: string) {
    this._stringState = stringState;
  }

  setStringOptionalState(stringOptionalState: string) {
    this._stringOptionalState = stringOptionalState;
  }

  setBooleanState(booleanState: boolean) {
    this._booleanState = booleanState;
  }

  setBooleanOptionalState(booleanOptionalState: boolean) {
    this._booleanOptionalState = booleanOptionalState;
  }

  setPlainObjectState(plainObjectState: Record<string, any>) {
    this._plainObjectState = plainObjectState;
  }

  setPlainObjectOptionalState(plainObjectOptionalState: Record<string, any>) {
    this._plainObjectOptionalState = plainObjectOptionalState;
  }

  setMapState(mapState: Map<string, any>) {
    this._mapState = mapState;
  }

  setMapOptionalState(mapOptionalState: Map<string, any>) {
    this._mapOptionalState = mapOptionalState;
  }

  setSetState(setState: Set<string>) {
    this._setState = setState;
  }

  setSetOptionalState(setOptionalState: Set<string>) {
    this._setOptionalState = setOptionalState;
  }

  setObservableMapState(observableMapState: ObservableMap<string, any>) {
    this._observableMapState = observableMapState;
  }

  setObservableMapOptionalState(
    observableMapOptionalState: ObservableMap<string, any>,
  ) {
    this._observableMapOptionalState = observableMapOptionalState;
  }

  setObservableSetState(observableSetState: ObservableSet<string>) {
    this._observableSetState = observableSetState;
  }

  setObservableSetOptionalState(
    observableSetOptionalState: ObservableSet<string>,
  ) {
    this._observableSetOptionalState = observableSetOptionalState;
  }

  get numberState() {
    return this._numberState;
  }

  get numberOptionalState() {
    return this._numberOptionalState;
  }

  get stringState() {
    return this._stringState;
  }

  get mapState() {
    return this._mapState;
  }

  get setState() {
    return this._setState;
  }

  get plainObjectState() {
    return this._plainObjectState;
  }

  get observableMapState() {
    return this._observableMapState;
  }

  get observableSetState() {
    return this._observableSetState;
  }

  get stringOptionalState() {
    return this._stringOptionalState;
  }

  get booleanState() {
    return this._booleanState;
  }

  get booleanOptionalState() {
    return this._booleanOptionalState;
  }

  get plainObjectOptionalState() {
    return this._plainObjectOptionalState;
  }

  get mapOptionalState() {
    return this._mapOptionalState;
  }

  get setOptionalState() {
    return this._setOptionalState;
  }

  get observableMapOptionalState() {
    return this._observableMapOptionalState;
  }

  get observableSetOptionalState() {
    return this._observableSetOptionalState;
  }

  constructor() {
    makeAutoObservable(this);
  }

  hydrate(hydrateData?: DesrializedStore<AllObservableTypeStore>) {
    if (!hydrateData) return;

    if (hydrateData.numberState) {
      this._numberState = hydrateData.numberState;
    }
    if (hydrateData.numberOptionalState) {
      this._numberOptionalState = hydrateData.numberOptionalState;
    }
    if (hydrateData.stringState) {
      this._stringState = hydrateData.stringState;
    }
    if (hydrateData.stringOptionalState) {
      this._stringOptionalState = hydrateData.stringOptionalState;
    }
    if (hydrateData.booleanState) {
      this._booleanState = hydrateData.booleanState;
    }
    if (hydrateData.booleanOptionalState) {
      this._booleanOptionalState = hydrateData.booleanOptionalState;
    }
    if (hydrateData.plainObjectState) {
      this._plainObjectState = hydrateData.plainObjectState;
    }
    if (hydrateData.plainObjectOptionalState) {
      this._plainObjectOptionalState = hydrateData.plainObjectOptionalState;
    }
    if (hydrateData.mapState) {
      this._mapState = hydrateData.mapState;
    }
    if (hydrateData.mapOptionalState) {
      this._mapOptionalState = hydrateData.mapOptionalState;
    }
    if (hydrateData.setState) {
      this._setState = hydrateData.setState;
    }
    if (hydrateData.setOptionalState) {
      this._setOptionalState = hydrateData.setOptionalState;
    }
    if (hydrateData.observableMapState) {
      this._observableMapState = hydrateData.observableMapState;
    }
    if (hydrateData.observableMapOptionalState) {
      this._observableMapOptionalState = hydrateData.observableMapOptionalState;
    }
    if (hydrateData.observableSetState) {
      this._observableSetState = hydrateData.observableSetState;
    }
    if (hydrateData.observableSetOptionalState) {
      this._observableSetOptionalState = hydrateData.observableSetOptionalState;
    }
  }
}

export const storeKeys = [
  'allSetter',
  'setNumberState',
  'setNumberOptionalState',
  'setStringState',
  'setStringOptionalState',
  'setBooleanState',
  'setBooleanOptionalState',
  'setPlainObjectState',
  'setPlainObjectOptionalState',
  'setMapState',
  'setMapOptionalState',
  'setSetState',
  'setSetOptionalState',
  'setObservableMapState',
  'setObservableMapOptionalState',
  'setObservableSetState',
  'setObservableSetOptionalState',
  'numberState',
  'numberOptionalState',
  'stringState',
  'mapState',
  'setState',
  'plainObjectState',
  'observableMapState',
  'observableSetState',
  'stringOptionalState',
  'booleanState',
  'booleanOptionalState',
  'plainObjectOptionalState',
  'mapOptionalState',
  'setOptionalState',
  'observableMapOptionalState',
  'observableSetOptionalState',
  'hydrate',
];
