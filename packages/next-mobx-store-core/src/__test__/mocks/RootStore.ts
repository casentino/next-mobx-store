import { HydrationDataType, IHydrationStore, IRootStore } from '@next-mobx-store/type';
import TodoStore from './TodoStore';

export default class RootStore {
	todoStore: TodoStore;
	constructor() {
		this.todoStore = new TodoStore();
	}
}
