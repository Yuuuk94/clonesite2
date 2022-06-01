//스크롤 헤더
let pos = {y:0, dy:0,state:true}
$(window).on('scroll', function(){
    // 현재 스크롤 값
    pos.y = window.scrollY;
    // 스크롤을 올렸는지 내렸는지 확인
    pos.state = pos.y>pos.dy;
    // 이전 스크롤 값
    pos.dy = pos.y;
    if(pos.state == true){
        $('header').css({
            'display':'none'
        });
    }else{
        $('header').css({
            'display':'block'
        });
    }
});

// item list

let item='', index=0, price='', detail1='', dname='', total=0, priceNm=0;
let num = localStorage.num;
$.ajax({
    url:'./js/data.json',
    success:function(data){
        detail1 = `<p><img src="${data.goodsdetail1[num].baner1}" alt="#"></p>
                <p><img src="${data.goodsdetail1[num].baner2}" alt="#"></p>`;
        dname = `${data.goodslist1[num].name}`;
        price = `${data.goodslist1[num].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        priceNm = data.goodslist1[num].price;
        $('.d-img').html(detail1);
        $('.d-title h2').html(dname);
        $('.d-title span').html(price);
    }
})


// 상품이미지 슬라이드
let dPos = {x:0, dx:0, dir:'left'};
let imgWidth;
$('.d-img').draggable({
    axis: 'x',
    revert: function(){
        dPos.dir = (dPos.x > dPos.dx) ? 'left':'right';
    },
    start:function(e){
        dPos.x=e.pageX;
        imgWidth = $('.d-img').width();
    },
    drag:function(e){
        dPos.dx = e.pageX;
    },
    stop:function(){
        if(dPos.dir=='left'){
            $('.d-img').animate({
                left:`-${imgWidth/2}`
            });
            $('.d-nav span').toggleClass('active');
        }else{
            $('.d-img').animate({
                left:`0`
            });
            $('.d-nav span').toggleClass('active');
        }
    }
});

// 옵션 선택
let size = new Object();
let sizeNm = 0;
let m=0;

$('.select-size').on('click', function(e){
    if(!$(e.target).hasClass('active')){
        $(e.target).addClass('active');
        // 사이즈별 가격 추가
        if(e.target.innerText[0] == 'M'){
            size.m = 1;
            sizeNm += size.m;
        }else if(e.target.innerText[0] == 'L'){
            size.l = 1;
            sizeNm += size.l;
        }else{
            size.xl = 1;
            sizeNm += size.xl;
        }
        // console.log(size)

        $('.option-list').append(`<div>
                        <p>${e.target.innerText}</p>
                        <p>
                            <button data-size=${e.target.innerText}>-</button>
                            <span>1</span>
                            <button data-size=${e.target.innerText}>+</button>
                        </p>
                        <p>₩ <span>${price}</span></p>
                        <p data-size=${e.target.innerText}>X</p>
                    </div>`);

        $('.option-total span').text(String(priceNm*sizeNm).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }else{}
});

$('.option-list').on('click', function(e){
    if(e.target.innerText == 'X'){
        // 옵션 삭제
        $(`.${e.target.dataset.size}`).removeClass('active');
        $(e.target.parentNode).remove();
        if(e.target.dataset.size == 'M'){
            sizeNm -= size.m;
            size.m = 0;
        }else if(e.target.dataset.size == 'L'){
            sizeNm -= size.l;
            size.l = 0;
        }else{
            sizeNm -= size.xl;
            size.xl = 0;
        }
        // console.log(size)
    }
    if(e.target.innerText == '+'){
        // 수량 증가
        if(e.target.dataset.size == 'M'){
            size.m += 1;
            $(e.target.parentNode.children[1]).text(size.m);
        }else if(e.target.dataset.size == 'L'){
            size.l += 1;
            $(e.target.parentNode.children[1]).text(size.l);
        }else{
            size.xl += 1;
            $(e.target.parentNode.children[1]).text(size.xl);
        }
        sizeNm += 1; 
        // console.log(size)
    }else if(e.target.innerText == '-'){
        // 수량 감소
        if(e.target.parentNode.children[1].innerText != '1'){
            if(e.target.dataset.size == 'M'){
                size.m -= 1;
                $(e.target.parentNode.children[1]).text(size.m);
            }else if(e.target.dataset.size == 'L'){
                size.l -= 1;
                $(e.target.parentNode.children[1]).text(size.l);
            }else if(e.target.dataset.size == 'XL'){
                size.xl -= 1;
                $(e.target.parentNode.children[1]).text(size.xl);
            }
            sizeNm -= 1; 
            console.log(size)
        // console.log(e.target.parentNode.children[1].innerText)
        }
    }
    $('.option-total span').text(String(priceNm*sizeNm).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
})

// 장바구니 담기

let cartCount = 0;
$('.gofixed').on('click', function(e){
    if($('.cart-option').hasClass('active')){
        // 장바구니 아이템 담기
        sessionStorage.setItem(num,JSON.stringify(size));

        // 장바구니 수량 카운팅
        if(sessionStorage.getItem('count')){
            cartCount = sessionStorage.getItem('count');
        }
        cartCount++;
        sessionStorage.setItem('count',cartCount);

        // 클릭 타입
        if(e.target.className == 'buy'){
            location.href = './login.html';
        }else{
            if(!confirm('상품이 장바구니에 담겼습니다. 확인하시겠습니까?')){
                //취소 시 페이지에 남아있기
                // 장바구니 담긴 숫자 카운팅을 위해 페이지 새로고침
                location.reload();
            }else{
                location.href = './cart.html';
            }
        }
    }else{
        $('.cart-option').addClass('active');
    }
});
// 장바구니 닫기
$('.option-close').on('click', function(){
    $('.cart-option').removeClass('active');
});
