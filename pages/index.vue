<template>
	<div>
		<v-carousel height="400" class="mt-5">
			<v-carousel-item
				v-for="article in getArticlsSlider"
				:key="article.id"
				:src="`img/${article.full_image}`"
			/>
		</v-carousel>

		<h1 class="text-center">Lorem</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quos animi
			dolorem autem dolorum? Ullam nesciunt debitis voluptate? Dolore
			perferendis fugiat tenetur alias sint quos tempora consectetur
			voluptatibus expedita ipsum.
		</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters('articles', ['getArticlsSlider']),
	},
}
</script>
