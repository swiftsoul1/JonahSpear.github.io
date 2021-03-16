let HomePage = {
    props:['pages'],
    data: function(){
		return { 
			page: this.pages[0]
		}
		
	},
	template:  `
<div class="container-fluid p-0 m-0">
    <p>HomePage</p>
</div>
`
};