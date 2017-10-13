import { Observable } from 'rxjs';
import { VirtualTimeScheduler } from 'rxjs/scheduler/VirtualTimeScheduler';
import { searchJokes } from '../ducks/JokesDucks';
import { configureStore } from '../configureStore';

it('should perform a search (redux)', function () {

  const scheduler = new VirtualTimeScheduler();
  const deps = {
    scheduler,
    ajax: {
      getJSON: () => Observable.of({result: [
        {
          id: '123asd',
          value: 'this is a joke!',
          url: 'http://test.com/image.jpg'
        }
      ]})
    }
  };

  const store = configureStore(deps);

  const action = searchJokes('test');

  store.dispatch(action);

  scheduler.flush();

  expect(store.getState().jokes.length).toBe(1);
});