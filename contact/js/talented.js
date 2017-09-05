var biglist=new Array("上海","北京","浙江","四川");
	var subcat=new Array();
		subcat[0]=new Array("0","虹口");
		subcat[1]=new Array("1","北京");
		subcat[2]=new Array("2","杭州");
		subcat[3]=new Array("2","宁波");
		subcat[4]=new Array("3","成都");
	
	function changeSelected(locationid){
		for(var j=0;j<biglist.length;j++){
			if(biglist[j]==locationid){
				locationid=j;
			}
		}
		document.form1.smallSelected.length=0;
		document.form1.smallSelected.options[0]=new Option("请选择区域...");
		for(i=0;i<subcat.length;i++){
			if(subcat[i][0]==locationid){
				
				document.form1.smallSelected.options[document.form1.smallSelected.length]=
				new Option(subcat[i][1])
			}
		}
	}
	
$(function(){
       	$("h3").click(function(){
            if (!$(this).hasClass('active')) {
                $(this).addClass("active");
                $(this).siblings(".article").slideDown();
                $(this).parent().siblings().children(".article").slideUp();
                $(this).parent().siblings().children("h3").removeClass("active");
            } else {
                $(this).removeClass("active");
                $(this).siblings(".article").slideUp();
            }
        });
    })

	/*var btn=document.getElementsByClassName("btn")[0];
	var sect1=document.getElementById("sect1").options;//获取option的值
	var sect2=document.getElementById("sect2").options;//获取option的值
	var value2=document.getElementById("sect2").value;//获取被选中的值
	var hongkou=document.getElementsByClassName("hongkou")[0];
	var beijing=document.getElementsByClassName("beijing")[0];
	var zhejiang=document.getElementsByClassName("zhejiang")[0];
	var hengzhou=document.getElementsByClassName("hengzhou")[0];
	var ningbo=document.getElementsByClassName("ningbo")[0];
	var chengdu=document.getElementsByClassName("chengdu")[0];*/
	
	
	
	/*btn.onclick=function(){
		
		if(sect1[0].selected && (sect2[0].selected || sect2[1].selected)){
			hongkou.style.display="block";
			//alert(1)
		}else if(sect1[1].selected && (sect2[0].selected || sect2[1].selected)){
			beijing.style.display="block";
			hongkou.style.display="none";
			//alert(value2)
			
		}else if(sect1[2].selected && sect2[0].selected){
			zhejiang.style.display="block";
			//alert(1)
		}else if(sect1[2].selected && sect2[1].selected){
			hengzhou.style.display="block";
			//alert(2)
		}else if(sect1[2].selected && sect2[2].selected){
			ningbo.style.display="block";
			
		}else if(sect1[3].selected && (sect2[0].selected || sect2[1].selected)){
			chengdu.style.display="block";
		}
	}*/

$(".btn").click(function(){
		if($("#sect1 option:eq(0):selected").val()=="上海" && ($("#sect2 option:eq(0):selected").val()=="请选择区域..." || $("#sect2 option:eq(1):selected").val()=="虹口")){
			$(".hongkou").show();
			$(".hongkou").siblings().hide();
		}else if($("#sect1 option:eq(1):selected").val()=="北京" && ($("#sect2 option:eq(0):selected").val()=="请选择区域..." || $("#sect2 option:eq(1):selected").val()=="北京")){
			$(".beijing").show();
			$(".beijing").siblings().hide();
		}else if($("#sect1 option:eq(2):selected").val()=="浙江" && $("#sect2 option:eq(0):selected").val()=="请选择区域..."){
			$(".zhejiang").show();
			$(".zhejiang").siblings().hide();
		}else if($("#sect1 option:eq(2):selected").val()=="浙江" && $("#sect2 option:eq(1):selected").val()=="杭州"){
			$(".hengzhou").show();
			$(".hengzhou").siblings().hide();
		}else if($("#sect1 option:eq(2):selected").val()=="浙江" && $("#sect2 option:eq(2):selected").val()=="宁波"){
			$(".ningbo").show();
			$(".ningbo").siblings().hide();
		}else if($("#sect1 option:eq(3):selected").val()=="四川" && ($("#sect2 option:eq(0):selected").val()=="请选择区域..." || $("#sect2 option:eq(1):selected").val()=="成都")){
			$(".chengdu").show();
			$(".chengdu").siblings().hide();
		}
		
	})

