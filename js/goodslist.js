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

let exChange = function(){
    $.ajax({
        url : './js/data.json',
        success : function(data){
            let item='', total=0;
            let more = function(n,m){
                $.each(data.goodslist1, function(k, v){
                    if(k >= n && k < m){
                        item += `<figure>
                            <a href="goodsdetail.html">
                                <p><img src="${v.thum}" alt=""></p>
                                <h3>${v.name}</h3>
                                <figcaption>￦<span>${v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></figcaption>
                            </a>
                        </figure>`;
                    }else{}
                });
                $('.list-show').html(item);
            }
            more(0, 8);

            total = data.goodslist1.length;
            $('.bar p span').html(total);

            $('.list-show figure').on('click', function(e){
                e.preventDefault();
                localStorage.num = $(this).index();
                location.href = $('.list-show figure a').attr('href');
            });

            // more 버튼 클릭
            let num = 1;
            $('.show-more').on('click', function(){
                num++;
                more(num*8 - 8, num * 8);
                console.log('a')
                if(num*8 >= total){
                    this.classList.add('active')
                }
            });
        }
    })
}
exChange();


