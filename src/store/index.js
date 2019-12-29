import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nums: null,
    shops: JSON.parse(window.localStorage.getItem('carshops')) || []
  },
  mutations: {
    getNums(state, obj) {
      this.state.shops.forEach(item => {
        if (item.name == obj.name) {
          item.counts = obj.counts
        }
      })
      window.localStorage.setItem('carshops', JSON.stringify(this.state.shops))
    },
    getShops(state, obj) {
      this.state.shops.push(obj)
      window.localStorage.setItem('carshops', JSON.stringify(this.state.shops))
    },
    delshops(state, obj) {
      this.state.shops.splice(this.state.shops.findIndex(item => item.name == obj), 1)
      window.localStorage.setItem('carshops', JSON.stringify(this.state.shops))
    }
  },
  actions: {
    asyncdelShops(context,obj){
      setTimeout(()=>{
        context.commit('delshops',obj)
      },500)
    }
  },
})