$(function(){
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
    
});

