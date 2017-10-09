require(['config'],function(){
    require(['jquery','common'],function(){
        var params=window.location.search;
        var id=params.slice(4);

        $.ajax({
            url:'../api/data/goods.php',
            type:'GET',
            data:{id:id},
            success:function(res){
                var item =JSON.parse(res)[0];
                $('.big').find('img').attr({'src':'../'+item.imgurl});
                $('.bbb').find('img').attr({'src':'../'+item.imgurl});
                $('.selected').find('img').attr({'src':'../'+item.imgurl});
                $('.idName').html(item.name + item.description);
                $('.pinpai').html(item.brand);
                $('.item_price').html(item.price);
                $('.mprice').html(item.pianyi_price);



                cook(item);
            }
        })
                //大小图切换通过父级获取
            $('.small').on('click','img',function(){
                $('.big').children('img').attr('src',this.src);
            });


                var cookies = document.cookie;
                console.log(cookies)

        $('.totop').click(function (){ $('body').animate({ scrollTop: 0 }, 100)});
        $(window).scroll(function(){
            if($(window)[0].scrollY<100){
                $('.leftSide').hide();
                $('.rightSide').hide();
            }else{
                $('.leftSide').show();
                $('.rightSide').show();
            };
        });




        function cook(item){
            console.log(item);
            //cookie的写入和读取
            var carlist = [];
            var cookies = document.cookie;
            if(cookies.length>0){
                cookies = cookies.split('; ');
                cookies.forEach(function(cookie){
                    var temp = cookie.split('=');
                    if(temp[0] === 'carlist'){
                        carlist = JSON.parse(temp[1]);
                    }
                })
            }
             $('#J_cartAdd_submit').click(function(){
                var has = false;
                for(var i=0;i<carlist.length;i++){
                    // 已经存在
                    if(carlist[i].id === id){
                        carlist[i].qty++;
                        has=true;
                        break;
                    }
                }
                // 不存在
                if(!has){
                    var goods = {
                        id:item.id,
                        name:item.name,
                        price:item.price,
                        imgurl:item.imgurl,
                        pianyi_price:item.pianyi_price,
                        qty:1
                    }


                carlist.push(goods);
                }
                // 写入cookie
                var date = new Date();
                date.setDate(date.getDate()+15);
                document.cookie = 'carlist=' + JSON.stringify(carlist) + ';expires=' + date.toUTCString() +';path=/';
            });


        }







    });
})