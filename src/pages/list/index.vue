

<template>
     <div id="app">   
	        <view-router/>
	   	    <list-header/> 	
	        <list-type/>
	        <list-item/>
	        <list-footer/>
	   </div>
</template>

<script>
	
     import  ListHeader from './Header';
     import ListType from "./list-type";
     import ListItem from "./list-item";
     import ListFooter from "./list-footer";
    
    
     export default{
     	    components:{
     	    	  "list-header":ListHeader,
      	          "list-type":ListType,
      	          "list-item":ListItem,
      	          "list-footer":ListFooter
     	    },
     	    
     	    
     	     data(){
	    	   	  return{
	    	   	    show:true,
	    	   	    letterArr:[],
	    	   	    chooseletter:''
	    	   	  }
      	   },
      	   
      	   
      	    methods:{
      	   	    handleChangeShow:function(e){  // 传入哪个参数，让哪个参数显示
      	   	   	    this.show = e.show;
      	   	     },
      	   	   
      	   	    handleLetterShow:function(e){
      	   	   	    this.letterArr=e;
      	   	    },
      	   	   
      	   	   handleThisLetter:function(e){   // 选择哪个就在文档显示哪个
      	   	   	   this.chooseletter = e.chooseletter;
      	   	   }
      	   }
      	   
     	    
     }
     
</script>

<style>
</style>