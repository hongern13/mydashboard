<script>
    import supabase from '$lib/db';

    let email;
    let password;

    async function loginUser() {
   	 const { error } = await supabase.auth.signIn({
   		 email,
   		 password
   	 });

   	 if (error) alert(error.message); // alert if error
    }
</script>

<div class="card mt-5 m-auto text-center" style="width: 24em;">
    <div class="card-body">
   	 <h5 class="card-title">Welcome Back</h5>
   	 <p class="card-text text-muted">Please log-in to continue...</p>
   	 <form class="form-floating" on:submit|preventDefault={loginUser}>
   		 <div class="mb-3">
   			 <label for="emailInput" class="form-label">Email address</label>
   			 <input bind:value={email} type="email" class="form-control" id="emailInput" />
   		 </div>
   		 <div class="mb-3">
   			 <label for="passwordInput" class="form-label">Password</label>
   			 <input
   				 bind:value={password}
   				 type="password"
   				 class="form-control"
   				 id="passwordInput"
   				 aria-describedby="passwordHelp"
   			 />
   		 </div>
   		 <div id="passwordHelp" class="form-text">
   			 Your password must be at least 6 characters long.
   		 </div>
   		 <button type="submit" class="btn btn-dark mt-3">Login</button>
   	 </form>
    </div>
</div>

<div class="text-center mt-3">
    <a href="/signup" class="text-muted">First time? Click here to register for an account.</a>
</div>