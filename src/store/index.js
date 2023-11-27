import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state () {
    return {
      name: 'kim',
      age: 20,
      likes: [36, 20, 30],
      likes_boolean: [0, 0, 0],
      more: {}
    }
  },
  mutations: {
    setMore (state, payload) {
      state.more = payload
    },
    이름변경 (state) {
      state.name = 'park'
    },
    나이증가 (state, payload) {
      state.age += payload
    },
    좋아요증가 (state, payload) {
      if (state.likes_boolean[payload] == 1) {
        state.likes[payload] -= 1
        state.likes_boolean[payload] = 0
      } else if (state.likes_boolean[payload] == 0) {
        state.likes[payload] += 1
        state.likes_boolean[payload] = 1
      };
    }
  },
  actions: {
    getData (context) {
      axios
        .get('https://codingapple1.github.io/vue/more1.json')
        .then((a) => {
          context.commit('setMore', a.data)
        })
    }
  }
})

export default store
