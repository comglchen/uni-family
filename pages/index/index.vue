<template>
	<view class="content">
		<image src="http://localhost:3000/img/陈桂芳.png"></image>
		<h2 style='text-align:center'>陈桂芳家族检索</h2>
		    <input type="text" id="fname" name="fname" placeholder="请输入要搜索的人名" v-model="searchname"><button @click="search">搜索</button>
		    <table style='border-collapse:collapse' >
		
		        <tr><th >照片</th>
		            <th >姓名</th>
		            <th >简介</th>
		       
		            <th >参与编辑</th>
		        </tr>
		   
		
		       <tr v-for="(item,index) in context  " :key='index'>  
			   <td><image :src="item.url" @click="clickImg(item)"></image></td>
			       
		            <td class="showcontent""> <text v-for="(i,d) in item.name.split('')" :key='d' :style="setColor(i)">{{i}} </text> </td>
				
		            <td class="showcontent" ><text v-for="(i,d) in item.detail.split('')" :key='d' :style="setColor(i)">{{i}} </text> </td>
		            
		           
		          
				   <td><a href="javascript:;" @click="edit(item)"> 编辑意见</a>     </td>
				   
		        </tr> 
			
	 
		         
		      
		    </table>
			
			
			
		
	</view>
	
</template>

<script>
	import axios from 'axios';
	import $ from "@/js/jquery-3.5.1.js"
	export default {
							data() {
									return {
										context:[],
										searchname: '',
										
										getdatas:''
									}
							},
							
							methods:{
								edit(items){
								
									uni.navigateTo({
										url:"/pages/modify/modify?name="+items.name + "&detail="+items.detail+"&url="+items.url
									}),
									console.log(name)
								}	,
								search(){
										console.log("searching.....")
										uni.request({
										url:"/getData?name="+this.searchname,
												success:res=>{
												this.context=res.data
												console.log("======",res.data)
																															
												}
										})	
																						
								},
								
								setColor(i){
									  if(this.searchname.indexOf(i)!=-1){
										  return 'color:#007aff'
									  }
								},
								clickImg(item) {
												
												uni.previewImage({
													urls: [item.url], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
													current: 'item.url', // 当前显示图片的http链接，默认是第一个
													success: function(res) {},
													fail: function(res) {},
													complete: function(res) {},
												})
											}
							}						
	}			
											
								
							
								
								
											
								
					

				
				
</script>				
	


<style>
	
	image{
		width: 33px;
		height: 53px;
	}
	    table,th,td{
			margin: 50px;
	        border:solid 1px;
	    }
  
</style>
