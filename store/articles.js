export const state = () => ({
	articls: [],
	loading: true,
})
export const mutations = {
	setArticls(state, articls) {
		state.articls = articls
	},
	setLoading(state, loading) {
		state.loading = loading
	},
}
export const actions = {
	async getArticls({ commit }) {
		commit('setLoading', true)
		try {
			const { data } = await this.$axios.get('/articles')
			commit('setArticls', data)
		} catch (error) {
			console.log(error)
		} finally {
			commit('setLoading', false)
		}
	},
}

export const getters = {
	getArticlsSlider(state) {
		let articlsSlider = []
		state.articls.forEach((el) => {
			if (el.slider) articlsSlider.push(el)
		})
		return articlsSlider
	},
	getArticls(state) {
		return state.articls
	},
	loading(state) {
		return state.loading
	},
}
