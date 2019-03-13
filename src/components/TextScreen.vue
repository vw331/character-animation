<template>
  <div class="main-screen">
	<text-sections v-bind:txt="txt"></text-sections>
  </div>
</template>

<script>

	import TextSections from "@/components/TextSections";

	export default {
	  name: 'TextScreen',
	  data(){
	  	return {
	  		txt: ['明月几时有？','把酒问青天。','不知天上宫阙，','今夕是何年。','我欲乘风归去，','又恐琼楼玉宇，','高处不胜寒。','起舞弄清影，','何似在人间？']
	  	}
	  },
	  components: {
	  	TextSections,
	  }
	}
</script>

<style>

</style>