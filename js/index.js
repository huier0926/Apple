$(".button").click(function(){
	$(".tophidden").stop(true,true)
	$(".bageage").stop(true,true)
	var ch=document.documentElement.clientHeight
	var claname=($(".topshow").attr("class"))
	var n=claname.indexOf("active")
	if(n<=0){
		$(".bageage").animate({right:"-40px"})
		$(".topshow").css("background","black")
		$(".topshow").addClass("active")
		$(".tophidden").css("zIndex","9999999")
		$(".tophidden").animate({height:"100%",opacity:"1"})

	}else if(n=>0){

		$(".topshow").removeClass("active")
		$(".tophidden").animate({height:"0px",opacity:"0"},function(){
		$(".topshow").css("background","none")
		$(".bageage").animate({right:0})
		$(".disapear").removeClass("active")
		$(".unders").removeClass("active")
		$(".tophidden").css("zIndex","99")
		})
	}
})

$(".search").focus(function(){
	$(".disapear").removeClass("sleep")
	$(".disapear").addClass("active")
	setTimeout(function(){
	$(".unders").addClass("active")
	},1000)
	
})




$(window).resize(function(){
	var cw=document.documentElement.clientWidth
	var ch=document.documentElement.clientHeight
	if(cw>768){
		var claname=($(".topshow").attr("class"))
		var n=claname.indexOf("active")
		if(n=>0){
			$(".topshow").css("background","none")
			$(".topshow").removeClass("active")
			$(".tophidden").css({height:"0",opacity:"0"})
			$(".topinner").css("background","rgba(51,51,51,0.9)")
			$(".bageage").css("right",0)
			$(".disapear").removeClass("active")
			$(".disapear").addClass("sleep")
			$(".unders").removeClass("active")	
			}
		
	}

	// $(".bannerinner").css("left",cw).eq(m).css("left","0")


})

// banner
var bannert=setInterval(bannermove,1000)
var n=0
var m=0
$(".cell").css("left","100%").eq(0).css("left",0)
function bannermove(){
	m++
	if(m==4){m=0}
	$(".btn li").removeClass("hot")
	$(".cell").eq(m).animate({"left":0})
	$(".btn li").eq(m).addClass("hot")
	$(".cell").eq(n).animate({"left":"-100%"},function(){
		$(".cell").eq(n).css("left","100%")
		n=m
	})
}
$(".bannerbox").hover(function(){
	$(".leftbtn").stop(true,true)
	$(".rightbtn").stop(true,true)
	$(".leftbtn").animate({"opacity":"1"},500)
	$(".rightbtn").animate({"opacity":"1"},500)
	clearInterval(bannert)
},function(){
	$(".leftbtn").stop(true,true)
	$(".rightbtn").stop(true,true)
	$(".leftbtn").animate({"opacity":"0"},500)
	$(".rightbtn").animate({"opacity":"0"},500)
	bannert=setInterval(bannermove,1000)
})

$(".rightbtn").click(function(e){
	e.preventDefault()
	$(".btn li").stop(true,true)
	$(".cell").stop(true,true)
	bannermove()
})

$(".leftbtn").click(function(e){
	e.preventDefault()
	$(".btn li").stop(true,true)
	$(".cell").stop(true,true)
	n--
	if(n==-1){n=3}
	$(".btn li").removeClass("hot")
	$(".cell").eq(n).css("left","-100%")
	$(".cell").eq(n).animate({"left":0})
	$(".btn li").eq(n).addClass("hot")
	$(".cell").eq(m).animate({"left":"100%"})
	m=n
	
})

$(".btn li").click(function(){
	$(".btn li").stop(true,true)
	$(".cell").stop(true,true)
	var index=$(this).index(".btn li")
	if(index==m){return}
	if(index>m){
		$(".cell").eq(index).animate({"left":0})
		$(".btn li").removeClass("hot")
		$(".btn li").eq(index).addClass("hot")
		$(".cell").eq(n).animate({"left":"-100%"},function(){
		$(".cell").eq(n).css("left","100%")
		m=n=index
		})
	}
	if(index<m){
		$(".cell").eq(index).css("left","-100%")
		$(".cell").eq(index).animate({"left":0})
		$(".btn li").removeClass("hot")
		$(".btn li").eq(index).addClass("hot")
		$(".cell").eq(n).animate({"left":"100%"})
		
		m=n=index
		
	}
})


var flag=[false,false,false,false,false,false,false]
$(".xiala").click(function(){
	$(".links ul").stop(true,true)
	var index=$(this).index(".xiala")
	$(this).toggleClass("active")
	if(!flag[index]){
		var long=$(".links ul:eq("+index+") li").length
		var long=long*36
		$(".links ul").eq(index).animate({"height":long},500)
		flag[index]=true
	}else{
		var long=$(".links ul:eq("+index+") li").length
		var long=long*36
		$(".links ul").eq(index).animate({"height":36},500)
		flag[index]=false
	}
	
})