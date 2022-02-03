<template>
	<v-row>
		<v-col cols="6">
			<v-text-field
				v-model="name"
				:rules="rules"
				validate-on-blur
				label="Имя"
			></v-text-field>
			<v-textarea
				v-model="comment"
				:rules="rules"
				label="Коментарий"
			></v-textarea>

			<v-btn
				:disabled="comment && name ? false : true"
				@click="addComment"
				outlined
				class="ml-3"
				color="dark"
				>Отправить</v-btn
			>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data: () => ({
		name: '',
		comment: '',
		rules: [(value) => !!value || 'Обязательное поле.'],
	}),
	methods: {
		async addComment() {
			const { data } = await this.$axios.post(
				`articles/${this.$route.params.id}/comments`,
				{ user_name: this.name, comment: this.comment }
			)
			if (data === 1) {
				this.$store.dispatch('articl/getComments', this.$route.params.id)
				this.name = ''
				this.family = ''
				this.comment = ''
			}
		},
	},
}
</script>
