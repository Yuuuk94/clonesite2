//스크롤 베너 타이틀 이벤트
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

let item='', index=0, price='', detail1='', dname='';
$.ajax({
    url:'./js/data.json',
    success:function(data){
        detail1 = `<p>
                        <img src="${data.goodsdetail1[localStorage.num].baner1}" alt="#">
                    </p>
                    <p>
                        <img src="${data.goodsdetail1[localStorage.num].baner2}" alt="#">
                    </p>`;
        dname = `${data.goodslist1[localStorage.num].name}`;
        price = `${data.goodslist1[localStorage.num].price}`;

        $('.d-img').html(detail1);
        $('.d-title h2').html(dname);
        $('.d-title span').html(price);

        $.each(data.goodslist1, function(k, v){
            item += `<figure>
                        <a href="goodsdetail.html">
                            <p><img src="${v.thum}" alt=""></p>
                            <h3>${v.name}</h3>
                            <figcaption>￦<span>${v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></figcaption>
                        </a>
                    </figure>`;
        })
        $('.list-show').html(item);

        $('.list-show figure').on('click', function(e){
            e.preventDefault();
            localStorage.num = $(this).index();
            location.href = $('.list-show figure a').attr('href');
        });
    }
})

