$(document).ready(function(){

    $(function () {
        // инициализировать все элементы на страницы, имеющих атрибут data-toggle="tooltip", как компоненты tooltip
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#event1').
    mouseover(function(){
        $('#page1').removeClass('stiker').addClass('stikerin');
    }).
    mouseout(function(){
        // при покидании элемента
        $('#page1').removeClass('stikerin').addClass('stiker');
    });


$('#event2').
mouseover(function(){
    $('#page2').removeClass('stiker').addClass('stikerin2');
}).
mouseout(function(){
    // при покидании элемента
    $('#page2').removeClass('stikerin2').addClass('stiker');
});

    $('#event3').
    mouseover(function(){
        $('#page3').removeClass('stiker').addClass('stikerin3');
    }).
    mouseout(function(){
        // при покидании элемента
        $('#page3').removeClass('stikerin3').addClass('stiker');
    });

    $('#event4').
    mouseover(function(){
        $('#page4').removeClass('stiker').addClass('stikerin4');
    }).
    mouseout(function(){
        // при покидании элемента
        $('#page4').removeClass('stikerin4').addClass('stiker');
    });

    $('#event5').
    mouseover(function(){
        $('#page5').removeClass('stiker').addClass('stikerin5');
    }).
    mouseout(function(){
        // при покидании элемента
        $('#page5').removeClass('stikerin5').addClass('stiker');
    });

    jQuery(document).ready(function($) {
        $('.elements-gride').masonry({
            // options
            itemSelector: '.element-item',
            columnWidth: '.persent-size',
            percentPosition: true
        });
    });



    $('#lab1 p').
    mouseover(function(){
        $('#lab1 img').animate({opacity: "0.3"}, 300);
        $('#lab1 p').animate({opacity: "1"}, 700);
    }).
    mouseout(function(){
        // при покидании элемента
        $('#lab1 img').animate({opacity: "1"}, 700);
        $('#lab1 p').animate({opacity: "0"}, 300);
    });

    $('#lab2 p').
    mouseover(function(){
        $('#lab2 img').animate({opacity: "0.3"}, 300);
        $('#lab2 p').animate({opacity: "1"}, 700);
    }).
    mouseout(function(){
        // при покидании элемента
        $('#lab2 img').animate({opacity: "1"}, 700);
        $('#lab2 p').animate({opacity: "0"}, 300);
    });

    $('#lab3 p').
    mouseover(function(){
        $('#lab3 img').animate({opacity: "0.3"}, 300);
        $('#lab3 p').animate({opacity: "1"}, 700);
    }).
    mouseout(function(){
        // при покидании элемента
        $('#lab3 img').animate({opacity: "1"}, 700);
        $('#lab3 p').animate({opacity: "0"}, 300);
    });

    $('#lab4 p').
    mouseover(function(){
        $('#lab4 img').animate({opacity: "0.3"}, 300);
        $('#lab4 p').animate({opacity: "1"}, 700);
    }).
    mouseout(function(){
        // при покидании элемента
        $('#lab4 img').animate({opacity: "1"}, 700);
        $('#lab4 p').animate({opacity: "0"}, 300);
    });

    $('#lab5 p').
    mouseover(function(){
        $('#lab5 img').animate({opacity: "0.3"}, 300);
        $('#lab5 p').animate({opacity: "1"}, 700);
    }).
    mouseout(function(){
        // при покидании элемента
        $('#lab5 img').animate({opacity: "1"}, 700);
        $('#lab5 p').animate({opacity: "0"}, 300);
    });

    $('#lab6 p').
    mouseover(function(){
        $('#lab6 img').animate({opacity: "0.3"}, 300);
        $('#lab6 p').animate({opacity: "1"}, 700);
    }).
    mouseout(function(){
        // при покидании элемента
        $('#lab6 img').animate({opacity: "1"}, 700);
        $('#lab6 p').animate({opacity: "0"}, 300);
    });


});