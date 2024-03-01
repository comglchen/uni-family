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
						<td><textarea placeholder="请输入要编辑的内容" v-model="modifyDetail" /></td>
					</tr>

				</table>


				<button @click="upload">modify</button>
			</form>
			<image src="http://localhost:3000/img/image-1709282987443-320586179.png"></image>
		</view>
	</view>
</template>

<script>
	//import FileSaver from 'file-saver'
	export default {
		data() {
			return {
				modifyName: '',
				imgsrc: '/static/addimages.png',
				modifyDetail: '',
				//imgUrl: 'http://localhost:3000/img/image-1709282987443-320586179.png'

			}
		},

		methods: {
			onLoad(op) {
				this.imgsrc = op.url
				this.modifyName = op.name
				this.modifyDetail = op.detail
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
						this.imageName = res.tempFiles[0].name
						console.log("..........", JSON.stringify(res.tempFiles[0].name))


					}
				})
			},
			upload() {

				const filePath = this.imgsrc; // 获取用户选择的第一张图片
				let dat = {
					'imageName': this.imageName,
					'modifyName': this.modifyName,
					'modifyDetail': this.modifyDetail
				}

				uni.uploadFile({
					url: 'http://localhost:3000/upload', // CentOS服务器地址及API路由
					filePath: filePath,


					name: 'image', // 指定上传参数名称（根据自己的情况修改）
					formData: {
						dat: JSON.stringify(dat)
					},
					//header:{'content-type': 'multipart/form-data'} ,
					success: (res) => {
						//下载用户上传的图片
						//var oA = document.createElement("a"); // 创建一个a标签
						// 正则表达式，这里是把图片文件名分离出来。拿到文件名赋到a.download,作为文件名来使用文本 ,
						// a的download 谷歌浏览器必须同源才能强制下载，否则跳转到图片地址
						//oA.download = this.imgUrl;; // 设置下载的文件名，默认是'下载'
						//oA.href = this.imgUrl;
						//document.body.appendChild(oA);
						//oA.click();
						//oA.remove(); // 下载之后把创建的元素删除
						//console.log("remove success............")
						//let imgUrl = 'http://www.test.com/img/xxxx.jpg' //网络图片地址  
						 // FileSaver.saveAs(this.imgUrl, 'myimage.png');
						uni.request({
							url: 'http://localhost:3000/modify',
							method: "post",
							success: (res) => {


							}
						})
						console.log('上传成功');

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
		height: 50px;
		width: 800px;
	}

	.v-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	image {
		width: 33px;
		height: 53px;
	}

	table,
	th,
	td {
		margin: 50px;
		border: solid 1px;
	}
</style>