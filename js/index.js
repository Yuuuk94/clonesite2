let loadAft;
loadAft = function(){
    $('.x').on('click', function(){
        $('.mobile-menu').removeClass('active');
        $('.bg').removeClass('active');
        $('.menu').removeClass('active');
    })
    $('.bugermenu').on('click',function(){
        $('.menu').addClass('active');
        $('.bg').addClass('active');
        $('.mobile-menu').addClass('active');
    })

}
$('body')
.prepend('<header></header>')
.append('<footer></footer>');

$('header').load('incom.html header >div',loadAft);
$('footer').load('incom.html footer >div');



