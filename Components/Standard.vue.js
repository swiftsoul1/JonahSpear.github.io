let Standard = {
     props:['pages'],
    data: function(){
        var pageId = this.getPageId(this.$route.params.pageid); 
		return { 
			page: this.pages[pageId]
		}
	},
     methods:{
         getPageId(slug){
            var page = this.pages.find(page => page.slug == slug );//find match
            return this.pages.indexOf(page);//return index position
         },
         gotoExternalURL(url){
             window.open(url);
         }
    },
	template:  `
<div class="container-fluid p-3 m-0">
    <!-- title -->
    <h1 class='text-capitalize p-0 m-0' v-html='page.slug'></h1>
    <!-- resume -->
    <div class="container-fluid p-3 m-0">
        <div v-if='page.skills'>
            <h3 class='row'>◦ Skills</h3>
            <ul class='row bg-gray'>
                <li class='font-weight-light' v-for='skill in page.skills'>
                    {{skill}}
                </li>
            </ul>
        </div>
        <div v-if='page.educations'>
            <h3 class='row'>◦ Education</h3>
            <div class='col' v-for='e in page.educations'>
                <span class='font-weight-bold'> {{e.name}} </span>
                <ul>
                    <li class='font-weight-light'> {{e.degree}} </li>
                    <li class='font-weight-light'> {{e.date}} </li>
                    <li class='font-weight-light'> {{e.gpa}} </li>
                </ul>
            </div>
        </div>
        <div v-if='page.workplaces'>
            <h3 class='row'>◦ Work Experience</h3>
            <div class='col' v-for='w in page.workplaces'>
                <span class='font-weight-bold'> {{w.company}} </span><br>
                <span class='font-weight-light'> {{w.title}} </span><br>
                <span class='font-weight-light'> {{w.date}} </span>
                <ul>
                    <li class='font-weight-light' v-for='t in w.tasks'> {{t}} </li>
                </ul>
            </div>
        </div>
    </div>

</div>
`
};