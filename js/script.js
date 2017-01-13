

var gpsy = {
	classif:"高频使用",
	items:[
	"美团外卖",
	"滴滴公交查询",
	"车来了",
	"大众点评+",
	"京东购物",
	"摩拜单车",
	"滴滴出行DiDi",
	"携程酒店机票火车票"
	]
}

var lx = {
	classif:"旅行",
	items:[
	"驴妈妈门票预订",
	"飞常准查航班",
	"海南航空微应用",
	"南航e行",
	"去哪儿出行",
	"朋友家精选民宿",
	"熊猫签证",
	"去哪儿酒店预订",
	]
}

var gw = {
	classif:"购物",
	items:[
	"国际品牌价格",
	"小小包麻麻好物",
	"好药师优选",
	"汽车之家Autohome",
	"手机查报价",
	"有赞精选",
	"什么车好",
	"微店轻便版",
	"Coolbuy玩物志",
	"美的官方商城",
	"腾讯周边",
	"订蛋糕元祖黑天鹅诺心21cake",
	"新品有戏应用",
	]
}


var jt = {
	classif:"交通",
	items:[
	"滴滴公交查询",
	"车来了",
	"租租车出国去哪玩",
	"巴士管家",
	"知了交通",
	]
}


var jkyl = {
	classif:"健康医疗",
	items:[
	"姨妈日历",

"美柚APP",

"经期月月记",

"好药师优选",

"孕期提醒APP",

"柚宝宝App",

"药顾问",

"丁香医生",
	]
}

var tp = {
	classif:"图片",
	items:[
"嗨图",

"MOTIF米田图案壁纸小工具",

"名画滤镜APP",

"今日名画",

"小蚁AI艺术",

"Miatou",

"藏识相册",
	]
}





var gj = {
	classif:"工具",
	items:[
"我的计算器",

"朝夕日历Pro",

"印象笔记微清单",

"亲戚关系",

"100房贷助手",

"查地铁",

"Coolbuy玩物志",

"看剧小助手",

"约会来也",

"老板管账",

"掌上探路者生活",

"序列号查查",

"小程序示例",

"解忧室",

"股票灯塔",

"艺术签名助手",

"延迟退休计算器",

"汽车报价库",

"签到打卡",

"实时空气质量",

"自选股",

"高校图书馆查询",

"小小房贷计算器",

"新股申购宝",

"最新汇率查询",

"汇率e",

"二手车e",

"记账e",

"翻译e",

"通勤助手",

"留学公寓助手",

"云梦助眠引导",

"蚂蚁待办",

"蚂蚁微日记",

"窝牛App",

	]
}


var jypx = {
	classif:"教育培训",
	items:[
"小D词典",

"词汇量查询",

"分答快问",

"钢琴优课",

"天天练口语",

"词汇量测试",

"有钱兔择校",

"宝宝微空间",

"一首一首诗",

"人人词典",

"有可能微课",

"蚯蚓课+",

"桔子创投内参",

"感恩笔记本",

"爱弹唱",
	]
}



var kdcx = {
	classif:"快递查询",
	items:[
"快递100小助手",

	]
}


var tqcx = {
	classif:"天气查询",
	items:[
"智慧气象服务",
"精准天气预报",
"30天天气预报",
	]
}


var tzlc = {
	classif:"投资理财",
	items:[
"自选股",

"富途牛牛股票",

"微众银行",

"南方基金微理财",

"BP助手",

"FellowPlus创投数据库",
	]
}


var pw = {
	classif:"票务",
	items:[
"猫眼电影",
"小小票儿",
"电影演出赛事",
	]
}

var yd = {
	classif:"阅读",
	items:[

"今日头条lite",

"轻芒杂志",

"Qdaily",

"桔子创投内参",

"QQ阅读",

"壹点调查",

"快看漫画",

"段掌柜",

"西窗诗词",

"网易灰评",

"换阅空间",

"360好书推荐",

"历史上的今时",

"心邮",

"口袋书架",
	]
}


var sp = {
	classif:"视频",
	items:[
"腾讯视频",
"开眼视频Eyepetizer",
	]
}

var ms = {
	classif:"美食",
	items:[
"下厨房+",
"探城美食APP",
	]
}

var mz = {
	classif:"美妆",
	items:[
"化妆品点评",
	]
}

var ty = {
	classif:"体育",
	items:[
"酷竞",
	]
}

var bqb = {
	classif:"表情包",
	items:[
"表情家园",
"斗图表情包神器",
	]
}

var yx = {
	classif:"游戏",
	items:[
"王者荣耀赛事",
"炉石相册",
	]
}

var qz = {
	classif:"求职",
	items:[
"实习委员",
	]
}

var yp = {
	classif:"音频",
	items:[
"青蜻蜓",
"浴音阁",
"荔枝FM播客",
	]
}

var zmt = {
	classif:"自媒体",
	items:[
"吴晓波频道会员",
	]
}

var sq = {
	classif:"社区",
	items:[
"小密圈+",

"We重邮",

"一起Up",

"分答快问",

"第二空间创作中心",

"社交名片",
	]
}

var classArray = [gpsy,lx,gw,jt,jkyl,tp,gj,jypx,kdcx,tqcx,tzlc,pw,yd,sp,ms,mz,ty,bqb,yx,qz,yp,zmt,sq];

var search = {
	show:false,
	items:[]
}

var app = new Vue({
	el: "#app",
	data:{search},
	updated:function(){
		index.btn();
	},
});

var index = {
	btn:function(){
		$(".btn-fr").off();
		$(".btn-fr").on("click",function() {
			$.snackbar({content: $(this).attr("data-clipboard-text"), style: 'toast'});
		});
	},
	copy:function(){
		var clipboard = new Clipboard('.btn');

		clipboard.on('success', function(e) {
		    console.info('Action:', e.action);
		    console.info('Text:', e.text);
		    console.info('Trigger:', e.trigger);
		
		    e.clearSelection();
		});
		
		clipboard.on('error', function(e) {
		    console.error('Action:', e.action);
		    console.error('Trigger:', e.trigger);
		});
	},
	keyup:function(){
		$("input").keyup(function(){
			var key = $(this).val();
			if(key){
				search.items = [];
				$.each(classArray, function(i, v){
					$.each(v.items, function(x, y){
						if(y.indexOf(key) > -1){
							search.items.push(y);
						}
					});
				});
				search.show = true;
			}else{
				search.show = false;
			}
		});
	}
};

jQuery(document).ready(function() {
	$("[data-toggle='tooltip']").tooltip();
	index.btn();
	index.copy();
	index.keyup();
});
