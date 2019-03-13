<template>
	<div class="text-sections ">
		<div v-if="textFormat.length">
			
				<span v-for="(item, index) in textFormat">
					<transition enter-active-class="animated zoomIn">
						<p v-show="item.show" :style="{fontSize: item.size + 'px', color: item.color}">{{ item.content }}</p>
					</transition>
				</span>
			
		</div>
	</div>
</template>
<script>


	export default {
	  name: 'TextSections',
	  props: ['txt'],
	  data () {
	  	console.log( this.txt )

	    return {
	    	textFormat: [],
	    	pointer: 0
	    }
	  },
	  created(){
	  	this.start()
	  },
	  methods: {
	  	start(){

	  		let timer = setInterval(function(){

	  			this.textFormat = this.txt.map((item, index) => {

	  				return {
	  					show: this.pointer >= index,
		  				size: 28 + Math.ceil(Math.random()*16),
		  				color: '#ffffff',
		  				content: item
		  			} 

	  			})

	  			
	  			this.pointer++
	  			console.log(222)

	  			if( this.pointer == this.txt.length ) clearInterval(timer)

	  		}.bind(this), 1500)
	  	}
	  },
	 
	}

</script>

<style>
	
</style>	