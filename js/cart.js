let cart = [];

$.ajax({
    url:'./js/data.json',
    success:function(data){
        // 세션 저장된 장바구니 정보 가져오기
        let itemNm = [];
        let item = '';
        let itemSize = {};
        let size = ['m', 'l', 'xl'];

        for(let i=0; i<data.goodslist1.length; i++){
            if(sessionStorage.getItem(i)){
                $('.cart-content').removeClass('active');
                itemSize = JSON.parse(sessionStorage.getItem(i));
                    item = `<li class="product-unit">
                                <input type="checkbox" class="selectOne" name="selectOne">
                                <figure><img src="${data.goodslist1[i].thum}" alt=""></figure>
                                <div class="product-info">
                                    <p class="product-name">${data.goodslist1[i].name}</p>
                                    <p class="product-size">사이즈 : m</p>
                                    <p class="product-quantity">수량 : <span class="quantity">1</span>개</p>
                                    <p class="product-price">￦<span class="price">${data.goodslist1[i].price}</span></p>
                                </div>
                                <div class="product-unit-close">
                                    <span></span>
                                    <span></span>
                                </div>
                            </li>`;
                    itemNm.push(item);
            }
        }
        console.log(itemSize)
        $('.cart-item ul').html(itemNm);
    }
})
