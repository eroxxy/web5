<template>
	<v-row class="ma-3">
		<v-row class="d-flex flex-wrap">
			<v-col md="12" sm="12" cols="12">
				<div class="d-flex">
					<h1>{{ articl.name }}</h1>
					<v-spacer />
					<p>{{ articl.date }}</p>
				</div>
				<p>{{ articl.desc }}</p>
				<v-img
					:src="'../img/' + articl.full_image"
					width="100%"
					height="250px"
				/>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<form-comment />
			</v-col>
		</v-row>
		<v-row>
			<comment-card
				v-for="item in comments"
				:key="item.id"
				:com="item"
			></comment-card>
		</v-row>
	</v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters('articl', {
			articl: 'getArticl',
			comments: 'getComments',
		}),
	},
	async mounted() {
		await this.$store.dispatch('articl/getArticl', this.$route.params.id)
		await this.$store.dispatch('articl/getComments', this.$route.params.id)
	},
}
</script>
