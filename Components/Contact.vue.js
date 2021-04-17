let Contact = {
     props:['pages'],
     data: function(){
		return { 
			page: this.pages[2]
		}
	 },
    methods:{
        sendEmail: function (event){
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let reason = document.getElementById("reason").value;
            window.open('mailto:jonah.spear1@gmail.com?subject='+email+'&body='+reason+ '\n '+ name);
        }
    },
	 template:  `
<div class="container p-2 m-2">
    <!-- title -->
    <h1 class='text-capitalize p-0 m-0' v-html='page.slug'></h1>
    <div>
        <p class='h5'> To contact me directly call: (505)398-0960</p>
    </div>
    <!-- form -->
    <div>
        <p class='h5'>Or send me a email</p>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter name">
            </div>
            <div class="form-group col-md-6">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
            </div>
        </div>
        <div class="form-group">
            <label for="reason">Please enter your reason for contacting</label>
            <textarea type="text" class="form-control" rows="3" id="reason"></textarea>
        </div>
        <button v-on:click="sendEmail" type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>
`
};