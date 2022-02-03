<template>
	<v-row class="d-flex flex-wrap">
		<v-col
			md="6"
			sm="6"
			cols="12"
			v-for="article in articles"
			:key="article.id"
		>
			<v-img :src="'img/' + article.full_image" />
		</v-col>
	</v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters('articles', { articles: 'getArticls' }),
	},
}
</script>
