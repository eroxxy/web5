<template>
	<v-col cols="12">
		<v-card class="mx-auto" max-width="100%">
			<v-card-text class="text-h6 font-weight-bold">
				"{{ com.comment }}"
			</v-card-text>

			<v-card-actions>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title class="blue--text">{{
							com.user_name
						}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-card-actions>
		</v-card>
	</v-col>
</template>

<script>
export default {
	props: {
		com: {
			type: Object,
			require: true,
		},
	},
}
</script>
