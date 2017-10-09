require(['config'],function(){
    require(['jquery'],function(){
        $('.totop').click(function (){ $('body').animate({ scrollTop: 0 }, 100)});
        $(window).scroll(function(){
            if($(window)[0].scrollY<360){
                $('.leftSide').hide();
                $('.rightSide').hide();
            }else{
                $('.leftSide').show();
                $('.rightSide').show();
            };
        });



         //写入cookie
        var cookies = document.cookie;

        var carlist = [];
        if(cookies.length>0){
            cookies = cookies.split('; ');
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');

                if(temp[0] === 'carlist'){
                    // 把json字符串转成数组
                    carlist = JSON.parse(temp[1]);
                }
            });
        }

        console.log(carlist);



         //写入cookie带入的商品
        var write = $.map(carlist,function(item,idx){
        var sum = Number(`${item.qty}`)* Number(`${item.price}`);

            return `<li class="gooditem clearfix">
                        <div class="it_mck">
                            <input type="checkbox" />
                            <p class= 'liId' style="text-indent:-1000px">${item.id}</p>
                        </div>
                        <div class="it_img">
                            <a href="../html/details.html?id=${item.id}"><img src="../${item.imgurl}"></a>
                        </div>
                        <div class="it_name">
                            <p class="carName">
                            <a href="../html/goods.html?id=${item.id}">${item.name}</a>
                            </p>
                        </div>
                        <div class="it_size">
                        </div>
                        <div class="it_price">
                            <p class="sale_price">${item.price}</p>
                            <p class="price">${item.pianyi_price}</p>
                        </div>
                        <div>
                            <p class="it_num">
                                <span class="it_jian">-</span>
                                <input type="text" value="${item.qty}"  class="car_num"/>
                                <span class="it_jia">+</span>
                            </p>
                        </div>
                        <div class="it_total">
                            <span class="num_total">${sum}</span>
                        </div>
                        <div>
                            <p class="it_remove">删除</p>
                        </div>
                    </li>`
        }).join('');
        $('.cl_items').html(write);

    });
});