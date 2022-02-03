<template>
	<v-card>
		<v-card-title class="text-h5">
			{{ item.name }}
		</v-card-title>

		<v-card-subtitle>{{ item.shortDesc }}</v-card-subtitle>

		<v-card-actions>
			<v-spacer />
			<v-btn text>
				<nuxt-link
					style="color: #333; text-decoration: none"
					:to="`news/${item.id}`"
					>Посмотреть полностью</nuxt-link
				>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			require: true,
		},
	},
}
</script>
