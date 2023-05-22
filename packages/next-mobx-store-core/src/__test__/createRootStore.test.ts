import createRootStore from '../createRootStore';
import RootStore from './mocks/RootStore';
import TodoStore from './mocks/TodoStore';

const hydrateMock = jest.spyOn(TodoStore.prototype, 'hydrate');

describe('Create Root Store TEST', () => {
	let store: RootStore;
	beforeEach(() => {
		store = new RootStore();
	});
	it('createRootStore', () => {
		const rootStore = createRootStore(store);

		expect(rootStore).toHaveProperty('hydrate');
	});
	it('call hydrate test', () => {
		const rootStore = createRootStore(store);
		const todoHydrationData = {
			todoList: [],
		};

		rootStore.hydrate({ todoStore: todoHydrationData });
		expect(hydrateMock).toBeCalledTimes(1);
	});
});
