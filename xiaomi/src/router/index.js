import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: _.assignIn({
      time: new Date().getTime()
    }, query || {})
  })
}


Vue.use(Router)

export default new Router({
  routes: [
  {
  	path:'/',
  	redirect:'/home'
  },
   
    {
    	path:'/home',
    	name:'home',
    	component(resolve){
    		require(['@/views/home.vue'],resolve)
    	},
    	meta:{
    		navShow:true
    	}
    },
    {
    	path:'/classification',
    	name:'classification',
    	component(resolve){
    		require(['@/views/classification.vue'],resolve)
    	},
    	meta:{
    		navShow:true
    	}
    },
    {
    	path:'/shoopingcart',
    	name:'shoopingcart',
    	component(resolve){
    		require(['@/views/shoopingcart.vue'],resolve)
    	},
    	meta:{
    		navShow:true
    	}
    	
    },
    {
    	path:'/me',
    	name:'me',
    	component(resolve){
    		require(['@/views/me.vue'],resolve)
    	},
    	meta:{
    		navShow:true
    	}
    },
     {
    	path:'/author',
    	name:'author',
    	component(resolve){
    		require(['@/views/author.vue'],resolve)
    	},
    	meta:{
    		navShow:false
    	}
    },
   {
        path:'/details/:id',
        name:'details',
        component(resolve){
            require(['@/views/details.vue'],resolve)
        },
        meta:{
            navShow:false
        }
    }, 
   
  ]
})
