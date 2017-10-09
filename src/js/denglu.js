require(['config'],function(){
    require(['jquery'],function(){
        $('.register').click(function(){
            var username=$('#username').val();
            var password=$('#password').val();
            $.ajax({
                url:'../api/data/login.php',
                type:'GET',
                data:{username:username,password:password},
                success:function(res){
                    if(res==='ok'){
                        alert('登录成功')
                    }
                    if(res==='fail'){
                        alert('帐号密码不匹配')
                    }
                }
            })
        })
    })
})