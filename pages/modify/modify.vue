<template>
	<view class="v-form">
		<view class="">
			<h1>编辑{{modifyName}}相关内容</h1>
		</view>
		<view>
			<form action="">

				this is modify page.......
				<table border='1'>
					<tr>
						<th>图片</th>
						<th>内容</th>
					</tr>
					<tr>
						<td>
							<image :src="imgsrc" @click="selectImage"></image>
						</td>
						<td><textarea placeholder="请输入要编辑的内容" /></td>
					</tr>

				</table>


				<button @click="upload">modify</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modifyName: '',
				imgsrc: '/static/addimages.png'
			
			
			}
		},
		
		methods: {
			onLoad(op) {
				
			this.modifyName=op.name
				console.log("op--->",this.modifyName)
			},
			show() {
				uni.request({
					url: '/modify',
					method: 'POST',
					data: {
						name: 'tom',
						age: 32
					},

					success: (res) => {
						console.log("why>>>>>>>>>>>", res.data)
						this.modify = res.data
					}
				})
			},
			selectImage() {
				uni.chooseImage({
					count: 1,
					//sizeType: ['compressed'],
					//sourceType: ['album'],
					success: res => {

						this.imgsrc = res.tempFilePaths[0]
						this.imageName=res.tempFiles[0].name
						console.log("..........", JSON.stringify(res.tempFiles[0].name))
					}
				})
			},
			upload(){
					
				      const filePath = this.imgsrc; // 获取用户选择的第一张图片
					let dat={'imageName':this.imageName}
			
				      uni.uploadFile({
				        url: 'http://localhost:3000/modify', // CentOS服务器地址及API路由
				        filePath: filePath,
						
					
				        name: 'image', // 指定上传参数名称（根据自己的情况修改）
						formData:{dat:JSON.stringify(dat) },
						//header:{'content-type': 'multipart/form-data'} ,
				        success: (res) => {
							
				          console.log('上传成功');
				          console.log(res)
				          // 这里可以对返回结果进行处理或者展示提示信息等操作
				        },
				        fail: (err) => {
				          console.error('上传失败', err);
				          
				          // 这里可以对错误进行处理或者展示提示信息等操作
				        }
				      });
				    
			}
		}
	}
	
	
	
	
</script>

<style>
	image {
		height: 100px;
		width: 100px;
	}

	textarea {
		height: 100px;
		width: 800px;
	}

	.v-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
	}
</style>