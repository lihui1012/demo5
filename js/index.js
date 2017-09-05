/*header nav*/
$(document).ready(function(){
	$("header .container .header_nav .nav ul li").bind("mouseover",function(){
		$(this).children(".subnav").stop().slideDown();
	}).bind("mouseout",function(){
		$(this).children(".subnav").stop().slideUp();
	})
}) 
/*gotop*/
window.onload=function(){
	var top=document.getElementsByClassName("gotop")[0];
	top.style.opacity=0;
	window.onscroll=function(){
		if(document.body.scrollTop>200){
			top.style.opacity=1;
			top.style.transition=".5s";
		}else{
			top.style.opacity=0;
		}
	}
	top.onclick=function(){
		function pop(){
			document.body.scrollTop-=10;
			if(document.body.scrollTop==0){
			clearInterval(time);
			}
		}
		time=setInterval(pop,0.1);
	}
}
//有机产品
    var wid = $(window).width();
    $(".p_list_ul li").width(wid);
    var h = $(".p_list_ul li").height();
    //$(".bd").height(h);

    window.addEventListener("resize", setRemSize, false);

    function setRemSize() {
        var wid = $(window).width();
        $(".p_list_ul li").width(wid);
        var h = $(".p_list_ul li").height();
        //$(".bd").height(h);
    }

    $('.p_list .p_list_ul').carouFredSel({
        'scroll': {
            'duration': 1000,
            'items': 1,
            'fx': 'crossfade'
        },
        'swipe': {'onMouse': true},
        'auto': true,
        'items': 1,
        'prev': '.p_prev',
        'next': '.p_next'
    });
//新闻资讯
    $('.n_list .n_list_ul').carouFredSel({
        'width': '100%',
        'scroll': {'duration': 800, 'items': 1},
        'swipe': {'onMouse': true},
        'auto': true,
        'prev': '.n_prev',
        'next': '.n_next'
    });
    
    function banner_pic(){
        var pic_height =$('.products .p_list ul li').height();
        $('.p_list .p_list_ul').height(pic_height);
    };

    banner_pic();

    window.onresize=function(){
        var pic_height =$('.products .p_list ul li').height();
        $('.p_list .p_list_ul').height(pic_height);
 
    };