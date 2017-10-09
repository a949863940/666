require(['config'],function(){
    require(['jquery'],function(){
        
        $('.register').click(function(){
            var username = $('#username').val();
            var password = $('#password').val();
            console.log(username,password)
            $.ajax({
                url:'../api/data/reg.php',
                type:'GET',
                data:{username:username,password:password},
                success:function(res){
                    console.log(res)
                    if(res==='ok'){
                       alert('你的帐号注册成功!');
                    }
                    if(res==='fail'){
                        alert('你的用户名已被注册,需要重换一个!');
                    }

                }
            });

        });

    });
});