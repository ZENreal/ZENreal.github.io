function loadWidget(t,e){localStorage.removeItem("waifu-display"),sessionStorage.removeItem("waifu-text"),$("body").append('<div id="waifu">\n\t\t\t<div id="waifu-tips"></div>\n\t\t\t<canvas id="live2d" width="200" height="200"></canvas>\n\t\t\t<div id="waifu-tool">\n\t\t\t\t<span class="fa fa-lg fa-comment"></span>\n\t\t\t\t<span class="fa fa-lg fa-paper-plane"></span>\n\t\t\t\t<span class="fa fa-lg fa-user-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-street-view"></span>\n\t\t\t\t<span class="fa fa-lg fa-camera-retro"></span>\n\t\t\t\t<span class="fa fa-lg fa-info-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-times"></span>\n\t\t\t</div>\n\t\t</div>'),$("#waifu").show().animate({bottom:0},3e3),function(){$("#waifu-tool .fa-comment").click(n),$("#waifu-tool .fa-paper-plane").click(()=>{window.Asteroids?(window.ASTEROIDSPLAYERS||(window.ASTEROIDSPLAYERS=[]),window.ASTEROIDSPLAYERS.push(new Asteroids)):$.ajax({url:"https://cdn.jsdelivr.net/gh/GalaxyMimi/CDN/asteroids.js",dataType:"script",cache:!0})}),$("#waifu-tool .fa-user-circle").click(f),$("#waifu-tool .fa-street-view").click(c),$("#waifu-tool .fa-camera-retro").click(()=>{s("照好了嘛，是不是很可爱呢？",6e3,9),Live2D.captureName="photo.png",Live2D.captureFrame=!0}),$("#waifu-tool .fa-info-circle").click(()=>{open("https://github.com/stevenjoezhang/live2d-widget")}),$("#waifu-tool .fa-times").click(()=>{localStorage.setItem("waifu-display",(new Date).getTime()),s("愿你有一天能与重要的人重逢。",2e3,11),$("#waifu").animate({bottom:-500},3e3,()=>{$("#waifu").hide(),$("#waifu-toggle").show().animate({"margin-left":-50},1e3)})});var t=/x/;console.log(t),t.toString=(()=>(s("哈哈，你打开了控制台，是想要看看我的小秘密吗？",6e3,9),"")),$(document).on("copy",()=>{s("你都复制了些什么呀，转载要记得加上出处哦！",6e3,9)}),$(document).on("visibilitychange",()=>{document.hidden||s("哇，你终于回来了～",6e3,9)})}(),function(){var t,e=location.port?`${location.protocol}//${location.hostname}:${location.port}/`:`${location.protocol}//${location.hostname}/`;if(location.href==e){var a=(new Date).getHours();t=a>5&&a<=7?"早上好！一日之计在于晨，美好的一天就要开始了。":a>7&&a<=11?"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！":a>11&&a<=14?"中午了，工作了一个上午，现在是午餐时间！":a>14&&a<=17?"午后很容易犯困呢，今天的运动目标完成了吗？":a>17&&a<=19?"傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～":a>19&&a<=21?"晚上好，今天过得怎么样？":a>21&&a<=23?["已经这么晚了呀，早点休息吧，晚安～","深夜时要爱护眼睛呀！"]:"你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？"}else if(""!==document.referrer){var o=document.createElement("a");o.href=document.referrer;var i=o.hostname.split(".")[1];t=location.hostname==o.hostname?`欢迎阅读<span style="color:#0099cc;">『${document.title.split(" - ")[0]}』</span>`:"baidu"==i?`Hello！来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">${o.search.split("&wd=")[1].split("&")[0]}</span> 找到的我吗？`:"so"==i?`Hello！来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">${o.search.split("&q=")[1].split("&")[0]}</span> 找到的我吗？`:"google"==i?`Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『${document.title.split(" - ")[0]}』</span>`:`Hello！来自 <span style="color:#0099cc;">${o.hostname}</span> 的朋友`}else t=`欢迎阅读<span style="color:#0099cc;">『${document.title.split(" - ")[0]}』</span>`;s(t,7e3,8)}();var a=!1,o=null,i=null,l=["好久不见，日子过得好快呢……","大坏蛋！你都多久没碰人家了呀，嘤嘤嘤～","嗨～快来逗我玩吧！","拿小拳拳锤你胸口！"];function n(){Math.random()<.6&&l.length>0?s(l[Math.floor(Math.random()*l.length)],6e3,9):$.getJSON("https://v1.hitokoto.cn",function(t){var e=`这句一言来自 <span style="color:#0099cc;">『${t.from}』</span>，是 <span style="color:#0099cc;">${t.creator}</span> 在 hitokoto.cn 投稿的。`;s(t.hitokoto,6e3,9),setTimeout(()=>{s(e,4e3,9)},6e3)})}function s(t,e,a){t&&(!sessionStorage.getItem("waifu-text")||sessionStorage.getItem("waifu-text")<=a)&&(i&&(clearTimeout(i),i=null),Array.isArray(t)&&(t=t[Math.floor(Math.random()*t.length)]),sessionStorage.setItem("waifu-text",a),$("#waifu-tips").stop().html(t).fadeTo(200,1),i=setTimeout(()=>{sessionStorage.removeItem("waifu-text"),$("#waifu-tips").fadeTo(1e3,0)},e))}function r(t,a){localStorage.setItem("modelId",t),void 0===a&&(a=0),localStorage.setItem("modelTexturesId",a),loadlive2d("live2d",`${e}/get/?id=${t}-${a}`,console.log(`Live2D 模型 ${t}-${a} 加载完成`))}function c(){var t=localStorage.getItem("modelId"),a=localStorage.getItem("modelTexturesId");$.ajax({cache:!1,url:`${e}/rand_textures/?id=${t}-${a}`,dataType:"json",success:function(e){1!=e.textures.id||1!=a&&0!=a?s("我的新衣服好看嘛？",4e3,10):s("我还没有其他衣服呢！",4e3,10),r(t,e.textures.id)}})}function f(){var t=localStorage.getItem("modelId");$.ajax({cache:!1,url:`${e}/switch/?id=${t}`,dataType:"json",success:function(t){r(t.model.id),s(t.model.message,4e3,10)}})}$(".fa-share-alt").is(":hidden")&&l.push("记得把小家加入Adblock白名单哦！"),$(document).mousemove(()=>{a=!0}).keydown(()=>{a=!0}),setInterval(()=>{a?(a=!1,clearInterval(o),o=null):o||(o=setInterval(n,25e3))},1e3),function(){var e=localStorage.getItem("modelId"),a=localStorage.getItem("modelTexturesId");null==e&&(e=1,a=53);r(e,a),$.getJSON(t,function(t){$.each(t.mouseover,function(t,e){$(document).on("mouseover",e.selector,function(){var t=Array.isArray(e.text)?e.text[Math.floor(Math.random()*e.text.length)]:e.text;s(t=t.replace("{text}",$(this).text()),4e3,8)})}),$.each(t.click,function(t,e){$(document).on("click",e.selector,function(){var t=Array.isArray(e.text)?e.text[Math.floor(Math.random()*e.text.length)]:e.text;s(t=t.replace("{text}",$(this).text()),4e3,8)})}),$.each(t.seasons,function(t,e){var a=new Date,o=e.date.split("-")[0],i=e.date.split("-")[1]||o;if(o.split("/")[0]<=a.getMonth()+1&&a.getMonth()+1<=i.split("/")[0]&&o.split("/")[1]<=a.getDate()&&a.getDate()<=i.split("/")[1]){var n=Array.isArray(e.text)?e.text[Math.floor(Math.random()*e.text.length)]:e.text;n=n.replace("{year}",a.getFullYear()),l.push(n)}})})}()}function initWidget(t="/waifu-tips.json",e=""){screen.width<=768||($("body").append('<div id="waifu-toggle" style="margin-left: -100px;">\n\t\t\t<span>看板娘</span>\n\t\t</div>'),$("#waifu-toggle").hover(()=>{$("#waifu-toggle").animate({"margin-left":-30},500)},()=>{$("#waifu-toggle").animate({"margin-left":-50},500)}).click(()=>{$("#waifu-toggle").animate({"margin-left":-100},1e3,()=>{$("#waifu-toggle").hide()}),$("#waifu-toggle").attr("first-time")?(loadWidget(t,e),$("#waifu-toggle").attr("first-time",!1)):(localStorage.removeItem("waifu-display"),$("#waifu").show().animate({bottom:0},3e3))}),localStorage.getItem("waifu-display")&&(new Date).getTime()-localStorage.getItem("waifu-display")<=864e5?$("#waifu-toggle").attr("first-time",!0).css({"margin-left":-50}):loadWidget(t,e))}