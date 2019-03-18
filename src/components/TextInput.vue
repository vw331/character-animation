<template>
	<div class="input-wrap">
		<textarea class="input-area"></textarea>
		<button class="btn">开始</button>
	</div>
</template>

<script>
	export default {
		name: 'TextInput',
		data(){
			return {

			}
		}
	}

</script>

<style>
	.input-wrap {
		display: flex;
		flex-direction: column;
		max-width: 500px;
		height: 100%;
		margin: 0 auto;
	}

	.input-area {
		flex: 1;
		width: 100%;
		background-color: #f2f2f2;
		padding: 10px;
		font-size: 15px;
		line-height: 1.5;
		color: #666666;
	}

	.btn {
		height: 40px;
		margin-top: 20px;
	}
</style>