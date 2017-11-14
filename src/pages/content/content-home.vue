

<template>
        <div id="app">   
	        <view-router/>
	   	    <content-header/>
	   	    <content-list/>
	   	    <content-gugonglist/>
	   	    <content-footer/>
	   </div>
</template>

<script>
	  import ContentHeader from './content-header'
	  import ContentList from './content-list'
	  import ContentGuGongList from './content-gugonglist'
	  import ContentFooter from '../home/components/footer'
	  
	   export default{
	   	    components:{
	   	    	   "content-header":ContentHeader,
	   	    	   "content-list":ContentList,
	   	    	   "content-gugonglist":ContentGuGongList,
	   	    	   "content-footer":ContentFooter
	   	    }
	   }
	  
</script>

<style>
</style>