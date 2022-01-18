let loadAft;
loadAft = function(){
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

$('header').load('incom.html header >div',loadAft);
$('footer').load('incom.html footer >div');

$(window).on('scroll', function(){
    if($('html').scrollTop() >= 30){

    }
})

// item list

let item='';
$.ajax({
    url:'./js/data.json',
    success:function(data){
        $.each(data.goodslist1, function(k, v) {
            item += `<figure>
                        <a href="#">
                            <p><img src="${v.thum}" alt="#"></p>
                            <h3>${v.name}</h3>
                            <figcaption>￦<span>${v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></figcaption>
                        </a>
                    </figure>`;
        })
        $('.list-show')
        .html(item);
    }
})
