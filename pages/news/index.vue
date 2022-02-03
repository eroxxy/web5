<template>
	<v-row class="d-flex flex-wrap">
		<v-col cols="12" v-for="item in articls" :key="item.id">
			<card :item="item" />
		</v-col>
	</v-row>
</template>

<script>
import { mapState } from 'vuex'
import Card from '~/components/Card.vue'
export default {
	components: { Card },
	computed: {
		...mapState({
			articls: (state) => state.articles.articls,
		}),
	},
}
</script>
