import { ObservableMap, ObservableSet } from 'mobx/dist/internal';

type StepOne<Type> = undefined extends Type ? true : false;
type StepTwo<Type, CheckType> = StepOne<Type> extends true ? (CheckType extends Type ? true : false) : false;
export type ToNotOptional<Type, CheckType> = StepTwo<Type, CheckType> extends true ? Exclude<Type, undefined> : Type;

export type TransformMap<V> = ToNotOptional<V, ObservableMap> extends Map<infer Key, infer Value>
	? Array<[Key, Value]>
	: V;
export type TransformSet<V> = ToNotOptional<V, ObservableSet> extends Set<infer SetValue> ? SetValue[] : V;

export type ExcludeType<T, E> = Pick<
	T,
	{
		[K in keyof T]: T[K] extends E ? never : K;
	}[keyof T]
>;

export type IncludeType<T, I> = Pick<
	T,
	{
		[K in keyof T]: T[K] extends I ? K : never;
	}[keyof T]
>;
