CP.K3=function(){var g={cur:0,jiang:{0:"<em class=gray>猜中开奖号码之和即中奖</em>",1:'[单选]猜中开奖号码即中奖，奖金<em class="yellow">240</em>元',2:'[单选]选择同号与不同号的组合，奖金<em class="yellow">80</em>元',3:'[单选]至少选3个号，猜中开奖号即中奖<em class="yellow">40</em>元',4:'至少选择2个号码，猜中开奖号码即中奖<em class="yellow">8</em>元'},fps:1e3,gid:"06",zhushu:0,money:0,totalMoney:0,count_zs:0,beishu:1,qishu:1,buyType:1,codes:"",qihao_id:"",wf:{0:"和值",1:"三同号单选",2:"二同号单选",3:"三不同号",4:"二不同号",5:"三同号通选",6:"二同号复选",7:"三不同号通选"}};var o={pageGo:{goBack:function(){TopAnch.init({title:"快3",prevShow:true,prevFun:function(){window.location.href="#type=index"},menu:[{name:"投注选号",url:"javascript:;",cur:true},{name:"开奖结果",url:"#type=url&p=kj/result.html?in_=06",cur:false},{name:"玩法帮助",url:"#type=url&p=wf/ahk3.html",cur:false}],style:false})}},slide:function(_obj){var menu=$(_obj.menu);var con=$(_obj.con);var cur=_obj.cur||g.cur;var Q=$(window).width();$("#bonus_ em.gray").html(g.jiang[cur]);con.each(function(i){$(this).show();$(this).css({left:i<cur?-Q:i>cur?Q:""});i==cur?$(this).css({left:0}):""});menu.click(function(){var index=$(this).index();var conW=con.width();$(this).addClass("cur").siblings().removeClass("cur");con.each(function(i){if(g.cur==i){$(this).stop(true,false).animate({left:i<index?-conW:i>index?conW:""},_obj.conSpeed||300,_obj.effect||"")}else if(i!=index){$(this).css({left:i<index?-conW:i>index?conW:""})}else{$(this).stop(true,false).animate({left:0},_obj.conSpeed||300,_obj.effect||"")}});g.cur=index;o.change(index)})},change:function(index){$("#bonus_ em.gray").html(g.jiang[index]);o.clear()},clickBall:function(_this,on){if($(_this).is("."+on)){$(_this).removeClass(on)}else{if(g.cur=="2"){if($(_this).html().indexOf("*")<0){var Q=$(_this).index();$("#eth .k3xhlist").each(function(a){a<2&&$(this).find("li").eq(Q).removeClass(on)})}}$(_this).addClass(on)}o.countTotal()},clear:function(){$("#content_kp").find(".cur").removeClass("cur");o.countTotal()},countTotal:function(){if(g.cur=="0"){g.zhushu=$("#hz .k3xhlist").find(".cur").length}else if(g.cur=="1"){g.zhushu=$("#sth").find(".cur").length}else if(g.cur=="2"){g.zhushu=$("#eth ul.k3xhlist").eq(0).find(".cur").length*$("#eth ul.k3xhlist").eq(1).find(".cur").length+$("#eth ul.k3xhlist").eq(2).find(".cur").length}else if(g.cur=="3"){g.zhushu=CP.math.C($("#sbth ul.k3xhlist").find(".cur").length,3)+$("#sbth div.k3tx").find(".cur").length}else if(g.cur=="4"){g.zhushu=CP.math.C($("#ebth ul.k3xhlist").find(".cur").length,2)}g.money=2*g.zhushu;$("#Notes").html(g.zhushu);$("#Money").html(g.money);if(g.zhushu){$("#Notes").addClass("red");$("#Money").addClass("red")}else{$("#Notes").removeClass("red");$("#Money").removeClass("red")}},highLight:function(_arr,dom){o.clear();for(var j=0,l1=_arr.length;j<l1;j++){$(dom+" li").eq(parseInt(_arr[j],10)-1).addClass("cur")}},jxNum:function(n,type){if(type){for(var i=1;i<=n;i++){var _code="";if(g.cur=="0"){_code=CP.math.random(3,18,1)+""}else if(g.cur=="1"){_code=CP.math.random(1,6,1)+"";var Q={1:"111",2:"222",3:"333",4:"444",5:"555",6:"666"};_code=Q[_code]}else if(g.cur=="2"){var Q=CP.math.random(1,6,2,false);_code=Q[0]+""+Q[0]+"|"+Q[1]}else if(g.cur=="3"){_code=CP.math.random(1,6,3,false)+""}else if(g.cur=="4"){_code=CP.math.random(1,6,2,false)+""}o.addToList([_code,1]);o.countAll()}window.scrollTo(0,1);o.setLocal()}else{var Q;if(g.cur=="0"){Q=CP.math.random(1,16,1);o.highLight(Q,"#hz .k3xhlist")}else if(g.cur=="1"){Q=CP.math.random(1,6,1);o.highLight(Q,"#sth .k3xhlist")}else if(g.cur=="2"){Q=CP.math.random(1,6,2,false);$("#eth").find(".cur").removeClass("cur");$("#eth .k3xhlist:eq(0) li").eq(parseInt(Q[0],10)-1).addClass("cur");$("#eth .k3xhlist:eq(1) li").eq(parseInt(Q[1],10)-1).addClass("cur")}else if(g.cur=="3"){Q=CP.math.random(1,6,3,false);o.highLight(Q,"#sbth .k3xhlist")}else if(g.cur=="4"){Q=CP.math.random(1,6,2,false);o.highLight(Q,"#ebth .k3xhlist")}o.countTotal()}},getCode:function(dom){var _arr=[];for(var i=0;i<dom.find(".cur").length;i++){_arr[i]=dom.find(".cur").eq(i).text()}return _arr},addList:function(){if(!g.qihao_id){alert("期号获取失败!请刷新页面");return false}else if(g.zhushu=="0"){alert("至少选择一注");return false}else{var _code="",_arrRed=[];if(g.cur=="0"){for(var i=0,l=$("#hz .k3xhlist").find(".cur").length;i<l;i++){_arrRed[i]=$("#hz .k3xhlist").find(".cur").eq(i).find("b").text()}_code=_arrRed+"";o.addToList([_code,g.zhushu])}else if(g.cur=="1"){var Q4=g.zhushu;var Q2=$("#sth .k3tx").find(".cur").length;if(Q2){o.addToList(["111,222,333,444,555,666","1"],g.wf[5],"5")}if(Q2!=Q4){for(var i=0,l=$("#sth .k3xhlist").find(".cur").length;i<l;i++){_arrRed[i]=$("#sth .k3xhlist").find(".cur").eq(i).text()}_code=_arrRed+"";Q4-=Q2;o.addToList([_code,Q4])}}else if(g.cur=="2"){var Q4=g.zhushu;var Q2=$("#eth .k3xhlist:eq(2)").find(".cur").length;if(Q2){var Q3=[];for(var i=0;i<Q2;i++){Q3[i]=$("#eth .k3xhlist:eq(2)").find(".cur").eq(i).text()}Q3+="";o.addToList([Q3,Q2],g.wf[6],"6")}if(Q2!=Q4){var Q=[],Q1=[];for(var i=0,l=$("#eth .k3xhlist:eq(0)").find(".cur").length;i<l;i++){Q[i]=$("#eth .k3xhlist:eq(0)").find(".cur").eq(i).text()}for(var i=0,l=$("#eth .k3xhlist:eq(1)").find(".cur").length;i<l;i++){Q1[i]=$("#eth .k3xhlist:eq(1)").find(".cur").eq(i).text()}_code=Q+"|"+Q1;Q4-=Q2;o.addToList([_code,Q4])}}else if(g.cur=="3"){var Q4=g.zhushu;var Q2=$("#sbth .k3tx").find(".cur").length;if(Q2){o.addToList(["123,234,345,456",1],g.wf[7],"7")}if(Q2!=Q4){for(var i=0,l=$("#sbth .k3xhlist").find(".cur").length;i<l;i++){_arrRed[i]=$("#sbth .k3xhlist").find(".cur").eq(i).text()}_code=_arrRed+"";Q4-=Q2;o.addToList([_code,Q4])}}else if(g.cur=="4"){for(var i=0,l=$("#ebth .k3xhlist").find(".cur").length;i<l;i++){_arrRed[i]=$("#ebth .k3xhlist").find(".cur").eq(i).text()}_code=_arrRed+"";o.addToList([_code,g.zhushu])}window.location.href="#type=fun&fun=CP.K3.openList";o.setLocal()}},addToList:function(arr,wf,cur,Q){var _html="";_html='<div class="ssqtzNum">';_html+='<cite class="errorBg"><em class="error2"></em></cite>';_html+="<span><em>"+arr[0].replace(/,/g," ")+"</em>";_html+="</span><p>"+(wf||g.wf[g.cur])+"&nbsp;&nbsp;&nbsp;"+arr[1]+"注"+2*arr[1]+"元</p>";_html+='<input type="hidden" value="'+arr[1]+'" name="bet_num" class="bet-num">';_html+='<input type="hidden" value="'+(cur||g.cur)+"_"+arr[0]+'" name="bet" class="bet">';_html+="</div>";!Q&&$("#bet_list").prepend(_html)||$("#bet_list").append(_html);$("#Notes").html(0);$("#Money").html(g.zhushu=0)},countAll:function(){var zhushu=0;g.beishu=$("#tbox_beishu").val();g.qishu=$("#tbox_qishu").val();var codes=[];$("#bet_list .bet-num").each(function(e){zhushu+=parseInt($(this).val());codes.push($(this).next().val())});g.codes=codes.join(";");$("#countNotes").html(g.count_zs=zhushu);$("#countMoney").html(g.totalMoney=g.count_zs*2*g.beishu*g.qishu)},openList:function(){$("#betball").hide();$("#betlist").show();$("#lot_footer").removeClass("fo_basket").addClass("fo_buy");TopAnch.init({title:"投注列表",prevShow:true,prevFun:function(){window.location.href="#type=url&p=list/ahk3.html"},isBack:true,nextShow:false,style:false});o.countAll();window.scrollTo(0,1)},setLocal:function(){var codes=[];$("#bet_list .bet:input").each(function(){codes.push($(this).val())});g.codes=codes.join(";");CP.Storage.set("ahk3",g.codes,true)},fromLocal:function(){var _json=CP.Storage.get("ahk3",true);if(_json){try{g.codes=_json;var codes=_json.split(";");for(var i=0,l=codes.length;i<l;i++){var Q=codes[i].split("_");var Q1="";if(Q[0]=="0"||Q[0]=="1"||Q[0]=="6"){Q1=Q[1].split(",").length}else if(Q[0]=="2"){Q1=Q[1].split("|");Q1=Q1[0].split(",").length*Q1[1].split(",").length}else if(Q[0]=="3"){Q1=Q[1].split(",").length;Q1=CP.math.C(Q[1].split(",").length,3)}else if(Q[0]=="4"){Q1=Q[1].split(",").length;Q1=CP.math.C(Q[1].split(",").length,2)}else if(Q[0]=="5"||Q[0]=="7"){Q1="1"}o.addToList([Q[1],Q1],g.wf[Q[0]],Q[0],true)}o.countAll()}catch(e){sessionStorage.removeItem("ahk3")}}},info:function(){function main(){$.ajax({url:CP.Data.apps+"/trade/info.go?gid=06",type:"POST",dataType:"xml",success:function(xml){var R=$(xml).find("rowc");var p=R.attr("p");var t=R.attr("t");g.qihao_id=p;$("#ahk3").html("<p>距"+p.substr(9)+"期截止</p><strong></strong>");var n_=new Date(arguments[2].getResponseHeader("Date"));expect_change(n_,t);var r=$(xml).find("row");var dice=["onedice","twodice","threedice","fourdice","fivedice","sixdice"];var html="";r.each(function(aa){var tn=$(this).attr("tn");var p=$(this).attr("p");var t=$(this).attr("t");var c=$(this).attr("c");p=p.substr(-2);if(aa==0){if(c!=""){var hz=0,bb="";c=c.split(",");for(var n=0;n<c.length;n++){hz+=parseInt(c[n]);bb+='<b class="'+dice[c[n]-1]+'"></b>'}$("#kj_").html("<p>"+p+"期开奖 <cite>和值: "+hz+'</cite></p>												<div class="pdTop03 k3waitkj clearfix kjdice">'+bb+"<em id='kjup' class=\"kjup kjdown\"></em></div>")}else{$("#kj_").html('<p><p class="pdLeft06">'+p+'期开奖中…</p></p>												<cite class="k3time"></cite><span class="left">等待开奖</span><em id=\'kjup\' class="kjup kjdown"></em>')}}else{html+='<ul><li class="wb20">'+p+"期</li>";html+='<li class="kjdice listdice">';var hz=0;if(c!=""){c=c.split(",");for(var n=0;n<c.length;n++){hz+=parseInt(c[n]);html+='<b class="'+dice[c[n]-1]+'"></b>'}html+='</li><li class="wb10">'+hz+"</li>";c.sort();if(c[0]==c[1]&&c[1]==c[2]){html+='<li class="wb10">-</li><li class="wb16">-</li><li class="wb10">三同</li><li class="wb16">-</li></ul>'}else if(c[0]!=c[1]&&c[1]!=c[2]){if(c[1]-c[0]==1&&c[2]-c[1]==1){html+='<li class="wb10">-</li><li class="wb16">三连</li><li class="wb10">-</li><li class="wb16">-</li></ul>'}else{html+='<li class="wb10">-</li><li class="wb16">-</li><li class="wb10">-</li><li class="wb16">三不同</li></ul>'}}else{html+='<li class="wb10">二同</li><li class="wb16">-</li><li class="wb10">-</li><li class="wb16">-</li></ul>'}}else{html+='<b>-</b><b>-</b><b>-</b></li><li class="wb10">-</li>';html+='<li class="wb10">-</li><li class="wb16">-</li><li class="wb10">-</li><li class="wb16">-</li></ul>'}}});$("#kj_code div.k3kjlist").html(html)},error:function(){alert("网络异常，请刷新重试");return false}})}function diffToString(num,iscn){var unit=[864e5,36e5,6e4,1e3,1],date=[],cnDate=[];var cn="天,时,分,秒,毫秒".split(",");for(var i=0,l=unit.length;i<l;i++){date[i]=parseInt(num/unit[i]);cnDate[i]=date[i]+cn[i];num%=unit[i]}return iscn?cnDate:date}function eachClock(){this.now+=g.fps;var diff=this.endtime_-this.now;var msg="";if(diff>=0){timeout=diffToString(diff,false);msg=timeout[1]+""+timeout[2]+":"+CP.Util.pad(timeout[3],2);$("#ahk3>strong").html(msg)}else{msg="已截止";$("#ahk3>strong").html(msg);clearInterval(this.timer);setTimeout(function(){o.info()},2e3)}}function expect_change(now,endtime){this.now=now.getTime();this.endtime_=new Date(endtime.replace(/-/g,"/"));clearInterval(this.timer);this.timer=setInterval(function(){eachClock()},g.fps);eachClock()}main()},init:function(){o.info()},getArgument:function(t){var buy={};var code=CP.Util.joinString("06",g.codes);switch(t){case 1:buy={payUrl:"/trade/pcast.go",gid:"06",pid:g.qihao_id,codes:code,muli:g.beishu,countMoney:g.totalMoney,orderType:"dg"};break;case 3:var muli="",pid=g.qihao_id;for(var i=0;i<g.qishu;i++){muli+=g.beishu+",";pid+=","}pid=pid.substring(0,pid.length-1);muli=muli.substring(0,muli.length-1);buy={payUrl:"/trade/zcast.go",gid:"06",pid:pid,codes:code,muli:muli,countMoney:g.totalMoney,zflag:$(".zjStop em").hasClass("nocheck")?"0":"1",orderType:"zh"};break}return buy},dopay:function(){g.qishu=parseInt($("#tbox_qishu").val());g.qishu>1?g.buyType=3:g.buyType=1;var _obj=o.getArgument(g.buyType);var cMoney=g.totalMoney;var data={gid:"06",cMoney:cMoney,payPara:_obj};alert("提交中，请稍后！","loading");CP.User.info(function(options){remove_alert();if(options){jQuery.extend(data,options)}CP.Popup.buybox(data)});sessionStorage.removeItem("ank3")},dobuy:function(){var info="";if(g.count_zs<1){info="请至少选择一注彩票"}else if(!g.qishu){info="请输入期数"}else if(!g.beishu){info="请输入倍数"}if(info!=""){alert(info);return}o.dopay()}};var bind=function(){$("#content_kp").find("ul.k3xhlist li").Touch({fun:function(el){o.clickBall(el,"cur")}});$("#content_kp").find("div.k3tx ul").Touch({fun:function(el){o.clickBall(el,"cur")}});$("#deleted").bind(start_ev,function(){o.clear()});$("#shake").bind(start_ev,function(){o.jxNum(1,0)});$("#jxbtn").bind(start_ev,function(){o.jxNum(1,1)});$("#addlist").bind("click",function(){o.addList()});$("#hand").bind(start_ev,function(){location.href="#type=url&p=list/ahk3.html"});$("#dobuy").bind(start_ev,function(){o.dobuy()});$("#clearAll").bind(start_ev,function(){$("#bet_list").html("");$("#tbox_qishu").val("1");$("#tbox_beishu").val("1");CP.Storage.remove("ahk3",true);o.countAll();if(g.qishu>1){$("#dohm").addClass("fqhmGray");$(".zjStop").show()}else{$("#dohm").removeClass("fqhmGray");$(".zjStop").hide()}});$("#bet_list").delegate(".errorBg",end_ev,function(){$(this).parent().remove();o.countAll();o.setLocal()});var buyTimes=1;var zuiqishuNum=1;$("#tbox_beishu").KeyBoard({val:buyTimes,max:999,min:1,num:1,tag:"倍",fn:function(){g.beishu=$(this.ts).val();o.countAll()}});$("#tbox_qishu").KeyBoard({val:zuiqishuNum,max:155,min:1,num:1,tag:"期",fn:function(){g.qishu=$(this.ts).val();g.qishu>1?$(".zjStop").show():$(".zjStop").hide();o.countAll()}});$(".zjStop").bind(start_ev,function(){$(this).find("em").toggleClass("nocheck check")});$(".k3kj").bind(start_ev,function(){$(this).find(".kjup").toggleClass("kjdown");$("#kj_code").slideToggle()});$("#kj_code").bind(start_ev,function(){$(this).slideToggle();$(".k3kj").find(".kjup").toggleClass("kjdown")});Shake.run(function(){o.jxNum(1,0)})};var grade=function(){var grade=parseInt(localStorage.getItem("grade"));if(grade>0){$("#dobuy").html("立即预约")}};var init=function(){grade();o.fromLocal();o.pageGo.goBack();o.slide({effect:"swing",menuSpeed:200,conSpeed:350,menu:"#play_tabs span",con:"#content_kp article"});o.init();bind()};return{init:init,grade:grade,openList:o.openList,pageGo:o.pageGo,clear:o.clear}}();CP.K3.init();function resetPage(){CP.K3.grade();CP.K3.pageGo.goBack();CP.K3.clear();$("#betball").show();$("#betlist").hide();$("#lot_footer").removeClass("fo_buy").addClass("fo_basket")}