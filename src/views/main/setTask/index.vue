<template>
	<div class="el-card pd20">
		<!-- <p>{{selectItem[0].list[0]}}</p> -->
		<div class="task-flex">
			<!-- 左侧添加字段 -->
			<div class="l-machine">
				<!--  -->
				<div class="el-card">
					<div class="xs-head">
						简单控件
					</div>
					<div class="machine-con pd10">
						<div class="machine-btns">
							<el-button @click="selectType('taskTitle')" type="danger" class="block" size="small">（taskTitle）任务标题</el-button>
							<el-button @click="selectType('titleType')" type="warning" class="block" size="small">（titleType）行标题</el-button>
							<el-button @click="selectType('lineAcross')" type="danger" class="block" size="small">（lineAcross）分割线</el-button>
							<el-button @click="selectType('rowEmpty')" type="danger" class="block" size="small">（rowEmpty）空白行</el-button>
						</div>
					</div>
				</div>
				<!--  -->
				<div class="el-card mt10">
					<div class="xs-head">
						普通控件
					</div>
					<div class="machine-con pd10">
						<div class="machine-btns">
							<el-button @click="selectType('fillType')" type="success" class="block" size="small">（fillType）文字带输入框</el-button>
							<el-button @click="selectType('updateImg')" type="success" class="block" size="small">（updateImg）图片上传</el-button>
							<el-button @click="selectType('radioBtn')" type="success" class="block" size="small">（radioBtn）单选按钮</el-button>
							<el-button @click="selectType('textInput')" type="success" class="block" size="small">（textInput）单行输入框</el-button>
							<el-button @click="selectType('textArea')" type="success" class="block" size="small">（textArea）多行输入框</el-button>
							<el-button @click="selectType('selectText')" type="success" class="block" size="small">（selectText）单选下拉框</el-button>
							<el-button @click="selectType('selectPos')" type="success" class="block" size="small">（selectPos）地区选择框</el-button>
							<el-button @click="selectType('selectApi1')" type="success" class="block" size="small">（selectApi1）级联下拉框-父</el-button>
							<el-button @click="selectType('selectApi2')" type="success" class="block" size="small">（selectApi2）级联下拉框-子</el-button>
						</div>
					</div>
				</div>
				<!--  -->
				<div class="el-card mt10">
					<div class="xs-head">
						特殊控件
					</div>
					<div class="machine-con pd10">
						<div class="machine-btns">
							<el-button type="primary" class="block" size="small">（selectApiData）二级级联数据</el-button>
						</div>
					</div>
				</div>
				<!--  -->
			</div>
			<!-- 中间模拟器 -->
			<div class="c-phone">
				<div class="view pr">
					<!-- 额头 -->
					<div class="head">
						<div class="eye"></div>
						<div class="headset"></div>
						<div class="lamp"></div>
					</div>
					<!-- 屏幕 -->
					<div class="screen">
						<div class="pd10" style="margin-top: 0;">







							<!-- 模拟金数据 -->
							<div @click="setCurSelectItem(i2)" :class="[activeClass === i2 ? 'active' : '', 'iphone-item pd10 mt10 pr']" v-for="(it2, i2) in selectItem" :key="it2.tid">
								<!-- 任务标题 -->
								<div v-if="it2.type === 'taskTitle'">
									<h3 class="text-center" :style="{color: it2.style.color.hex}">{{it2.value}}</h3>
								</div>
								<!-- 行标题 -->
								<div v-if="it2.type === 'titleType'">
									<div class="clearfix" style="line-height: 22px;">
										<span :class="[!it3.sizeLg ? 'font-xs' : '', 'pull-left']" :style="{'color': it3.style.color.hex, 'text-decoration': it3.style.underline}" v-for="it3 in it2.list" :key="it3.style.color.hex+it3.style.underline">{{it3.value}}</span>
									</div>
								</div>
								<!-- 分割线 -->
								<div v-if="it2.type === 'lineAcross'">
									<div>
										<div :style="{'borderBottom': '1px solid #000','borderColor': it2.style.color.hex}"></div>
									</div>
								</div>
								<!-- 空白行 -->
								<div v-if="it2.type === 'rowEmpty'">
									<div>
										<div :style="{height: it2.style.height + 'px'}"></div>
									</div>
								</div>
								<!-- 图片上传 -->
								<div v-if="it2.type === 'updateImg'">
									<div>
										<div class="box-upimg pr">
											<div class="one pa"></div>
											<div class="two pa"></div>
										</div>
									</div>
								</div>
								<!-- 文本带输入 -->
								<div v-if="it2.type === 'fillType'">
									<div class="clearfix">
										<div class="pull-left fill-item" v-for="it3 in it2.list">
											<span v-if="it3.type === 'label'">{{it3.value}}</span>
											<input v-if="it3.type === 'lineInput'" type="text" :placeholder="it3.config.placeholder" class="lineInput"/>
											<input v-if="it3.type === 'frameInput'" type="text" :placeholder="it3.config.placeholder" class="frameInput" />
										</div>
									</div>
								</div>
								<!-- 单选按钮 -->
								<div v-if="it2.type === 'radioBtn'">
									<div class="clearfix">
										<el-button size="mini" v-for="it3 in it2.list" :key="it3" :style="{backgroundColor: it2.style.color.hex, color: '#fff'}">{{it3}}</el-button>
									</div>
								</div>
								<!-- 输入框 单行 -->
								<div v-if="it2.type === 'textInput'">
									<div class="pr">
										<input class="frameInput" type="text" :value="it2.value" />
										<span class="pa item-maxTip">{{it2.config.maxLength}}</span>
									</div>
								</div>
								<!-- 多行输入框 -->
								<div v-if="it2.type === 'textArea'">
									<div class="pr">
										<textarea name="" id="" cols="30" rows="10">{{it2.value}}</textarea>
										<span class="pa item-maxTip">{{it2.config.maxLength}}</span>
									</div>
								</div>
								<!-- 普通输入框    单行选择框 下拉    单行选择 位置    单行选择 级联1    单行选择 级联2 -->
								<div v-if="it2.type === 'selectText' || it2.type === 'selectPos' || it2.type === 'selectApi1' || it2.type === 'selectApi2'">
									<div class="pr">
										<input class="frameInput" type="text" :value="it2.value" />
										<i class="fa fa-angle-down ico-down pa" aria-hidden="true"></i>
									</div>
								</div>
								<!-- 文字链接 -->
								<div v-if="it2.type === 'textLink'">
									<div>
										<p><i></i>{{it2.value}}</p>
									</div>
								</div>
								<!-- &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& -->
								<!-- 遮罩 -->
								<div class="fog pa">
									<div class="fog-menu">
										<el-dropdown class="dropdown-reset" trigger="click">
										  <div class="pa setting">
												<i class="el-icon-s-tools"></i>
											</div>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>
										    	<div style="margin-left: -20px;margin-right: -20px;padding: 0 20px;" class="text-center" @click="removeStaskItem(it2, i2)">
										    		<i class="fa fa-trash" aria-hidden="true"></i>
										    		<span>删除</span>
										    	</div>
										    </el-dropdown-item>
										    <el-dropdown-item>
										    	<div  style="margin-left: -20px;margin-right: -20px;padding: 0 20px;" class="text-center"  @click="moveStaskItemIndex(i2, it2, true)">
										    		<i class="fa fa-arrow-up" aria-hidden="true"></i>
										    		<span>上移</span>
										    	</div>
										    </el-dropdown-item>
										    <el-dropdown-item>
										    	<div  style="margin-left: -20px;margin-right: -20px;padding: 0 20px;" class="text-center"  @click="moveStaskItemIndex(i2, it2, false)">
										    		<i class="fa fa-arrow-down" aria-hidden="true"></i>
										    		<span>下移</span>
										    	</div>
										    </el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
									</div>
								</div>
								<!--  -->
							</div>










							<!--  -->
						</div>
					</div>
					<!-- 下巴 -->
					<div class="back">
						<!-- back -->
						<div @click="printSelectData" class="backBtn"></div>
					</div>
				</div>
				<div class="phone">

				</div>
			</div>
			<!-- 右侧编辑框 -->
			<div class="r-ditor">
				<div class="el-card">
					<div class="xs-head">
						控件属性
					</div>
					<div class="pd10" style="padding-top: 0; max-height: 730px; overflow-y: auto;">
						<div class="r-device-type">






							<!-- 任务标题 -->
							<div v-if="activeItem && activeItem.type === 'taskTitle'" class="el-card mt10">
								<p class="xs-head">任务标题</p>
								<div>
									<el-input v-model="activeItem.value" placeholder="请输入内容"></el-input>
								</div>
								<div class="two-card">
									<p class="xs-head">颜色选择</p>
									<div class="color-btn-box">
										<chrome-picker style="margin: 0 auto;" v-model="activeItem.style.color" />
									</div>
								</div>
							</div>
							<!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
							<!-- 边框 -->
							<div v-if="activeItem && activeItem.type === 'lineAcross'" class="el-card mt10">
								<p class="xs-head">颜色选择</p>
								<div class="color-btn-box">
									<chrome-picker style="margin: 0 auto;" v-model="activeItem.style.color" />
								</div>
							</div>
							<!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
							<!-- 图片上传 -->
							<div v-if="activeItem && (activeItem.type === 'updateImg' || activeItem.type === 'selectPos')" class="el-card mt10 pd20">
								<p>该类型不支持编辑</p>
							</div>
							<!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
							<!-- 空白行 -->
							<div v-if="activeItem && activeItem.type === 'rowEmpty'" class="el-card mt10">
								<p class="xs-head">任务标题</p>
								<div>
									<el-input v-model="activeItem.style.height" placeholder="请输入内容"></el-input>
								</div>
							</div>
							<!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
							<!-- 单行输入框 -->
							<div v-if="activeItem && (activeItem.type === 'textInput' || activeItem.type === 'textArea')" class="el-card mt10">
								<p class="xs-head">字数限制</p>
								<div>
									<el-input v-model="activeItem.config.maxLength" placeholder="请输入内容"></el-input>
								</div>
							</div>
							<!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
							<!-- 单选按钮 -->
							<div v-if="activeItem && activeItem.type === 'radioBtn'" class="el-card mt10">
								<div class="two-card">
									<p class="xs-head">按钮点击后颜色、按钮边框颜色</p>
									<div class="color-btn-box">
										<chrome-picker style="margin: 0 auto;" v-model="activeItem.style.color" />
									</div>
								</div>
								<div v-for="(item, index) in activeItem.list" class="el-card pr mt10">
									<div @click="removeCurDataItem(index)" class="closeBtn pa">×</div>
									<p class="xs-head">输入按钮文字</p>
									<div>
										<el-input v-model="activeItem.list[index]" placeholder="请输入内容"></el-input>
									</div>
								</div>
								<div class="mt10">
									<div>
										<el-button @click="addTitletype('radioBtn')" type="primary" style="width: 100%;" class="block" size="small">添加一项</el-button>
									</div>
								</div>
							</div>
							<!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
							<!-- 行标题 -->
							<div class="" v-if="activeItem && activeItem.type === 'titleType'">
								<div v-for="(item, index) in activeItem.list" class="el-card pr mt10">
									<div @click="removeCurDataItem(index)" class="closeBtn pa">×</div>
									<p class="xs-head">输入文字</p>
									<div>
										<el-input v-model="item.value" placeholder="请输入内容"></el-input>
										<!-- 大小字号 -->
										<div class="two-card">
											<p class="xs-head">字体选择</p>
											<!--  -->
											<div style="padding-left: 30px; padding-bottom: 10px;">
												<el-radio-group v-model="item.sizeLg">
											    <div style="padding: 10px 0 0 10px;">
											    	<el-radio :label="true">大号字</el-radio>
											    </div>
											    <div style="padding: 10px 0 0 10px;">
											    	<el-radio :label="false">小号字</el-radio>
											    </div>
											  </el-radio-group>
											</div>
											<!--  -->
										</div>
										<!-- 下划线 -->
										<div class="two-card">
											<p class="xs-head">是否选择下划线</p>
											<!--  -->
											<div style="padding: 10px 0 10px 30px;">
												<el-switch
												  v-model="item.style.underline"
												  active-color="#13ce66"
												  inactive-color="#ddd"
												  active-value="underline"
												  inactive-value="none">
												</el-switch>
											</div>
											<!--  -->
										</div>
										<!-- 弹出内容 -->
										<div class="two-card">
											<p class="xs-head">点击是否弹出内容</p>
											<!--  -->
											<div style="padding: 10px 0 10px 30px;">
												<el-switch
												  v-model="item.open"
												  active-color="#13ce66"
												  inactive-color="#ddd">
												</el-switch>
											</div>
											<div v-show="item.open" class="two-card">
												<p class="xs-head">输入弹出的文本内容</p>
												<el-input
												  type="textarea"
												  :rows="3"
												  placeholder="请输入内容"
												  v-model="item.openContent">
												</el-input>
											</div>
											<!--  -->
										</div>
										<!-- 可选颜色 -->
										<div class="two-card">
											<p class="xs-head">选择文字颜色</p>
											<div class="color-btn-box">
												<chrome-picker style="margin: 0 auto;" v-model="item.style.color" />
											</div>
										</div>
										<!--  -->
									</div>
								</div>
								<div class="mt10">
									<div>
										<el-button @click="addTitletype('titleType')" type="primary" style="width: 100%;" class="block" size="small">添加一项</el-button>
									</div>
								</div>
							</div>
							<!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
							<!-- 二级关联数据  -->
							<div class="" v-if="activeItem && activeItem.type === 'selectApiData'">
								<!--  -->
								<div class="el-card mt10">
									<p class="xs-head">全部数据</p>
									<div>
										<el-button @click="addSelectOne">生成一项数据</el-button>
									</div>
									<div class="" v-if="cacheApiTreeData.length">
										<el-tree
										  class="filter-tree"
										  :data="cacheApiTreeData"
										  :props="defaultProps"
										  default-expand-all>
										  	<div v-if="data.children" class="custom-tree-node lin28" slot-scope="{node, data}">
									        <div class="clearfix lin28">
										        <span class="">{{ node.label }}</span>
										        <span class="pull-right btns-pos">
										          <el-button
										            type="text"
										            size="mini"
										            icon="el-icon-plus"
										            @click.stop="editType(data)">
										          </el-button>
										          <el-button
										            type="text"
										            size="mini"
										            icon="el-icon-close"
										            @click.stop="removeItem(data)">
										          </el-button>
										        </span>
									        </div>
									      </div>
										</el-tree>
									</div>
									<div class="" v-else>
										<p class="text-center">没有数据，请添加数据</p>
									</div>
								</div>
							</div>


						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { Chrome } from 'vue-color'
	export default {
		components: {
			chromePicker: Chrome
		},
		computed: {
			// 树形菜单数据
			cacheApiTreeData(){
				let obj = this.selectList.data;
				let arr = [];
				// 是否空
				if(JSON.stringify(obj) === '{}'){
					return arr
				}
				// 不为空
				for(let attr in obj){
					let item = obj[attr];
					let p1 = item.parent;
					let p2 = item.children;
					let children = [];
					for(let arg of p1){
						children.push({
							label: arg,
							children: p2[arg]
						})
					}
					arr.push({
						label: attr,
						children: children
					})
				}
				return arr
			}
		},
		data(){
			return {
				// 默认选中的模拟器里面的第N项
				activeClass: 0,
				// 默认tree组件配置
				defaultProps: {
          children: 'children',
          label: 'label'
        },
				// 二级数据
				selectList: {
					type: 'selectApiData',
					data: {}
				},
				//
				titleType: [''],
				//
				activeItem: null,                 // 当前选择的数据
				selectItem: [],                   // 正在存放的数据 -- 全部
			}
		},
		methods: {
			printSelectData(){
				console.log(this.selectItem);
			},
			// 上下移动缓冲列表的数据位置
			moveStaskItemIndex(index, item, bool){
				// 两条数据才可以进行排序
				if(this.selectItem.length < 2){
					this.$message({
	          message: '警告！请确保有数据大于等于两条！',
	          type: 'warning'
	        });
					return
				}
				// 是否最上或者最下
				if(bool && index === 0 || !bool && index === (this.selectItem.length -1)){
					return
				}

				// 上移
				if (bool){
					let prevEl = this.selectItem[index-1];
					// 当前
					this.selectItem[index] = prevEl;
					// 上一个
					this.selectItem[index-1] = item;
					// 当前(选中-元素)
					this.activeItem = this.selectItem[index-1];
					// 当前(选中-class)
					this.activeClass = index-1;
				} else {  // 下移
					let nextEl = this.selectItem[index+1];
					// 当前
					this.selectItem[index] = nextEl;
					// 下一个
					this.selectItem[index+1] = item;
					// 当前(选中-元素)
					this.activeItem = this.selectItem[index+1];
					// 当前(选中-class)
					this.activeClass = index+1;
				}
				// 强制刷新数据
				this.$forceUpdate();
			},
			// 设置当前选中的数据 并且高亮选中
			setCurSelectItem(index){
				this.activeItem = this.selectItem[index];
				this.activeClass = index;
			},
			// 从缓冲的数据里面列表里面删除某个
			removeStaskItem(item, index){
				this.selectItem.splice(index, 1);
			},
			// 移除 标题类型 二级
			removeCurDataItem(index){
				if(this.activeItem.list.length > 1){
					this.activeItem.list.splice(index, 1);
					return
				}
				this.$message.error('最后一项数据无法删除！');
			},
			// 选择当前的类型
			selectType(key){
				// 行标题
				if(key === 'titleType'){
					let childType1 = {
						type: 'text', // text 或者 tip
						value: '文字',
						sizeLg: true,
						style: {
							color:{
								hex: '#eb5032',
							},
							underline: 'none'
						},
						openContent: ''
					}
					let dataType = {
						type: 'titleType',
						tid: new Date().getTime(),
						edit: true,
						list: [ childType1 ]
					}
					// this.activeItem = dataType;
					this.selectItem.push(dataType);
				}
				// 任务标题
				else if(key === 'taskTitle'){
					let dataType = {
						type: 'taskTitle',
						tid: new Date().getTime(),
						edit: false,
						style: {
							color: {
								hex: '#333'
							}
						},
						value: '默认任务标题'
					}
					this.selectItem.push(dataType);
				}
				// 分割线
				else if(key === 'lineAcross'){
					let dataType = {
						type: 'lineAcross',
						tid: new Date().getTime(),
						style: {
							color: {
								hex: '#ccc'
							}
						},
						edit: false
					}
					this.selectItem.push(dataType);
				}
				// 空白行
				else if(key === 'rowEmpty'){
					let dataType = {
						type: 'rowEmpty',
						tid: new Date().getTime(),
						style: {
							height: '20'
						},
						edit: false
					}
					this.selectItem.push(dataType);
				}
				// 图片上传
				else if(key === 'updateImg'){
					let dataType = {
						type: 'updateImg',
						tid: new Date().getTime(),
						edit: false,
						value: ''
					}
					this.selectItem.push(dataType);
				}
				// 文本行带输入框
				else if(key === 'fillType'){
					// 文字
					let childType1 = {
						type: 'label',
						value: '这是一段默认文字',
						style: {}
					};
					// 下划线输入类型
					let childType2 = {
						type: 'lineInput',
						value: '',
						config: {
							placeholder: "提示信息",
							maxLength: 40
						}
					};
					// 白色背景框输入类型
					let childType3 = {
						type: 'frameInput',
						value: '',
						config: {
							placeholder: "提示信息",
							maxLength: 40
						}
					};
					let dataType = {
						type: 'fillType',
						edit: true,
						tid: new Date().getTime(),
						list: [ childType1, childType2, childType3 ]
					}
					this.selectItem.push(dataType);
				}
				// 单选按钮 (大方框按钮)
				else if(key === 'radioBtn'){
					let dataType = {
						type: 'radioBtn',
						tid: new Date().getTime(),
						style: {
							color: {
								hex: '#eb5032'
							}
						},
						edit: true,
						list: ["按钮1","按钮2"]
					}
					this.selectItem.push(dataType)
				}
				// 单行输入框
				else if(key === 'textInput'){
					let dataType = {
						type: 'textInput',
						edit: true,
						tid: new Date().getTime(),
						config: {
							maxLength: 200,
							placeholder: "请输入内容"
						},
						value: '这是一段默认文字'
					}
					this.selectItem.push(dataType)
				}
				// 多行输入框
				else if(key === 'textArea'){
					let dataType = {
						type: 'textArea',
						edit: true,
						tid: new Date().getTime(),
						config: {
							maxLength: 200,
							placeholder: "请输入内容"
						},
						value: '这是一段默认文字'
					}
					this.selectItem.push(dataType)
				}
				// 单选下拉框
				else if(key === 'selectText'){
					let dataType = {
						type: 'selectText',
						edit: true,
						tid: new Date().getTime(),
						config: {
							// 是否独占一行
							isBlock: true
						},
						value: '',
						list: []
					}
					this.selectItem.push(dataType)
				}
				// 地区选择器
				else if(key === 'selectPos'){
					let dataType = {
						type: 'selectPos',
						edit: true,
						tid: new Date().getTime(),
						value: ''
					}
					this.selectItem.push(dataType)
				}
				// 级联选择器 - 父
				else if(key === 'selectApi1'){
					// 是否已经创建的 selectList 的值
					if(JSON.stringify(this.selectList.data) === '{}'){
						this.$message({
		          message: '警告！请先创建二级关联数据。',
		          type: 'warning'
		        });
						return
					}
					let dataType = {
						type: 'selectApi1',
						edit: true,
						tid: new Date().getTime(),
						// 关联 selectList - key
						contact: '',
						value: ''
					}
					this.selectItem.push(dataType)
				}
				// 级联选择器 - 子
				else if(key === 'selectApi2'){
					// 是否已经创建的 selectList 的值
					if(JSON.stringify(this.selectList.data) === '{}'){
						this.$message({
		          message: '警告！请先创建二级关联数据。',
		          type: 'warning'
		        });
						return
					}
					let dataType = {
						type: 'selectApi2',
						edit: true,
						tid: new Date().getTime(),
						// 关联 selectList - key
						contact: '',
						value: ''
					}
					this.selectItem.push(dataType)
				}
				// 二级关联数据 - 生成
				else if(key === 'selectApiData'){

					// 二级关联数据一
					this.activeItem = this.selectList.data;
				}
				// 文字链接
				else if(key === 'textLink'){
					this.selectItem.push({
						type: 'textLink',
						value: '文字',
						tid: new Date().getTime(),
						link: {
							type: true,    // 区分内链 和 外链
							value: ''
						}
					})
				}
			},
			// 增加 标题类型 二级数据 一份默认标题数据
			addTitletype(type){
				if(type === 'titleType'){
					let childType1 = {
						type: 'text', // text 或者 tip
						sizeLg: true,
						value: '文字',
						style: {
							color: {
								hex: '#666'
							},
							underline: 'none'
						},
						openContent: ''
					}
					this.activeItem.list.push(childType1);
				} else if (type === 'radioBtn'){
					this.activeItem.list.push('示例按钮');
				} else if(type === ''){

				}
			},
			// 设置颜色
			setItemColor(color, This){
				This.color = color;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.task-flex{
		display: flex;
		justify-content: space-between;
	}
	.l-machine{
		width: 300px;
	}
	.c-phone{
		.view{
			width: 500px;
			height: 750px;
			border: 5px solid #ccc;
			border-radius: 30px;
			overflow: hidden;
			.head{
				height: 60px;
				background: #ccc;
				position: relative;
				.eye{
					position: absolute;
					left: 40px;
					top: 12px;
					width: 12px;
					height: 12px;
					border-radius: 6px;
					background: #444;
				}
				.headset{
					position: absolute;
					left: 50%;
					top: 15px;
					margin-left: -50px;
					width: 100px;
					height: 6px;
					border-radius: 3px;
					background: #444;
				}
				.lamp{
					width: 30px;
					height: 10px;
					background: #444;
					position: absolute;
					left: 50%;
					margin-left: -15px;
					top: 40px;
					border-radius: 5px;
				}
			}
			.screen{
				position: absolute;
				left: 0;
				right: 0;
				bottom: 60px;
				top: 60px;
				overflow-x: hidden;
				overflow-y: auto;
				background: #fff;
			}
			.back{
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 60px;
				background: #ccc;
			}
			.backBtn{
				width: 40px;
				height: 40px;
				position: absolute;
				left: 50%;
				top: 50%;
				margin-left: -20px;
				margin-top: -20px;
				border-radius: 21.5px;
				cursor: pointer;
				background: #eee;
				border: 3px solid #fff;
				transition: background .4s;
			}
			.backBtn:hover{
				background: #fb6d1a;
			}
		}
	}
	.r-ditor{
		width: 400px;
		.closeBtn{
			right: 0;
			top: 0;
			width: 20px;
			height: 20px;
			font-size: 20px;
			text-align: center;
			background: red;
			cursor: pointer;
		}
		.closeBtn:hover{
			background: #fb6d1a;
		}
		.two-card{
			border-top: 1px solid #666;
		}
		.color-btn-box{
			display: flex;
			justify-content: flex-start;
			padding: 10px 0;
		}
		.color-btn{
			width: 30px;
			height: 30px;
			border: 2px solid #fff;
			border-radius: 3px;
			margin-left: 15px;
			cursor: pointer;
		}
		.active{
			box-shadow: 0 0 40px #fff;
		}
		.color-btn:nth-child(1){
			background: #EB5032;
		}
		.color-btn:nth-child(2){
			background: #F57F17;
		}
		.color-btn:nth-child(3){
			background: #666666;
		}
	}
	.xs-head{
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		border-bottom: 1px solid #666;
	}
	.machine-con{
		button{
			width: 100%;
			font-weight: bold;
			margin-left: 0;
			margin-bottom: 10px;
		}
		button:last-child{
			margin-bottom: 0;
		}
	}
	/* 模拟器 */
	.iphone-item{
		cursor: pointer;
		color: #000;
		border: 1px solid #ddd;
		padding-right: 50px;
		.fog{
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			z-index: 1;
			cursor: pointer;
		}
		.fog-menu{
			right: 15px;
			top: 50%;
			margin-top: -12px;
			width: 14px;
			height: 18px;
			line-height: 0;
			display: none;
			position: absolute;
		}
	}
	.iphone-item.active{
		box-shadow: 0 0 5px green;
		animation: iphone-item-active 2s infinite;
		.fog-menu{
			display: block;
		}
	}
	@keyframes iphone-item-active{
		0% {box-shadow: 0 0 5px green;}
		50% {box-shadow: 0 0 15px green;}
		100% {box-shadow: 0 0 5px green;}
	}
	/* 类型 */
	.screen{
		.frameInput,
		textarea{
			width: 100%;
			border: 1px solid #000!important;
			border-radius: 3px!important;
			background: #ccc!important;
			height: 26px;
			color: #000!important;
		}
		textarea{
			height: 40px;
		}
	}
	.fill-item{
		input,span{
			width: 60px;
			background: #fff!important;
			padding: 0;
			margin-left: 5px;
			height: 24px;
			line-height: 24px;
		}
		.lineInput{
			border-bottom: 1px solid #000!important;
		}
	}
	.ico-down{
		right: 3px;
		top: 7px;
	}
	.item-maxTip{
		right: 0;
		top: 2px;
		padding: 4px 5px;
		border-radius: 5px;
		background: rgba(0,0,0,.5);
		color: #fff;
	}
	.box-upimg{
		width: 70px;
		height: 70px;
		border: 1px solid #999;
		border-radius: 5px;
		>div:nth-child(1){
			height: 2px;
			width: 40px;
			margin-left: -20px;
			margin-top: -1px;
			left: 50%;
			top: 50%;
			background: #999;
		}
		>div:nth-child(2){
			height: 40px;
			width: 2px;
			top: 50%;
			left: 50%;
			margin-left: -1px;
			margin-top: -20px;
			background: #999;
		}
	}
	.font-xs{
		font-size: 12px;
	}
</style>
