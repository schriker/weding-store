$(function(){
    // Search Form Animation
    var $searchBtn = $('.search').find('span');

    $searchBtn.on('click', function(){
        $(this).animate({
            'opacity': '0'
        }, 'medium', function(){
            $(this).addClass('hide');
            $(this).siblings('input').removeClass('hide').animate({
                'opacity': '1',
                'width': '100%',
            }).focus();
        });
        $(this).siblings('i').animate({
            'right': '0'
        }, 'medium');
    });

    $searchBtn.siblings('input').on('blur', function(){
        $(this).animate({
            'opacity': '0',
            'width': '0',
        }).addClass('hide');
        $(this).siblings('i').animate({
            'right': '70px'
        }, 'medium', function(){
            $(this).siblings('span').removeClass('hide').animate({
                'opacity': '1'
            }, 'medium');
        });

    });

    // Main Carousel Steing
    var $owl = $(".main-owl-carousel");
    
    $owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
    });

    $('.prev-c').on('click', function(){
        $owl.trigger('prev.owl.carousel');
    });

    $('.next-c').on('click', function(){
        $owl.trigger('next.owl.carousel');
    });

    // Main Page Quantity Selection
    (function quickQuantinty(){

        var $el = $('.q-add-quantity');
        var $decrease = $el.find('.decrease');
        var $increase = $el.find('.increase');
        var $input = $el.find('input');

        $input.on('click', selectRange);

        $decrease.on('click', quantity);
        $increase.on('click', quantity);

        function quantity(e){

            e.preventDefault();
            var input = $(this).siblings('input');
            
            if ($(this).hasClass('increase')){
                input.val(+input.val() + 1);
            }
            else if (parseInt(input.val()) > 0){
                input.val(+input.val() - 1);
            }
        }

        function selectRange(){
            $(this)[0].setSelectionRange(0, $(this).length);
        }

    })();
    // Items Carousel 
    (function productsCarousel(){
        
        $carouselEl = $('.products-carousel');
        $carouselEl.owlCarousel({
            items: 4,
        });

        $('.items-nav-prev').on('click', function(){
            $carouselEl.trigger('prev.owl.carousel');
        });
    
        $('.items-nav-next').on('click', function(){
            $carouselEl.trigger('next.owl.carousel');
        });

    })();


    $(".owl-item").addClass("col");
});

