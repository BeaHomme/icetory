import { defineStore } from 'pinia'

export default defineStore('cart', {
  state: () => ({ 
    categories: [],
    products: [],
    openedProduct: {},
    cartProducts: [],

    cartVisible: false,
    createOrder: false,
    haveSearchValue: false,
    mobileMenu: false,
  }),
  getters: {
    reducedProducts(state) {
      return state.cartProducts.reduce((arr, product) => ({ [product.id]: product, ...arr }), {});
    },
    reducedCategories(state) {
      return state.categories.reduce((arr, cat) => ({ [cat.id]: cat, ...arr }), {});
    },
    totalSum(state) {
      return state.cartProducts.reduce((total, product) => {
        const price = (product.discount_price || product.price) * product.count;
        return total + price;
      }, 0) || 0;
    },
  },
  actions: {
    addProduct(product) {
      if (this.reducedProducts[product.id]) {
        const p = this.cartProducts.find(item => item.id === product.id);
        p.count++;
      } else {
        product.count = 1;
        this.cartProducts.push(product);
      }
    },
    deleteProducts(productId) {
      console.log(productId);
      if (this.reducedProducts[productId].count === 1) {
        this.cartProducts = this.cartProducts.filter(item => { item.id !== productId });
      } else {
        const p = this.cartProducts.find(item => item.id === productId);
        p.count--;
      }
    },
  },
})
