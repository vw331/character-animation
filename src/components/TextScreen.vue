<template>
	<div class="stage" ref='stage'>
		<div class="main-screen">

			<text-sections v-for="item in queue" v-bind:txt="item"  v-bind:last="lastNode" v-on:update-state="monitor" v-on:after-append="scrollToBottom"></text-sections>

		</div>
  	</div>
</template>

<script>

	import TextSections from "@/components/TextSections";

	const content = [
		['明月几时有？','把酒问青天。','不知天上宫阙，','今夕是何年。','我欲乘风归去，','又恐琼楼玉宇，','高处不胜寒。','起舞弄清影，','何似在人间？'],
		['纤云弄巧','飞星传恨','银汉迢迢暗度','金风玉露一相逢','便胜却人间无数'],
		['柔情似水','佳期如梦','忍顾鹊桥归路','两情若是久长时','又岂在朝朝暮暮'],
		['世事一场大梦','人生几度秋凉','夜来风叶已鸣廊','看取眉头鬓上。']
	]

	export default {
	  name: 'TextScreen',
	  data(){
	  	return {
	  		queue: [],
	  		pointer: 0,
	  		lastNode: false
	  	}
	  },
	  created(){
	  	this.monitor()
	  	this.scrollToBottom()
	  },
	  components: {
	  	TextSections,
	  },
	  methods: {
	  	monitor(state){

	  		

			if( content.length > this.pointer ){

				if( content.length == this.pointer+1 ){

		  			this.lastNode = true
		  		
		  		}
	  			this.queue.push( content[this.pointer] )
	  			
	  		}

	  		this.pointer++

	  		
	  	},
	  	scrollToBottom(){

	  		this.$refs.stage.scrollTo(0,10000)
  		
	  	}
	  }
	}
</script>

<style>

	

</style>