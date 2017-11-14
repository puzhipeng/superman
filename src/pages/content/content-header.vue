

<template>
    <div>				 	
   	      <div class="mp-headfigure">
		
				 <router-link to="/list">
				       <a class="header-left iconfont icon-fanhui"></a>
				 </router-link>
			 
				<div class="mp-headfigure-wrap" id="imgcontainer">
					<img class="mp-headfigure-img" src="../../assets/img/home/xwk_list3.jpg" alt="故宫">
				</div>
			
				<div class="mp-headfeagure-info">
						<div class="mp-headfeagure-title">
							故宫(AAAAA景区)
						</div>
						<div class="mp-imgswipeicon">
							<span class="mp-iconfont mp-imgswipeicon-icon"></span>
							<em class="mp-imgswipeicon-number">10</em>
						</div>
				</div>	
	     </div>
	
	   <!-- 详细地址-->
	    <div class="mp-baseinfo">
	   	
		   	 <div class="mp-baseinfo-address" id="card-adress">
		   	 	 <p class="mp-baseinfo-address-txt">
		   	 	 	<span class="mp-iconfont mp-baseinfo-address-icon">
		   	 	 	  </span>北京市东城区景山前街4号<span class="mp-iconfont mp-baseinfo-address-arrow">F</span>
		   	 	 </p>
		   	 </div>
		   	 
		   	 <a class="mp-baseinfo-intro mp-border-top" href="http://touch.piao.qunar.com/touch/sight/introduction.htm?sightId=989946426">
		   	 	<p class="mp-baseinfo-intro-txt">
		   	 		<span class="mp-iconfont mp-baseinfo-intro-icon"></span>
		   	 		    查看景点简介及开放时间  
		   	 	    <span class="mp-iconfont mp-baseinfo-address-arrow">F</span>
		   	 	</p>
		   	 </a>
	   	 
	    </div>
	   
	     
	     <!--评论-->
	     <div class="mp-commentsinfo-con">
	     	<span class="mp-comment-icon"></span>
	     	<span class="mpf-starlevel">
	     		<i class="mp-iconfont mpf-starlevel-gain" style="width:100.0%">BBBBB</i>
	     		<i class="mp-iconfont mpf-starlevel-total">BBBBB</i>
	     	</span>
	     	<span class="mp-comments-tagscore">5.0分</span>
	     	<a class="mp-comments-total" mp-role="commentLink" href="http://touch.piao.qunar.com/touch/sight/comment.htm?sightId=989946426&amp;cat=from_area%3Dts_hot_recommend_more%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC">
	     		<span class="mp-comments-totalnum">
	     			  142729评论&nbsp;
	     			<span class="mp-iconfont mp-comments-rightarrow">F</span>
	     		</span>
	     	</a>
	     </div>
	   
	   
	      <!--重要活动-->
	      
	      <div class="mp-announce-con" id="mp-announce-con">
	      	<div class="mp-announce-inner">
	      		 <span class="mp-iconfont mp-announce-icon"></span>
	      	             因重要活动需要，故宫博物院11月8日（周三）临时闭馆一天，11月9日（周四）正常开放。敬请谅解。因重要活动需要，故宫博物院11月8日（周三）临时闭馆一天，11月9日（周四）正常开放。敬请谅解。
	            <span class="mp-iconfont mp-announce-closeicon">F</span>
	      	</div>
	      </div>
	         
    </div>
</template>

<script>
</script>

<style>
	  body{
		 background: #E0E1E1;
	    }
	
	.header-left {
		position: absolute;
		top: 0;
		z-index: 8;
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	 }
	
		.mp-headfigure{
		    position: relative;
		 }
	
	    #imgcontainer{
	    	 width: 100%;
	    	 height: 0;
	    	 padding-bottom: 55%;
	    	 overflow: hidden;
	    }
	
	   /*.mp-headfigure-wrap{
		    overflow: hidden;
		    height: 0;
		    width: 100%;
		    padding-bottom: 55%;
		}*/
		
      .mp-headfigure-img{
      	  width: 100%;
      	  border: 0;
      	  vertical-align: top;
        }
		

	.mp-headfeagure-info {
	    position: absolute;
	    right: .2rem;
	    bottom: .26rem;
	    left: .2rem;
	    min-height: .4rem;
	}

	.mp-headfeagure-title {
	    position: relative;
	    z-index: 1;
	    margin-right: 1.4rem;
	    line-height: .4rem;
	    color: #fff;
	    font-size: .32rem;
	    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
	 }

	.mp-imgswipeicon {
	    position: absolute;
	    right: 0;
	    top: 0;
	}


  .mp-imgswipeicon {
	    width: 1.2rem;
	    height: .4rem;
	    background: rgba(0,0,0,.5);
	    border-radius: .2rem;
	    font-size: .24rem;
	    color: #fff;
	    line-height: .4rem;
	    text-align: center;
  }

   .mp-imgswipeicon-icon {
    position: relative;
    top: .02rem;
  }

   .mp-imgswipeicon-number {
      margin-left: .1rem;
    }
  
  
  .mp-baseinfo {
    position: relative;
    top: -.1rem;
    padding: .1rem .2rem 0 .2rem;
    margin-bottom: .1rem;
    background: #fff;
    -webkit-border-radius: .1rem .1rem 0 0;
    -moz-border-radius: .1rem .1rem 0 0;
    border-radius: .1rem .1rem 0 0;
  }

   .mp-baseinfo-address, .mp-baseinfo-intro {
	    display: block;
	    position: relative;
	    height: .88rem;
	    color: #212121;
	    line-height: .88rem;
     }

     .mp-baseinfo-address-txt{
    	 border-bottom: 1px solid gainsboro;
       }
       
	  .mp-baseinfo-address-txt, .mp-baseinfo-intro-txt {
		    overflow: hidden;
		    padding-right: .56rem;
		    white-space: nowrap;
		    text-overflow: ellipsis;
	    }

     .address-icon, .mp-baseinfo-intro-icon {
	    margin-right: .2rem;
	    color: #9e9e9e;
	  }

     .mp-iconfont {
	    font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
     }

   .mp-baseinfo-address-arrow, .mp-baseinfo-address-arrow {
		    position: absolute;
		    right: 0;
		    top: .28rem;
		    color: #b9b9b9;
		}

   .mp-iconfont {
	    font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	}
  
	 .mp-baseinfo-intro {
	    display: block;
	    position: relative;
	    height: .88rem;
	    color: #212121;
	    line-height: .88rem;
	  }
	
	
   .mp-baseinfo-intro-txt {
	    overflow: hidden;
	    padding-right: .56rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	
    .mp-baseinfo-intro-icon {
	    position: relative;
	    top: .02rem;
	}
	
     .mp-baseinfo-address-arrow, .mp-baseinfo-address-arrow {
		    position: absolute;
		    right: 0;
		    top: .28rem;
		    color: #b9b9b9;
		}


   /*详细地址*/
  
  	.mp-commentsinfo-con {
	    margin-bottom: .2rem;
	    background-color: #fff;
	    height: .8rem;
	    line-height: .8rem;
	}
	
	.mp-comment-icon {
		    position: relative;
		    top: .08rem;
		    display: inline-block;
		    width: .36rem;
		    height: .36rem;
		    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.35rem no-repeat;
		    margin-left: .2rem;
		    margin-right: .1rem;
		    background-size: .4rem 3rem;
		}

		.mp-commentsinfo-con .mpf-starlevel {
		    top: .04rem;
		}

	.mpf-starlevel {
	    display: inline-block;
	    position: relative;
	    width: 1.4rem;
	    height: .28rem;
	}

	.mpf-starlevel-gain {
	    z-index: 2;
	    color: #00bcd4;
	}

	.mpf-starlevel-gain, .mpf-starlevel-total {
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    left: 0;
	}

	.mp-iconfont {
	    font-family: 'mpiconfont';
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    -webkit-font-smoothing: antialiased;
	}

    .mp-comments-tagscore {
		    display: inline-block;
		    margin-left: .1rem;
		    color: #00afc7;
		}

	.mp-comments-total {
	    float: right;
	    display: block;
	    margin-bottom: .2rem;
	}
	
	.mp-comments-totalnum {
	    display: inline-block;
	    line-height: .28rem;
	    font-size: .28rem;
	    margin-left: .16rem;
	    margin-right: .2rem;
	    color: #9e9e9e;
	}


   /*重要通知*/
  .mp-announce-con {
	    background-color: #fdeede;
	    color: #f1441a;
	    margin-bottom: .2rem;
	    height: .88rem;
	    line-height: .88rem;
	    padding-left: .23rem;
	}

		.mp-announce-inner {
		    padding-right: .6rem;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    position: relative;
		}
		
		.mp-announce-icon {
		    color: #f67353;
		    margin-right: .1rem;
		}
		
		.mp-iconfont {
		    font-family: 'mpiconfont';
		    speak: none;
		    font-style: normal;
		    font-weight: normal;
		    font-variant: normal;
		    text-transform: none;
		    line-height: 1;
		    -webkit-font-smoothing: antialiased;
		   
		}
		
		.mp-announce-closeicon {
		    right: .2rem;
		    position: absolute;
		    top: .3rem;
		    color: #c7bcaf;
		}
		
		.mp-iconfont {
		    font-family: 'mpiconfont';
		    speak: none;
		    font-style: normal;
		    font-weight: normal;
		    font-variant: normal;
		    text-transform: none;
		    line-height: 1;
		    -webkit-font-smoothing: antialiased;
		}
</style>