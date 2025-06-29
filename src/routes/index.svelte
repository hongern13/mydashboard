<script>
  import { signOut } from 'firebase/auth';
  import { auth } from '../firebase';
  import authStore from '../stores/authStore';
  import { onDestroy } from 'svelte';
  import { goto } from '$app/navigation';// Function for navigating to the home page
  import Quote from '$lib/Quote.svelte';
  import Todo from '$lib/Todo.svelte';
  import Showtodo from '$lib/Showtodo.svelte';

async function logout() {
    try {
      await signOut(auth);
      $authStore.isLoggedIn = false; //Boolean Values (true/false)
      $authStore.firebaseControlled = false; //Boolean Values (true/false)
    } catch (err) {
      console.log(err);
    }
  }

  const sub = authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
    if (!isLoggedIn && firebaseControlled) {
      await goto('/login');
    }
  });

async function navigateToHome () {
  await goto('/');
}
  
// Function for navigating to the blog page

async function navigateToBlog () {
  await goto('/blogs');
}

  onDestroy(() => {
    sub();
  });
</script>

<!-- Navigation bar -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <h1 class="navbar-brand">My Dashboard</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" on:click={navigateToHome}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" on:click={navigateToBlog}>Blogs</a>
        </li>
      </ul>
      <div class="d-flex ms-auto">
        <button class="btn btn-danger" on:click={logout}>Sign Out</button>
      </div>
    </div>
  </div>
</nav>

<div class="container-fluid mt-5">
  <div class="row">
    <div class="col-md">
      <div class="card h-100">
        <div class="card-header bg-dark text-white">
          Quote of the Day
        </div>
        <div class="card-body">
        <Quote/>
        </div>
      </div>
    </div>
    <div class="col-md">
             <div class="card h-100">
        <div class="card-header bg-dark text-white">
          To Do List
        </div>
        <div class="card-body">
          <col-md/>
          <Todo/>
          <Showtodo/>
          <col-md/>
        </div>
      </div>
    </div>
  </div>
</div>

