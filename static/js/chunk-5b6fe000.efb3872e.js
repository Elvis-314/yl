(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b6fe000"],{2862:function(t,a,e){"use strict";var s=e("b61e"),i=e.n(s);i.a},"2ac7":function(t,a,e){"use strict";var s=e("a12c"),i=e.n(s);i.a},"41bd":function(t,a,e){"use strict";var s=e("6bff"),i=e.n(s);i.a},"6bff":function(t,a,e){},a12c:function(t,a,e){},b61e:function(t,a,e){},d088:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{padding:"24px 24px 24px"}},[e("div",{staticStyle:{padding:"20px 0 20px 0"}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:12,lg:6}},[e("el-card",{staticStyle:{height:"230px"},attrs:{shadow:"hover"}},[e("div",{staticStyle:{padding:"0 0 10px 0"}},[e("span",{staticStyle:{color:"gray"}},[t._v("销售额")]),t._v(" "),e("el-tooltip",{staticClass:"el-icon-info",attrs:{content:"这是提示信息",placement:"top",effect:"light"}},[e("i",{staticClass:"el-icon-info",staticStyle:{"padding-left":"10%"}})])],1),t._v(" "),e("span",{staticStyle:{padding:"10px 0 10px 25px","font-size":"30px"}},[t._v("¥ 123.456")]),t._v(" "),e("div",{staticStyle:{padding:"15px 0 15px 0"}},[e("span",{staticStyle:{color:"gray"}},[t._v("月同比: ")]),t._v(" "),e("span",[t._v("1.5%")]),t._v(" "),e("svg-icon",{attrs:{"icon-class":"up","class-name":"trend-up-icon"}})],1),t._v(" "),e("div",{staticStyle:{padding:"0 0 15px 0"}},[e("span",{staticStyle:{color:"gray"}},[t._v("日同比: ")]),t._v(" "),e("span",[t._v("5%")]),t._v(" "),e("svg-icon",{attrs:{"icon-class":"down","class-name":"trend-down-icon"}})],1),t._v(" "),[e("hr"),e("span",{staticStyle:{color:"gray"}},[t._v("日均销售额: ")]),e("span",[t._v("250")])]],2)],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:12,lg:6}},[e("el-card",{staticStyle:{height:"230px"},attrs:{shadow:"hover"}},[e("div",{staticStyle:{padding:"0 0 10px 0"}},[e("span",{staticStyle:{color:"gray"}},[t._v("销售量")]),t._v(" "),e("el-tooltip",{staticClass:"el-icon-info",attrs:{content:"这是提示信息",placement:"top",effect:"light"}},[e("i",{staticClass:"el-icon-info",staticStyle:{"padding-left":"5%"}})])],1),t._v(" "),e("span",{staticStyle:{padding:"10px 0 10px 25px","font-size":"30px"}},[t._v("1234")]),t._v(" "),e("line-chart",{attrs:{total:t._f("NumberFormat")(1111),"chart-data":t.lineChartData}}),t._v(" "),e("hr"),t._v(" "),e("span",{staticStyle:{color:"gray"}},[t._v("日均销售量: ")]),t._v(" "),e("span",[t._v("131")])],1)],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:12,lg:6}},[e("el-card",{staticStyle:{height:"230px"},attrs:{shadow:"hover"}},[e("div",{staticStyle:{padding:"0 0 10px 0"}},[e("span",{staticStyle:{color:"gray"}},[t._v("订单数")]),t._v(" "),e("el-tooltip",{staticClass:"el-icon-info",attrs:{content:"这是提示信息",placement:"top",effect:"light"}},[e("i",{staticClass:"el-icon-info",staticStyle:{"padding-left":"15%"}})])],1),t._v(" "),e("span",{staticStyle:{padding:"10px 0 10px 25px","font-size":"30px"}},[t._v("4500")]),t._v(" "),e("bar-chart"),t._v(" "),e("hr"),t._v(" "),e("span",{staticStyle:{color:"gray"}},[t._v("日均订单量: ")]),t._v(" "),e("span",[t._v("100")])],1)],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:12,lg:6}},[e("el-card",{staticStyle:{height:"230px"},attrs:{shadow:"hover"}},[e("div",{staticStyle:{padding:"0 0 10px 0"}},[e("span",{staticStyle:{color:"gray"}},[t._v("客户年龄段")]),t._v(" "),e("el-tooltip",{staticClass:"el-icon-info",attrs:{content:"这是提示信息",placement:"top",effect:"light"}},[e("i",{staticClass:"el-icon-info",staticStyle:{"padding-left":"5%"}})])],1),t._v(" "),e("span",{staticStyle:{padding:"10px 0 10px 25px","font-size":"30px"}},[t._v("500")]),t._v(" "),e("pie-chart"),t._v(" "),e("hr"),t._v(" "),e("span",{staticStyle:{color:"gray"}},[t._v("青年人: ")]),t._v(" "),e("span",[t._v("80%")])],1)],1)],1)],1),t._v(" "),e("div",[e("el-tabs",{attrs:{type:"border-card"}},[e("el-tab-pane",[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"el-icon-date"}),t._v(" 我的行程")]),t._v(" "),e("el-row",[e("el-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),e("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1),t._v(" "),e("el-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"销售排行榜",list:t.rankList}})],1)],1)],1),t._v(" "),e("el-tab-pane",[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"el-icon-info"}),t._v(" 消息中心")]),t._v(" "),e("el-row",[e("el-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),e("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1),t._v(" "),e("el-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"销售排行榜",list:t.rankList}})],1)],1)],1),t._v(" "),e("el-tab-pane",[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"el-icon-user"}),t._v(" 角色管理")]),t._v(" "),e("el-row",[e("el-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-class-name":t.tableRowClassName}},[e("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),e("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1),t._v(" "),e("el-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"销售排行榜",list:t.rankList}})],1)],1)],1)],1)],1)])},i=[],l=e("cebc"),n=e("2f62"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rank"},[e("h4",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("ul",{staticClass:"list"},t._l(t.list,function(a,s){return e("li",{key:s},[e("span",{class:s<3?"active":null},[t._v(t._s(s+1))]),t._v(" "),e("span",[t._v(t._s(a.name))]),t._v(" "),e("span",[t._v(t._s(a.total))])])}),0)])},o=[],c={name:"RankList",props:{title:{type:String,default:""},list:{type:Array,default:null}}},d=c,h=(e("2862"),e("2877")),p=Object(h["a"])(d,r,o,!1,null,"93319372",null),u=p.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}},[e("div",{staticClass:"total"},[t._t("total",[e("span",[t._v(t._s("function"===typeof t.total&&t.total()||t.total))])])],2)])},_=[],m=(e("c5f6"),e("313e")),f=e.n(m),b=e("ed08");e("817d");var y={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"80%"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0},total:{type:[Function,Number,String],required:!1,default:null}},data:function(){return{chart:null,sidebarElm:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(b["b"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(t.expectedData,t.actualData);this.chart.setOption({xAxis:{data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],boundaryGap:!1,show:!1,axisTick:{show:!1},axisLine:{show:!1}},grid:{left:0,right:0,bottom:0,top:0,containLabel:!1},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{show:!1,axisTick:{show:!1},axisLine:{show:!1}},series:[{name:"actual",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#3399FF"}}},data:a,animationDuration:2800,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=f.a.init(this.$el,"macarons"),this.setOptions(this.chartData)}}},g=y,x=(e("41bd"),Object(h["a"])(g,v,_,!1,null,"26fe4630",null)),w=x.exports,S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},C=[];e("817d");var z=6e3,E={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"80%"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(b["b"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=f.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:3,left:"0",right:"0",bottom:"0",containLabel:!1},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],show:!1,axisTick:{alignWithLabel:!0},axisLine:{show:!1}}],yAxis:[{type:"value",show:!1,axisTick:{show:!1},axisLine:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",data:[79,52,200,334,390,330,220],animationDuration:z}]})}}},L=E,k=Object(h["a"])(L,S,C,!1,null,null,null),O=k.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},N=[];e("817d");for(var R={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"80%"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(b["b"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=f.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)",position:[10,10],textStyle:{fontSize:12}},calculable:!0,series:[{name:"WEEKLY WRITE ARTICLES",type:"pie",roseType:"radius",radius:[10,40],center:["60%","60%"],data:[{value:320,name:"Industries"},{value:240,name:"Technology"},{value:149,name:"Forex"},{value:100,name:"Gold"},{value:59,name:"Forecasts"}],labelLine:{normal:{length:3}},animationEasing:"cubicInOut",animationDuration:2600}]})}}},H=R,T=Object(h["a"])(H,D,N,!1,null,null,null),j=T.exports,F={newVisitis:{actualData:[120,82,91,154,162,140,145]}},$=[],A=0;A<5;A++)$.push({name:"白鹭岛 "+(A+1)+" 号店",total:1234.56-100*A});var I={name:"Index",components:{LineChart:w,BarChart:O,PieChart:j,RankList:u},data:function(){return{lineChartData:F.newVisitis,rankList:$,tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}]}},computed:Object(l["a"])({},Object(n["b"])(["name"])),methods:{tableRowClassName:function(t){t.row;var a=t.rowIndex;return 1===a?"warning-row":3===a?"success-row":""}}},W=I,q=(e("2ac7"),Object(h["a"])(W,s,i,!1,null,"84c3fb34",null));a["default"]=q.exports}}]);