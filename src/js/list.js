require(['config'],function(){
    require(['jquery','xcarousel','common'],function(){
        $('.box').xCarousel({
            imgs:['../img/lb1.jpg','../img/lb2.jpg','../img/lb3.jpg','../img/lb4.jpg'],
            index:1,
            type:'fade'
        })

        $.ajax({
            url:'../api/data/goodslist.php',
            type:'GET',
            success:function(res){
                var liebiao=JSON.parse(res);
                console.log(liebiao)
                var html=$.map(liebiao,function(item,idx){
                        return `<li class="znkItem">
                        <a href="../html/details.html?id=${item.id}"><img src="../${item.imgurl}"></a>
                        <p class="znkPrice"><span class="span1">￥${item.price}</span><span class="span2">￥${item.pianyi_price}</span></p>
                        <p class="znkDes">${item.description}</p>
                        </li>`
                }).join('');
                $('.znKlist').html(html);
            }
        })
    })
})