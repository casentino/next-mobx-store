import { ObservableMap, ObservableSet } from 'mobx';
import { IHydrationStore } from './IHydrationStore';
import { ExcludeType, TransformMap, TransformSet, ToNotOptional } from './Utils';

export type HydrationDataType<Store extends object = object> = Partial<ExcludeType<Store, CallableFunction>>;

export type HydrationStore<Store extends IHydrationStore = IHydrationStore> = Partial<{
	[K in keyof ExcludeType<Store, CallableFunction>]: ToNotOptional<
		ExcludeType<Store, CallableFunction>[K],
		ObservableMap
	> extends Map<infer Key, infer Value>
		? Array<[Key, Value]>
		: ToNotOptional<ExcludeType<Store, CallableFunction>[K], ObservableSet> extends Set<infer SetValue>
		? SetValue[]
		: ExcludeType<Store, CallableFunction>[K];
}>;

export type TransformCollection<Keys extends string | number | symbol, Value> = {
	[K in Keys]: TransformSet<TransformMap<Value>>;
};
