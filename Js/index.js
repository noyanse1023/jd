$(function(){
	//轮播start
	 function myTab(content,pre,next){
        var index=0;
        var len = $(content).find('li').length; //获取焦点图的个数

        $(next).click(function(){
            index++;
            if(index==len){
                index=0;
            }
            showPic(index);
        });
        $(pre).click(function(){
            index--;
            if(index==-1){
                index=len-1;
            }
            showPic(index);
        });
        $(content+' dd').hover(function(){ //$('#slider_1 dd')
            index=$(this).index();
            showPic(index);
        });
        function showPic(index){
            $(content+' li').eq(index).fadeIn().siblings().fadeOut();
            $(content+' dd').eq(index).addClass('cur').siblings().removeClass('cur');
        }
        $(content).hover(function(){
            $(pre).css('left',0);
            $(next).css('right',0);
        },function(){
            $(pre).css('left','-40px');
            $(next).css('right','-40px');
        });

    }
    myTab('#slider_1','#slideprev_1','#slidenext_1');
    //轮播end
    
    //点击隐藏
    $("#iconClickNone").click(function(){
    	$("#jEvent").hide();
    })
    
    //位置start
    $("#dropDownWz").find("span").click(function(){
		$("#dropDownWz").find("span").removeClass("cur");
		$(this).addClass("cur");
		$("#cwIcon").html($(this).html());
	});
	//位置end
	
	
	//右边公告信息start
	$("#tab").children("span").click(function(){
		$("#tabContent").children(".tab-content").eq($(this).index()).show().siblings().hide();
	})
	//右边公告信息end
    
    //右侧固定导航悬浮动画start
    // $("#jdmToolbarTabs").children().hover(function() {
    //     $(this).css({background:'#CA1623',cursor:'pointer'});
    //     $(this).find(".jdvip").show().animate({left:'-70px'}).css({background:'#CA1623'});
    // },function() {
    //     $(this).css({background:'#7a6e6e',cursor:'normal'});
    //     $(this).find(".jdvip").hide().animate({left:'-35px'}).css({background:'#7a6e6e'});
    // })
    //右侧固定导航悬浮动画end

    //倒计时start
    function count() {
        var endTime = new Date('2018/10/12,12:12:12');//结束时间
        var now = new Date();//当前时间
        var leftTime = parseInt((endTime.getTime() - now.getTime())/1000);//秒数
        var d = parseInt(leftTime/(60 * 60 * 24));
        var h = parseInt(leftTime/(60 * 60) % 24);
        var m = parseInt(leftTime/60 % 60);
        var s = parseInt(leftTime % 60);
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        $(".hour").html(h);
        $(".minutes").html(m);
        $(".seconds").html(s);
        setInterval(count,1000)
    }  
    count();

    //倒计时end


    function myTab1(){
        var index=0;
        var len = $("#jdmsLb").find('.jdms-item').length; //获取焦点图的个数
        $("#jdmsNext").click(function(){
            index++;
            if(index == len){
                index = 0;
            }
            showPic(index);
        });
        $("#jdmsPre").click(function(){
           index--;
            if(index==-1){
                index=len-1;
            }
            showPic(index);
        });
        function showPic(index){
            $('#jdmsLb .jdms-item').eq(index).fadeIn().siblings().fadeOut();
        }
        $("#jdmsLb").hover(function(){
            $("#jdmsPre").css('left','7px');
            $("#jdmsNext").css('right','7px');
        },function(){
            $("#jdmsPre").css('left','-40px');
            $("#jdmsNext").css('right','-40px');
        });

    }
    myTab1();
    //轮播end


})
