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

    // Main Carousel Seting
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
            $(this)[0].setSelectionRange(0, $(this)[0].value.length);
        }

    })();

    // Items Carousel 
    (function productsCarousel(){      

        var $carouselEl = $('.products-carousel');

        for(i=0; i<$carouselEl.length; i++){
            var $carouselId = $('#carousel-'+(i+1));
            $carouselId.owlCarousel({
                items: 4,
           });
        }

        $('.items-nav-prev').on('click', navigation);
        $('.items-nav-next').on('click', navigation);
        

        function navigation(){

            var carouselSet = $(this).parent().attr("data-carousel-set");
            var currentId = $("."+carouselSet).find(".show").find(".owl-carousel").attr("id");
            
            if ($(this).hasClass('items-nav-prev')){
                $("#"+currentId).trigger('prev.owl.carousel'); 
            }

            else if($(this).hasClass('items-nav-next')){
                $("#"+currentId).trigger('next.owl.carousel');
            }
        };

    })();


    $(".owl-item").addClass("col");
});

