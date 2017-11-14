

<template>
    <div>
	
     <div class="mp-filter mpf-border-bottom" style="">
	   	 	 <div class="mp-select">
	   	 	 	<span class="mp-select-caption" mp-role="selectCaption">全部分类</span>
	   	 	 </div>
	   	 	 
		   	<div class="mp-select">
		   		<span class="mp-select-caption" mp-role="selectCaption">推荐排序</span>
		   	</div>
      </div>
	   	  
	   	  <div class="mp-filter mpf-border-bottom" style="">
		   	 	 <div class="mp-select">
		   	 	 	<span class="mp-select-caption" mp-role="selectCaption">全部分类</span>
		   	 	 </div>
		   	 	 
			   	<div class="mp-select">
			   		<span class="mp-select-caption" mp-role="selectCaption">人气最高</span>
			   	</div>		   	
        </div>
        
   </div>
</template>

<script>
</script>

<style>
	.mp-filter {
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    position: relative;
	  
	    height: .8rem;
	    background-color: #fff;
	    width: 100%;
	    border-bottom:1px solid #c3c4d7;
     }
   
   
   .mp-select {
	    display: block;
	    -webkit-box-flex: 1;
	    -moz-box-flex: 1;
	    -ms-flex: 1;
	    box-sizing: border-box;
	    width: 100%;
	    border-bottom: #c3c4d7;
	  }

  .mp-select-caption {
	    position: relative;
	}

  .mp-select-caption::after {
	    content: "";
	    position: absolute;
	    right: -.25rem;
	    top: .18rem;
	    width: 0;
	    height: 0;
	    margin-top: -.04rem;
	    border-left: .08rem solid transparent;
	    border-right: .08rem solid transparent;
	    border-top: .08rem solid #666;
	}

 .mp-select {
    display: block;
    width: 100%;
    height: .8rem;
    overflow: hidden;
    position: relative;
    color: #212121;
    line-height: .8rem;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    box-sizing: border-box;
     border-right: 1px solid silver;
   }	
</style>