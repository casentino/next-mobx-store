export const getIsServer = () => typeof window === 'undefined';

export function isNullable(value: unknown) {
	if (value === undefined || value === null || Number.isNaN(value)) {
		return true;
	}
	return false;
}
