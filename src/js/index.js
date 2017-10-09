require(['config'],function(){
    require(['jquery','common','xcarousel'],function(){
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
        //轮播图
        $('.box').xCarousel({
            imgs:['../img/lb1.jpg','../img/lb2.jpg','../img/lb3.jpg','../img/lb4.jpg'],
            index:1,
            type:'fade'
        })
         //ajax请求数据
        $.ajax({
            url: '../api/data/goodslist.php',
            type: 'GET',
            success:function(res){

                var data = JSON.parse(res);
                console.log(data);

                 var html = $.map(data,function(item,idx){


                    return `<li class="disSingle">
                                <a href="../html/details.html?id=${item.id}"><img src="../${item.imgurl}"></a>
                                <div class="titles">
                                    <span>${item.quantify}</span>
                                    <a href = "#" >${item.name}</a>
                                    <p>
                                    <span><strong>${item.sale_price}</strong></span>
                                        <span><del>${item.price}</del></span>
                                    </p>
                                    <button>立即购买</button>
                                </div>
                            </li>`
                }).join('');
            }
        });

    });
});