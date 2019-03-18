<template>
	<div class="text-sections">
		<div v-if="textFormat.length" class="text-sections-content"  :class="{ 'rotate-left': finish}">
			
				<span v-for="item in textFormat">
					<transition enter-active-class="animated-fast zoomIn">
						<p v-show="item.show" :style="{fontSize: item.size + 'px', color: item.color}">{{ item.content }}</p>
					</transition>
				</span>
			
		</div>
	</div>
</template>
<script>

	let _ = require('lodash')

	export default {
	  name: 'TextSections',
	  props: ['txt', 'last'],
	  data () {
	  	console.log( this.last )

	    return {
	    	textFormat: [],
	    	pointer: 0,
	    	finish: false
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
		  				size: _.random(42, 80),
		  				color: '#ffffff',
		  				content: item
		  			} 

	  			})

	  			
	  			this.pointer++

	  			if( this.pointer == this.txt.length ){ 
	  				clearInterval(timer)
	
					if( this.last ) return 

					this.$emit('update-state', 'done')

  					_.delay(function(){

  						this.finish = true

  					}.bind(this), 2000)

	  	
	  			}

	  			this.$emit('after-append')

	  		}.bind(this), 1000)
	  	}
	  },
	 
	}

</script>

<style>
	
</style>	