$(window).scroll(function(){
    var wScroll= $(this).scrollTop();

    console.log(wScroll);

    $('#news').css({
        'transform': 'translate(0px, '+ wScroll/6 +'%)'
    });    
    
    $('#listen').css({
        'transform': 'translate(0px, '+ -wScroll/4 +'%)'
    });

    $('#archive').css({
        'transform': 'translate(0px, '+ -wScroll/4 +'%)'
    });

    $('.youtube1').css({
        'transform': 'translate(0px, '+ -wScroll/3 +'%)'
    })
    $('.youtube2').css({
        'transform': 'translate(0px, '+ -wScroll/10 +'%)'
    })
    $('.amot').css({
        'transform': 'translate(0px, '+ -wScroll/1 +'%)'
    })
    $('.ucing').css({
        'transform': 'translate(0px, '+ -wScroll/1 +'%)'
    })
    $('.paus').css({
        'transform': 'translate(0px, '+ -wScroll/1 +'%)'
    })
    $('.youtubeadd1').css({
        'transform': 'translate(0px, '+ -wScroll/8 +'%)'
    })
    $('.strawberry').css({
        'transform': 'translate(0px, '+ -wScroll/3 +'%)'
    })
    $('.mobil').css({
        'transform': 'translate(0px, '+ -wScroll/3 +'%)'
    })
    $('.tangan').css({
        'transform': 'translate(0px, '+ -wScroll/10 +'%)'
    })
    $('.emot').css({
        'transform': 'translate(0px, '+ -wScroll/3 +'%)'
    })
    $('.rumah').css({
        'transform': 'translate(0px, '+ -wScroll/4.8 +'%)'
    })
    $('.form-group').css({
        'transform': 'translate(0px, '+ -wScroll/4 +'%)'
    })    
    $('.form-group-text').css({
        'transform': 'translate(0px, '+ -wScroll/4 +'%)'
    })    
      

}); 
