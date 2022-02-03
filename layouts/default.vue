<template>
	<v-app>
		<v-app-bar app class="blue darken-3">
			<v-container class="d-flex align-center">
				<nuxt-link to="/" class="white--text">NEWS</nuxt-link>
				<v-spacer />
				<div class="hidden-md-only hidden-sm-only hidden-md-and-down">
					<nuxt-link
						v-for="link in links"
						:key="link.href"
						style="text-decoration: none"
						:style="{
							color: $route.path === link.href ? '#fff' : '#BDBDBD',
						}"
						:to="link.href"
						><v-btn
							small
							:color="$route.path === link.href ? '#fff' : '#BDBDBD'"
							class="ma-2"
						>
							{{ link.text }}</v-btn
						></nuxt-link
					>
				</div>
			</v-container>
		</v-app-bar>
		<v-main>
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					href: '/',
					text: 'Главная',
				},
				{
					href: '/news',
					text: 'Новости',
				},
				{
					href: '/photos',
					text: 'Фотографии',
				},
			],
		}
	},
	async mounted() {
		if (this.$store.state.articles.articls.length === 0)
			await this.$store.dispatch('articles/getArticls')
	},
}
</script>
