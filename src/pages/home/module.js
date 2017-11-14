

    import axios from 'axios';

  export default{
    
    state:{
        swiperInfo:[],
        iconSwiperInfo:[],
        recommendInfo:[]
     },


    actions: {
      getIndexInfo(context){
         axios.get('static/index.json')
               .then((res) => {
          if(res.status == 200 ){
                const {data} = res.data;
                context.commit('changeIndexInfo',data);
          }
        })
      }
    },
    
    
    
    mutations: {
      changeIndexInfo: (state,data) => {
        state.swiperInfo = data.swiperInfo;
        state.iconSwiperInfo = data.iconSwiperInfo;
        state.recommendInfo = data.recommendInfo;
       },

      refreshInfo:(state,data) => {
             state.recommendInfo.push(...state.recommendInfo);
         }
      },
      

    getters: {
      shouldGetData(state) {
        if(!state.swiperInfo.length &&
           !state.iconSwiperInfo.length ){
             return true;
           }else{
             return false;
           }
        }
     }
    
    
  }