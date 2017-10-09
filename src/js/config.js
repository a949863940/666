require.config({
    // baseUrl:
    
    // 配置短路径（别名）
    paths:{
        jquery:'../lib/jquery-3.1.1',
        xcarousel:'../lib/jquery-xCarousel/jquery.xcarousel',
        common:'../js/common'
    },

    // 配置依赖
    shim:{
        // xcarousel依赖jquery
        xcarousel:['jquery'],
        common:['jquery']
    }
});