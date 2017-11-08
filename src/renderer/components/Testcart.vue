<script>
  export default {
    name:'goodList',
    data(){
      return{
        goodsInfo:[{
          name:'iPhone 8',
          price:'￥5888',
          description:'Apple iPhone 8 (A1863) 64GB 银色 移动联通电信4G手机',
          imgSrc:'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
          comments:['便宜好用'],
          source:'京东Apple产品专营店',
          market:'自营'
        },{
          name:'iPhone 8',
          price:'￥5888',
          description:'Apple iPhone 8 (A1863) 64GB 灰色 移动联通电信4G手机',
          imgSrc:'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
          comments:['快递很快'],
          source:'京东Apple产品专营店',
          market:'自营'
        },{
          name:'iPhone 8',
          price:'￥5888',
          description:'Apple iPhone 8 (A1863) 64GB 金色 移动联通电信4G手机',
          imgSrc:'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
          comments:['手机垃圾'],
          source:'京东Apple产品专营店',
          market:'自营'
        },{
          name:'iPhone 8',
          price:'￥5888',
          description:'Apple iPhone 8 (A1863) 64GB 玫瑰色 移动联通电信4G手机',
          imgSrc:'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png',
          comments:[],
          source:'京东Apple产品专营店',
          market:'自营'
        }]
      }
    },
    computed: {
      cart () {
        return this.$store.getters.cart
      }
    },
    methods:{
      gotoIndex:function () {
        this.$router.push('/home')
      }
    }
  }
</script>
<template>
    <div class="container" @click="gotoIndex()">
        <div class="row" id="list-container">
            <div class="col-md-2 col-md-offset-1 col-xs-10 col-xs-offset-3"  v-for="goodInfo in goodsInfo">
                <img v-bind:src="goodInfo.imgSrc" alt="iphone8" class="img-responsive" width="200">
                <div class="goodInfo">
                    <p><span class="red">{{goodInfo.name}}</span></p>
                    <p class="description">{{goodInfo.description}}</p>
                    <p class="comments">评价: <span>{{goodInfo.comments.length}}</span></p>
                    <p class="source">{{goodInfo.source}} <i class="glyphicon glyphicon-registration-mark"></i></p>
                    <p class="market"><i class="red">{{goodInfo.market}}</i></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .container{
        margin-left: 0;
    }
    img{
        margin: 0;
    }
    @media screen and (min-width:1000px){
        #list-container{
            width: 1440px;
        }
    }

    #list-container>div{
        width: 220px;
        height: 425px;
        padding:0;
    }
    #list-container>div:hover{
        box-shadow: 0 0 10px #999;
        cursor: pointer;
    }
    .goodInfo{
        padding: 0 10px;
    }
    .red{
        color: #e4393c;
        font-weight: bold;
        font-size:14px;
    }
    .description{
        font-size:12px;
    }
</style>