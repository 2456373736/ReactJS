const redux= require('redux');
const reduxLogger= require('redux-logger')
const middleWare= redux.applyMiddleware
const logger= reduxLogger.createLogger();
const createStore= redux.createStore;
const combineReducer= redux.combineReducers;
const BUY_CAKE= "BUY_CAKE";
const BUY_ICECREAM= "BUY_ICECREAM";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Our First Redux Action.'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
    }
}
const initialCakeState= {
    numberOfCakes: 10
}
const initialIceCreamState= {
    numberOfIceCreams: 20
}
//(previousState, action) => newState (reducer does not mutate the old state it returns a new state)

const cakeReducer =(state= initialCakeState,action)=>{

    switch(action.type)
    {
        case 'BUY_CAKE': return {
          ...state,
             numberOfCakes: state.numberOfCakes-1
            }
        default: return state 

    }

}//redux app:

const iceCreamReducer =(state= initialIceCreamState,action)=>{

    switch(action.type)
    {
        case 'BUY_ICECREAM': return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams-1
            }
        default: return state 

    }

}//redux app:
const rootReducer= combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store= createStore(rootReducer,middleWare(logger));
console.log('Initial State: ', store.getState())
const unsubscribe= store.subscribe(()=>{})//console.log('Updated State: ',store.getState())})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe();

