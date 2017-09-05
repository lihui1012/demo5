$(function(){
        
        var list=$(".farm_img_ul");
        var pre=$(".farm_prev");
        var next=$(".farm_next");
        for(i=1;i<=list.length;i++){
            var ul_list="farm_img_ul"+i;
            var ul_list2=".farm_img_ul"+i;
            var pre1='farm_prev'+i;

            var next1="farm_next"+i;
            var pre2='.farm_prev'+i;

            var next2=".farm_next"+i;
            var list=$(".farm_img_ul");

            var prev_left=$(".farm_prev");
            var next_right=$(".farm_next");
            list.eq(i-1).addClass(ul_list);
            prev_left.eq(i-1).addClass(pre1);
            next_right.eq(i-1).addClass(next1);

            $(ul_list2).carouFredSel({
                'scroll': {'duration': 800,'items':1},
                'auto': true,
                'prev': pre2,
                'next': next2
            });
        };
        
  
    });