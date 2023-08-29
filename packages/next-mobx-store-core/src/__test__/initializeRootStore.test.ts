import createRootStore, { rootInstance } from '../createRootStore';
import { serializeStore } from '../hydrationUtils';
import initializeRootStore from '../initializeRootStore';
import RootStore from './mocks/RootStore';
import TodoStore from './mocks/TodoStore';

describe('initializeRootStore test', () => {
  it('undefined RootStoreInstance', () => {
    expect(rootInstance).toBeFalsy();

    expect(() => {
      try {
        initializeRootStore({
          todoStore: serializeStore(new TodoStore()),
        });
      } catch (err) {
        if (err instanceof Error) {
          expect(err.message).toBe(
            'RootStore is undefined. Must use `createRootStore()` to make the `RootStore` hydratable.',
          );
        }
        throw err;
      }
    }).toThrow(Error);
  });

  it('intializeRootStore success', () => {
    const store = createRootStore(new RootStore());
    expect(store).toHaveProperty('hydrate');
    expect(store.hydrate).toBeInstanceOf(Function);
    const rootHydrateMock = jest.spyOn(store, 'hydrate');

    const hydrateData = {
      todoStore: serializeStore(new TodoStore()),
    };
    expect(() => initializeRootStore(hydrateData)).not.toThrow(Error);

    expect(rootHydrateMock).toBeCalledTimes(1);
  });
  it('not called hydrate. empty hydratedata', () => {
    const store = createRootStore(new RootStore());
    expect(store).toHaveProperty('hydrate');
    expect(store.hydrate).toBeInstanceOf(Function);
    const rootHydrateMock = jest.spyOn(store, 'hydrate');

    expect(() => initializeRootStore()).not.toThrow(Error);

    expect(rootHydrateMock).not.toBeCalled();
  });
});
