<template>
	<div>
		
 		<index-header/>
 		<router-link to="/list">
		 		<index-swiper />
		 		<index-icon-content/>
		 		<index-activity/>
		 		<index-hotsale/>
		 		<index-weekend />
		 		<index-footer/>
 		</router-link>
 	</div>
</template>

<script>

import HeaderComponent from "./components/Header";
 import SwiperComponent from "./components/Swiper";
import ShiserComponent from "./components/Shi";
import ListitemComponent from './components/Listitem';
import MpXwkcotaintList from "./components/Xwklist";
import weekList from './components/weekList';
import Footer from './components/footer';


export default {
	components: {
		"index-header": HeaderComponent,
		"index-swiper": SwiperComponent,
		"index-icon-content":ShiserComponent,
		'index-activity' : ListitemComponent,
		"index-hotsale":MpXwkcotaintList,
		"index-weekend": weekList,
		"index-footer":Footer
	},
	
	mounted(){
		if(this.$store.getters.shouldGetData){
			this.$store.dispatch('getIndexInfo');
		}
	}
	
}
</script>


<style>
</style>
