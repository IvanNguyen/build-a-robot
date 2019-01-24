import axios from 'axios';

export default {
    // use namespaced to specify dispatch action form what modules 
    namespaced: true,
    state: {
        cart: [],
        parts: null,
        foo: 'robots-foo'
    },
    mutations: {
       addRobotToCart(state, robot) {
        state.cart.push(robot);
       } ,
       updateParts(state, parts){
           state.parts = parts;
       }
    },
    actions: {
        // getParts({state, getters, commit, dispatch}){}
        getParts({commit}){
            axios.get('/api/parts')
                .then(res => commit('updateParts',res.data))
                .catch(console.error);
        },
        addRobotToCart({commit, state}, robot){
            const cart = [...state.cart, robot];
            axios.post('/api/cart',cart)
                .then(() => commit('addRobotToCart',robot)); // update robot added in local-data
        }
    },
    getters: {
        cartSaleItems(state){
            return state.cart.filter(item => item.head.onSale);
        },
        foo(state){
            return `robots-getter/${state.foo}`;
        }
    }
}