$(function() {
        $(".honor_list .item").click(function(e) {
            var url = $(this).find(".thishref").data("url");
            $('.d_employeeimg').load(url + ".all", function(data) {
                $(".ul_list").carouFredSel({
                    'scroll': {'duration': 500, 'items': 1},
                    'auto': true,
                    'prev': ".honor_prev",
                    'next': ".honor_next",
                    'responsive': false
                });
            });

        });
    });

    $(function() {
        $(".honor_list .item").click(function(e) {
            e.stopPropagation();
            $(".d_popup").show();
            $(".d_popup").css({'z-index': '1'});
        });

        $("body").on("click", ".d_mask", function(e) {
            e.stopPropagation();
            $(".d_popup").css({'display': 'none'});
        });
        $("body").on("click", ".honor_close", function(e) {
            e.stopPropagation();
            $(".d_popup").css({'display': 'none'});
        });
    });