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

let Bn1 = '',Bn2 = '', num=0, lengthBn1, interval;
$.ajax({
    url:'./js/data.json',
    success:function(data){
        // 첫번째 베너
        lengthBn1=data.mainBn1.length;
        $.each(data.mainBn1,function(k, v){
            Bn1 += `<a href="#" style="background: url("${v.src}")">
                        <img src="${v.src}" alt="#"/>
                    </a>`;
        });
        $('.s1-img')
        .html(Bn1)
        .css({
            'width':`${lengthBn1*100}%`
        });
        $('.s1-img a')        
        .css({
            'width':`${100/lengthBn1}%`
        });
        $('.s1-nav span').eq(3).text(`0${lengthBn1}`);
        let clearInterval = function(){
            clearInterval(interval);
        };
        interval = setInterval(function(){
            clearInterval;
            $('.s1-img a').eq(num).fadeOut(500);
            num++;
            $('.s1-nav span').eq(0).text(`0${num+1}`);
            $('.s1-nav span span').css({
                'width':`${(num+1)*34}%`
            });
            if(num==lengthBn1)
            num=0;
            $('.s1-img a').eq(num).fadeIn(500);
            $('.s1-nav span').eq(0).text(`0${num+1}`);
            $('.s1-nav span span').css({
                'width':`${(num+1)*34}%`
            });
        }, 5000);

        // interval = setInterval(function(){
        //     $('.s1-img a').eq(num).fadeOut(500);
        //     num++;
        //     $('.s1-nav span').eq(0).text(`0${num+1}`);
        //     $('.s1-nav span span').css({
        //         'width':`${(num+1)*33.3}%`
        //     });
        //     if(num==lengthBn1)
        //     num=0;
        //     $('.s1-img a').eq(num).fadeIn(500);
        //     $('.s1-nav span').eq(0).text(`0${num+1}`);
        //     $('.s1-nav span span').css({
        //         'width':`${(num+1)*33.6}%`
        //     });
        // }, 5000);
        
        //두번째 베너 
        $.each(data.mainBn2,function(k, v){
            Bn2 += `<p><img src="${v.src}" alt="#"/></p>`;
        })
        $('.s2-img')
        .html(Bn2)
        .on('click',function(){
            $(this).toggleClass('active');
            $('.s2-nav span').toggleClass('active');
        });


    }
});

