<template>
	<v-row style="height: 100vh">
		<v-col class="d-flex flex-column justify-center" justify="center">
			<div class="loading"></div>
			<div class="text-h4 text-center" style="z-index: 1000">
				{{ text || 'загрузка' }}
			</div>
		</v-col>
	</v-row>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
		},
	},
}
</script>

<style scoped>
.loading {
	margin: 0 auto;
	width: 200px;
	animation: loading 2s linear 0s infinite;
	height: 200px;
	position: relative;
	border-radius: 50%;
	background: #fff;
}
.loading::after {
	width: 180px;
	height: 180px;
	content: '';
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #121212;
	z-index: 1;
	position: absolute;
	border-radius: 50%;
}
.loading::before {
	width: 180px;
	height: 180px;
	content: '';
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #121212;
	z-index: 1;
	position: absolute;
	border-radius: 50%;
}

@keyframes loading {
	to {
		transform: rotate(0deg);
	}
	from {
		transform: rotate(360deg);
	}
}
</style>
