import { createStore } from 'redux';

const initialState = {
  todos: [],
  posts: []
}

function myReducer( state = initialState, action){
  if (action.type == 'ADD_TODO') {
    return {
    ...state, 
      todos: [ ...state.todos, action.todo]
    }
  }
  if (action.type == 'ADD_POST') {
    return {
      ...state, 
      posts: [ ...state.posts, action.post ]
    }
  }
}

const store = createStore(myReducer);

store.subscribe(()=>{
  console.log('state updated');
  console.log(store.getState());
})

const action1 = { type: 'ADD_TODO', todo: 'buy dozen eggs' };
const action2 = { type: 'ADD_POST', post: 'new post' };
const action3 = { type: 'ADD_TODO', todo: 'buy some milk' };

store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
