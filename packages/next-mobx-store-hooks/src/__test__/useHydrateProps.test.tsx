import { isObservable } from 'mobx';
import { renderHook, act } from '@testing-library/react';
import { createRootStore, serializeStore } from '@next-mobx-store/core';
import RootStore from './mocks/RootStore';
import { HydrationDataType } from '@next-mobx-store/type';
import useHydrateProps from '../useHydrateProps';
import TodoStore from './mocks/TodoStore';

describe('useHydrateProps test', () => {
  let store: RootStore;
  let pageProps: {
    hydrationData?: HydrationDataType
  }
  beforeEach(() => {
    store = new RootStore();
    createRootStore(store);

  });
  it('useHydrateProps hydration test', async () => {
    const todoStore = new TodoStore();
    todoStore.addTodo({
      id: 1,
      title: '1',
      content: '1',
      checked: false
    })
    pageProps = {
      hydrationData: {
        todoStore: serializeStore(todoStore)
      }
    }
    expect(store.todoStore.todoList.length).toBe(0);
    const { result } = renderHook(() => useHydrateProps(pageProps))

    act(() => {
      const { store, props } = result.current;
      expect(isObservable((store as unknown as RootStore).todoStore)).toBe(true);
      expect((store as unknown as RootStore).todoStore.todoList.length).toBe(1);
      expect(props).not.toHaveProperty('hydrationData');
    });
  })

})
