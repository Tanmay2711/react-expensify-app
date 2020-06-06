import {createStore} from 'redux';

const incrementBy = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrementBy = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
});

const resetTo = ({resetTo = 0} = {}) => ({
    type:'RESET',
    resetTo
});

const store = createStore((state = {count:0}, action) => {
    switch(action.type){
        case 'INCREMENT': 
        return {
            count: state.count + action.incrementBy
        }
        case 'DECREMENT': 
        return {
            count: state.count - action.decrementBy
        }
        case 'RESET': 
        return {
            count: action.resetTo
        }
        default:
           return state;
    }
});


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementBy({incrementBy:1}));


store.dispatch(decrementBy({decrementBy:10}));


store.dispatch(resetTo({resetTo:100}));

store.dispatch(decrementBy({decrementBY:10}));

store.dispatch(decrementBy());
