<!-- signup.svelte -->

<script>
  // Import necessary functions and modules from Firebase and Svelte
  import {createUserWithEmailAndPassword} from 'firebase/auth';
  import {auth} from '../firebase';
  import { goto } from '$app/navigation';
  import authStore from '../stores/authStore';
  import { onDestroy } from 'svelte';
  
  // Declare variables to store user's email and password
  let email;
  let password;
  
  // Function to handle the registration process when the form is submitted
  async function register(){
    try { 
      // Attempt to create a new user account with the provided email and password
      await createUserWithEmailAndPassword(auth, email, password);
    } catch(error) {
      // If an error occurs during registration, log the error to the console
      console.log(error);
    }
  }
  
  // Subscribe to the authStore to check if the user is already logged in
  const sub = authStore.subscribe(async (info) => {
      // If the user is already logged in, redirect to the login page
      if (info.isLoggedIn) {
        await goto('/login');
      }
  });
  
  // Unsubscribe from the authStore when the component is destroyed
  onDestroy(() => {
    sub();
  });
</script>

<!-- The following HTML code creates the signup form -->

<div class="card mt-5 m-auto text-center" style="width: 24em;">

    <div class="card-body">

      <h5 class="card-title">Welcome</h5>

      <p class="card-text text-muted">Please sign up to continue...</p>

      <form class="form-floating" on:submit|preventDefault={register}>

      <!-- Input field for the user's email -->

      <div class="mb-3">

          <label for="emailInput" class="form-label">Email address</label>

          <input bind:value={email} type="email" class="form-control" id="emailInput" />

      </div>

      <!-- Input field for the user's password -->

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

      <!-- Sign Up button to submit the form -->

      <button type="submit" class="btn btn-dark mt-3">Sign Up</button>

      </form>

    </div>

</div>

<!-- Link to the login page for users who already have an account -->

<div class="text-center mt-3">

    <a href="/login" class="text-muted">Already have an account? Click here to login.</a>

</div>