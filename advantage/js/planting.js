
    $(function(){
        $('.planting_list .planting_list_ul').carouFredSel({
            'width':'100%',
            'scroll': {'duration': 800, 'items': 1},
            'swipe': {'onMouse': true},
            'auto': false,
//            'items': 4,
            'prev': '.planting_prev',
            'next': '.planting_next',
            'circular': false
        });
    });
