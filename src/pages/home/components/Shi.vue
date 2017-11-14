<template>
	<swiper :options="swiperOption" ref="mySwiper">
    	<swiper-slide>
    		<div class="swiper-img-con">
    			<router-link to="/list">
    			<ul>
    				
    				<li v-for="(item1,index) in iconSwiperInfo" :key='item1.id' v-if="index<=7">
    					<router-link :to='item1.link' to="/list">
							<img :src="item1.imgUrl" class="img-con">
						</router-link>
    					<p class="contents">{{item1.describe}}</p>
    				</li>
    				
    			</ul>
    			</router-link>
    		</div>
    	</swiper-slide>
    	
   		<swiper-slide>
   			
   			<div class="swiper-img-con">
   				<ul>
   					<router-link to="/list">
    				<li v-for="(item1,index) in iconSwiperInfo" :key='item1.id' v-if="index>7">
    					<img :src="item1.imgUrl" class="img-con">
    					<p class="contents">{{item1.describe}}</p>
    				</li>
    				</router-link>
    			</ul>	
   			</div>
   			
   		</swiper-slide>
   		
    	<div class="swiper-pagination"  slot="pagination"></div>
    	
	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

  	export default {
    	data() {
			return {
				swiperOption: {
          			direction: 'horizontal',
         			autoHeight: true,
          			pagination: '.swiper-pagination',
        			observeParents: true,
        		}
      		} 
    	},
    	components: {
      		swiper,
    		swiperSlide
		},
		computed: {
			iconSwiperInfo() {
				return this.$store.state.home.iconSwiperInfo;
			}
		}
	}
</script>

<style>
</style>

<style scoped>
	.swiper-img-con {
		/*让高度自动变为宽度的31.25%,只能用padding实现*/
		overflow: hidden;
		width: 100%;
		height: 1.5rem;
		padding-bottom: 31.25%;
		border-bottom: 1px solid #F1F1F1;
	}
	.swiper-img-con ul li{
		width: 25%;
		height: 1.3rem;
		float: left;
		text-align: center;
		padding-top: 0.3rem;
	}
	
	.img-con{
		width: 0.66rem;
		height: 0.66rem;
		margin-bottom:0.2rem
		
	}
	
	.contents{
		margin-left: 0.2rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>