import Vue from 'vue'
import Router from 'vue-router'


Router.prototype.openPage = function (link,query){
	this.push({
		path:link,
		// query:_.assignIn({
		// 	time:new Data().getTime()
		// },query || {})
	})
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/NewSongs'
      
    },
     {
      path: '/NewSongs',
      name: 'NewSongs',
      component(resolve){
      	require(['@/views/NewSongs/NewSongs.vue'],resolve)
      },
      
       meta:{
        navIsShow:true
      },
    },
     {
      path: '/Plist',
      name: 'Plist',
      component(resolve){
      	require(['@/views/Plist/Plist.vue'],resolve)
      },
       meta:{
        navIsShow:true
      }
    },
     {
      path: '/plist/info/:id',
      name: 'PlistInfo',
      component(resolve){
        require(['@/views/Plist/PlistInfo.vue'],resolve)
      },
       meta:{
        navIsShow:false
      }
    },
    {
      path: '/Rank',
      name: 'Rank',
      component(resolve){
      	require(['@/views/Rank/Rank.vue'],resolve)
      },
       meta:{
        navIsShow:true
      }
    },
     {
      path: '/rank/info/:id',
      name: 'RankInfo',
      component(resolve){
        require(['@/views/Rank/RankInfo.vue'],resolve)
      },
       meta:{
        navIsShow:false
      }
    },
     {
      path: '/Singer',
      name: 'Singer',
      component(resolve){
      	require(['@/views/Singer/Singer.vue'],resolve)
      },
       meta:{
        navIsShow:true
      }
    },
    {
      path: '/singer/list/:id',
      name: 'SingerList',
      component(resolve){
        require(['@/views/Singer/SingerList.vue'],resolve)
      },
      meta:{
        navIsShow:false
      }
    },
     {
      path: '/Search',
      name: 'Search',
      component(resolve){
      	require(['@/views/Search/Search.vue'],resolve)
      }
    },

  ]
})
