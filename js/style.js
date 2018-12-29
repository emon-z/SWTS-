// 切换语言代码
var star_bottom=document.getElementById("star-bot")
var star_show=document.getElementById("star-sh")
star_bottom.onmouseover=function(){
	star_show.style.display = "block";
}
star_show.onmouseover=function(){
	star_show.style.display = "block";
}
star_show.onmouseout=function(){
	star_show.style.display = "none";
}
var english=document.getElementById("english")
var japanese=document.getElementById("japanese")
var russian=document.getElementById("russian")
var kind=[english,japanese,russian]
console.log(kind)
var language=document.getElementById("language")
function f1(){
	for(i=0;i<kind.length;i++)
	kind[i].onclick=function(){
		var arr=language.innerText
		language.innerText=this.innerText
		this.innerText=arr
}
}
setInterval(f1, 1000)

// 切换语言代码结束
