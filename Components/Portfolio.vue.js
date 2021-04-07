let Portfolio = {
     props:['pages'],
     data: function(){
		return { 
			page: this.pages[1]
		}
		
	 },
	 template:  `
<div class="container-fluid p-2 m-2">
    <!-- title -->
    <h1 class='text-capitalize p-0 m-0' v-html='page.slug'></h1>
    <div class="p-2 m-3 row border border-dark" v-for="item in page.items">
        <div class="col-sm-5 col-md-3 p-0 m-1 border border-secondary">
            <img class="img-fluid m-0 p-3" v-bind:src="item.featured">
        </div>
        <div class="col p-0 m-1 border border-secondary">
            <div class="blockquote p-3">
                <h5 v-html="item.name"></h5>
                <p v-html="item.summary"></p>
                <a v-bind:href="item.link.ref" target="_blank">{{item.link.text}}</a>
            </div>
        </div>
    </div>
</div>
`
};