let loadAft;
loadAft = function(){
    $('.bugermenu').on('click',function(){
        $('.menu').addClass('active');
        $('.mobile-menu').addClass('active');
    })
    $('.x').on('click', function(){
        $('.menu').removeClass('active');
    })
}
$('body')
.prepend('<header></header>')
.append('<footer></footer>');

$('header').load('incom.html header >div',loadAft);
$('footer').load('incom.html footer >div');



