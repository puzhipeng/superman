

<template>
      <div>
        <h3 class="mp-ticket-type mp-border-bottom">去哪儿推荐</h3>
        
        <div class="where-box">
            <div class="am-left">
            	 <h5 class="tishi">【上午场】故宫成人票凭身份证入园</h5>
            	 <ul>
            	 	 <li class="keding"><span>可定明日</span></li>
            	 	 <li class="keding"><span>条件退</span></li>
            	 </ul>
            </div>
            <div class="am-right">
            	  <p class="am-right-p">￥40</p>
            	  <h3 class="yuding">预定</h3>
            </div>
        </div>
        
        <div class="where-box">
            <div class="am-left">
            	 <h5 class="tishi">【上午场】故宫成人票+故宫全景手绘地图</h5>
            	 <ul>
            	 	 <li class="keding"><span>可定明日</span></li>
            	 	 <li class="keding"><span>条件退</span></li>
            	 </ul>
            </div>
            <div class="am-right">
            	  <p class="am-right-p">￥50</p>
            	  <h3 class="yuding">预定</h3>
            </div>
        </div>
     
          <div class="where-box">
            <div class="am-left">
            	 <h5 class="tishi">【5大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游</h5>
            	 <ul>
            	 	 <li class="keding"><span>可定明日</span></li>
            	 	 <li class="keding"><span>条件退</span></li>
            	 </ul>
            </div>
            <div class="am-right">
            	  <p class="am-right-p">￥158起</p>
            	  <h3 class="yuding">预定</h3>
            </div>
        </div>
     
     </div>
</template>

<script>
</script>

<style scoped>
	.mp-ticket-type {
	    overflow: hidden;
	    position: relative;
	    z-index: 4;
	    margin-bottom: -.02rem;
	    padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .32rem;
	    line-height: .88rem;
	    text-indent: .4rem;
	}
	
	.where-box{
		height: 1.6rem;
		width: 100%;
		border-top: 2px solid gainsboro;
		background: ghostwhite;
	}
	.am-left{
		height: 1.6rem;
		width: 68%;
		float: left;
		border-right: 1px solid gainsboro;
	}
	.am-right{
		height: 1.6rem;
		width: 30%;
		float:right;
		text-align: center;
		
	}
	.tishi{
		 padding:.3rem ;
		 font-size: .28rem;
	}
	.keding{
		 float: left;
		 padding-left:.3rem ;
		 font-size: .22rem;
	  }
	  
	 .am-right-p{
	   margin-top: .3rem;  	
	   color: red;
	   font-size: .22rem;
	  }
	.yuding{
		display: inline-block;
		padding:.2rem .6rem ;
		background:orange;
		border-radius: .1rem;
	}
</style>