export default function FileActiveModule() {
    if ($('.header-subjects')) {

        const $subject = $('.header-subjects');

        $(document).mouseup(function (e) { 
            if (!$subject.is(e.target) // nếu click vàp mục tiêu k phải là vùng chứa
                && $subject.has(e.target).length === 0)// và cũng k phải là con của vùng chứa
                { 
                $subject.removeClass('active');
            }
        });

        $('.subject-title').on('click', function () {
            $subject.toggleClass('active');
        });
    }

    if ($('.share-sab')) {

        function taba(paras) {
            const width = $(window).width();
            const $share = $('.share-sab');
            if (width <= 767) {
                $(document).mouseup(function (e) { 
                    if (!$share.is(e.target) // nếu click vàp mục tiêu k phải là vùng chứa
                        && $share.has(e.target).length === 0)// và cũng k phải là con của vùng chứa
                        { 
                        $share.removeClass('active');
                    }
                });
                $('.icon-slidebar').on('click', function () {
                    $share.toggleClass('active');
                });
            }
            
        }
        taba();

        $(window).on('resize', function () {
            taba();
        });
    }




}