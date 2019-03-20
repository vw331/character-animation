<template>
	<div class="input-wrap">
		<textarea class="input-area" v-model="text"></textarea>
		<button class="btn">开始</button>
	</div>
</template>

<script>

const content2 =
 `明月几时有
把酒问青天
不知天上宫阙
今夕是何年

我欲乘风归去
又恐琼楼玉宇
高处不胜寒
起舞弄清影
何似在人间

纤云弄巧
飞星传恨
银汉迢迢暗度
金风玉露一相逢

便胜却人间无数
柔情似水
佳期如梦

忍顾鹊桥归路
,两情若是久长时
又岂在朝朝暮暮
世事一场大梦

人生几度秋凉
夜来风叶已鸣廊
看取眉头鬓上
`

	export default {
		name: 'TextInput',
		data(){
			return {
				text: content2
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
		font-size: 16px;
		line-height: 1.5;
		color: #666666;
		border-radius: 1%
	}

	.btn {
		height: 40px;
		margin-top: 20px;
	}
</style>