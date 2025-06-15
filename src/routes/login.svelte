<!-- login.svelte -->

<script> 
  // Import necessary functions and modules from Firebase and Svelte
  import {signInWithEmailAndPassword} from 'firebase/auth';
  import {auth} from '../firebase';
  import { goto } from '$app/navigation';
  import { onDestroy } from 'svelte';
  import authStore from '../stores/authStore';

  // Declare variables to store user's email and password
  let email;
  let password;

  // Function to handle the login process when the form is submitted
  async function login(){
    try { 
      // Attempt to log in the user using the provided email and password
      await signInWithEmailAndPassword(auth, email, password);
    } catch(error) {
      // If an error occurs during login, log the error to the console
      console.log(error);
    }
  }

  // Subscribe to the authStore to check if the user is already logged in
  const sub = authStore.subscribe(async (info) => {
    // If the user is logged in, redirect to the home page
    if (info.isLoggedIn) {
      await goto('/');
    }
  });

  // Unsubscribe from the authStore when the component is destroyed
  onDestroy(() => {
    sub();
  });
</script>

<!-- The following HTML code creates the login form -->

<div class="card mt-5 m-auto text-center" style="width: 24em;">
    <div class="card-body">
      <h5 class="card-title">Welcome Back</h5>
      <p class="card-text text-muted">Please log-in to continue...</p>
      <form class="form-floating" on:submit|preventDefault={login}>
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
        <!-- Login button to submit the form -->
        <button type="submit" class="btn btn-dark mt-3">Login</button>
      </form>
    </div>
</div>

<!-- Link to the registration page for new users -->
<div class="text-center mt-3">
    <a href="/signup" class="text-muted">First time? Click here to register for an account.</a>
</div>