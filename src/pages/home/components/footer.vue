

<template>
       <div>
      <div mp-role="moreInfoCon" class="mp-moreinfo">
	         <div mp-role="pageCon">
	         	 <div class="mp-pagination">
	         	    <a href="javascript:void(0);" mp-role="prevPage" class="mp-disable-btn">上一页</a>
	         	    <span class="mp-page-num" mp-role="pageNum">1</span>
	         	      <a href="http://touch.piao.qunar.com/touch/list_%E5%8C%97%E4%BA%AC_2.html?region=%E5%8C%97%E4%BA%AC&amp;keyword=%E5%8C%97%E4%BA%AC&amp;pageSize=20" mp-role="nextPage" class="">下一页</a>
	         	 </div>
	         	 <div class="mp-page-text">去哪儿门票</div>
	         </div>
	    </div>
	       <div class="piao">
	       	   <p class="piao-jia"><b>票面价</b>是指通过景区指定窗口售卖的纸质门票上标注的价格</p>
	       </div>
	       
	          <div class="types">
	          	    <ul class="types-ul">
	          	    	   <li class="types-li"><a>机票</a></li>
	          	    	   <li class="types-li"><a>酒店</a></li>
	          	    	   <li class="types-li"><a>公寓</a></li>
	          	    	   <li class="types-li left"><a>更多</a></li>
	          	    </ul>
	          </div>
	       
	         <div class="denglu">
	          	    <ul class="denglu-ul">
	          	    	   <li class="denglu-li"><a>登录</a></li>
	          	    	   <li class="denglu-li"><a>我的订单</a></li>
	          	    	   <li class="denglu-li"><a>最近浏览</a></li>
	          	    	   <li class="denglu-li left"><a>关于我们</a></li>
	          	    </ul>
	          </div>
	       
	    </div>
</template>

<script>
</script>

<style>
		/*尾部换页*/
 
    .mp-moreinfo {
	    margin: .2rem 0;
	    color: #00afc7;
	    line-height: .82rem;
	    text-align: center;
	  }

	.mp-moreinfo {
	    margin: .2rem 0;
	    color: #00afc7;
	    line-height: .82rem;
	    text-align: center;
	}

	.mp-pagination {
	    height: .7rem;
	    line-height: .7rem;
	}
	
	.mp-pagination a.mp-disable-btn {
	    background: #bdbdbd;
	    color: #fff;
	    border: 0;
	}
	
	.mp-pagination .mp-page-num {
	    color: #212121;
	    line-height: .6rem;
	    padding: 0 15px;
	}

  .mp-pagination a, .mp-pagination a:link, .mp-pagination a:visited, .mp-pagination a:hover, .mp-pagination a:active {
	    display: inline-block;
	    width: 1.4rem;
	    border: .02rem solid #00afc7;
	    background: #fff;
	    color: #00afc7;
	    line-height: .6rem;
	    border-radius: .06rem;
     }


	.mp-moreinfo .mp-page-text {
	    padding-top: .2rem;
	    line-height: .3rem;
	    font-size: .3rem;
	}
	
	  .piao-jia{
	  	font-size: .14rem;
	  	 padding: .3rem;  
	  	 white-space: nowrap;	
	  	 overflow: hidden; 
	  	 text-overflow: ellipsis;
	  	 margin-top: .2rem;
	  }
	
	  .types{
	   	 width: 100%;
	   	 text-align: center; 
	   }
	   
	   .types-li{
	   	   float: left; 
	   	   width:24% ;  
	   	   padding: .4rem 0;  
	    }
	    .types-li a{
	    	 color: darkgray;	text-decoration: underline;
	    }
	  
	   .denglu{
	   	 width: 100%;
	   	 text-align: center; 
	   }
	   
	   .denglu-li{
	   	   float: left; 
	   	   width:24% ;  
	   	   padding: .3rem 0;  
	    }
</style>