let clickMenu = function(){
    $('.x').on('click', function(){
        $('body').css({
            'overflow':'auto'
        });
        $('.mobile-menu').removeClass('active');
        $('.bg').removeClass('active');
        $('.menu').removeClass('active');
    })
    $('.bugermenu').on('click',function(){
        $('body').css({
            'overflow':'hidden'
        });
        $('.menu')
        .addClass('active');
        $('.bg').addClass('active');
        $('.mobile-menu')
        .addClass('active');
    })
}

$('body')
.prepend('<header></header>')
.append('<footer></footer>');

$('header').load('incom.html header >div', clickMenu);
$('footer').load('incom.html footer >div');

// 장바구니 수량 표기
let cartNm = 0;
if(sessionStorage.getItem('count')){
    cartNm = sessionStorage.getItem('count');
    setTimeout(()=>{
        $('.icon span span').text(cartNm);
    },20)
}