import initializeRootStore from '@next-mobx-store/core/src/initializeRootStore';
import { HydrationDataType, IRootStore } from '@next-mobx-store/type';
import { AppProps } from 'next/app';
type UseHydratePropsReturn<Props> = {
	store: IRootStore;
	props: Props;
};
export default function useHydrateProps<
	P extends Omit<
		AppProps<{
			hydrationData?: HydrationDataType & {
				localPageProps?: Partial<LocalPageStores>;
			};
		}>,
		'Component'
	>,
	LocalPageStores extends Record<string, object>
>(
	props: P
): UseHydratePropsReturn<
	Omit<P, 'pageProps'> & {
		localPageProps?: Partial<LocalPageStores>;
	}
> {
	const { pageProps, ...other } = props;
	const { hydrationData } = pageProps;
	let localPageProps: Partial<LocalPageStores> = {};
	let hydrationDataType: HydrationDataType = {};
	if (hydrationData && hydrationData.localPageProps) {
		const { localPageProps: localPagePropsPartial, ...hydrationStores } = hydrationData;
		localPageProps = localPagePropsPartial;
		hydrationDataType = hydrationStores;
	}

	return { store: initializeRootStore(hydrationDataType), props: { localPageProps, ...other } };
}
