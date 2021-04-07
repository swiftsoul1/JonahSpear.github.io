let routes = [
    /*home*/
    { path: '/', component: HomePage, name:"home"},
    //primary
    { path: '/:pageid', component: Portfolio, name:"portfolio", props: true},
];

let router = new VueRouter({
  routes: routes,
  base: '/',
  //mode: 'history'
});

let app = new Vue({
	el: '#app',
    router: router,
	data: { pages: data.pages}, 
});
	