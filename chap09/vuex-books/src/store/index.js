import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [
      {
        isbn: '978-4-8222-5389-9',
        title: '作って楽しむプログラミング HTML5超入門',
        price: 2000
      },
      {
        isbn: '978-4-7981-5757-3',
        title: 'JavaScript逆引きレシピ',
        price: 2800
      },
      {
        isbn: '978-4-7741-9763-0',
        title: '3ステップでしっかり学ぶ Python 入門',
        price: 2480
      },
      {
        isbn: '978-4-7981-5382-7',
        title: '独習C# 新版',
        price: 3600
      },
      {
        isbn: '978-4-8399-6644-7',
        title: 'たのしいラズパイ電子工作ブック',
        price: 1900
      },
    ]
  },
  getters: {
    booksCount(state) {
      return state.books.length
    },
    getBooksByPrice(state) {
      return price => {
        return state.books.filter(book => book.price < price)
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
