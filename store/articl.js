export const state = () => ({
  articl: {},
  comments: [],
  loading: true,
  loadingComments: true,
})
export const mutations = {
  setArticl(state, articl) {
    state.articl = articl
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setLoadingComments(state, loading) {
    state.loadingComments = loading
  },
  setComments(state, comments) {
    state.comments = comments
  },
}

export const actions = {
  async getArticl({ commit }, id) {
    commit('setLoading', true)
    try {
      const { data } = await this.$axios.get(`/articles/${id}`)
      commit('setArticl', data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setLoading', false)
    }
  },
  async getComments({ commit }, id) {
    commit('setLoadingComments', true)
    try {
      const { data } = await this.$axios.get(`/articles/${id}/comments`)
      commit('setComments', data)
    } catch (error) {
      console.log(error)
    } finally {
      commit('setLoadingComments', false)
    }
  },
}

export const getters = {
  getArticl(state) {
    return state.articl
  },
  loading(state) {
    return state.loading
  },
  loadingComments(state) {
    return state.loadingComments
  },
  getComments(state) {
    return state.comments
  },
}
