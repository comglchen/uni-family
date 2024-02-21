<template>
	<view>
		<view  v-for="(item,index) in context" :key=index>
			
			name:{{item.name}}
			detail:{{item.detail}}
		</view>
		
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				context:[]
			}
		},
		methods: {
			
		},
		onLoad(op) {
			
			this.context=JSON.parse(op.context)
			console.log("op--->",this.context)
		}
	}
</script>

<style>

</style>
