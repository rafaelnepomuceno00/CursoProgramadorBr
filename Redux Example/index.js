const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers

const {incrementAction, decrementAction} = require('./actions/CounterActions')
const {addItemAction} = require('./actions/ListActions')

const counterReducer = require('./reducers/CounterReducer')

const listReducer = require('./reducers/ListReducer')

const allReducers = combineReducer({
    counter: counterReducer,
    list: listReducer
})

const store = createStore(allReducers);
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addItemAction('teste'))
store.dispatch(incrementAction(3));
store.dispatch(decrementAction(3));
