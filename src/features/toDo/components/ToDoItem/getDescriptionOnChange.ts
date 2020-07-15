import { updateToDo } from '../../toDoSlice';
import { store } from 'app/store';

export const getDescriptionOnChange = (toDoId?: number) => (
  description: string,
): void => {
  if (!toDoId) {
    return;
  }
  store.dispatch(
    updateToDo({
      toDoId,
      description,
    }),
  );
};
