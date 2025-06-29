<script>

  import EntryModal from '$lib/EntryModal.svelte';

  import {onAuthStateChanged,signOut} from 'firebase/auth';

  import {getFirestore,collection,onSnapshot, doc,deleteDoc} from 'firebase/firestore';

  import {auth} from '../firebase';

  import {onMount,onDestroy} from 'svelte';

  import authStore from '../stores/authStore';

  import { goto } from '$app/navigation';

  let uid;

  let blog = [];

  let error;

  let db = getFirestore();

  

  onMount(() => {

    onAuthStateChanged(auth, async (user) => {

      uid = user.uid;    

      fetchData(); 

    }); 

  });

  async function fetchData(){

    try{

        let unsubscribe = onSnapshot(collection(db,"blogEntries",uid,"blogs"),(querySnapshot)=>{

        let fbblog = [];

          querySnapshot.forEach((doc)=>{

            let item = {...doc.data(),id: doc.id}

            fbblog = [item,...fbblog];

            //fbblog.push(item);

          });

          blog = fbblog;

        }); 

    }catch(error){

      console.log(error);

    }

  } 

  

  async function deleteBlog(id) {

    try {

      await deleteDoc(doc(db,"blogEntries",uid,"blogs",id));

    }catch(error){

      console.log(error);

    }

 

    // location.reload();

  }

  

 async function logout(){

    try{ 

      await  signOut(auth);

      $authStore.isLoggedIn = false;

      $authStore.firebaseControlled = false;

   }catch(err){

     console.log(err);

   }

}

 const sub = authStore.subscribe(async ({isLoggedIn,firebaseControlled}) => {

    if (!isLoggedIn && firebaseControlled) {

      await goto('/login');

    }

  });

  onDestroy(() => {

      sub();

  });
  
  // Function to navigate to the home page
  async function navigateToHome() {
    await goto('/'); // Navigate to the home page
  }

  // Function to navigate to the blog page
  async function navigateToBlog() {
    await goto('/blogs'); // Navigate to the blog page
  }
</script>

<section class="text-center mt-5">

  <h1>Blog Page</h1>

  <input

     class="btn btn-light mb-2"

     type="button"

     value="+ New Blog"

     data-bs-toggle="modal"

     data-bs-target="#newEntry"

   />

</section>

<div class="container mt-5">

  <div class="row">

      {#if !blog}

         <p class="text-center">No Available Data...</p>

      {:else if blog}

            {#each blog as entry}

                <div class="col-md-4 mb-3">

                  <div class="card h-100">

                    <div class="card-header text-center">

                      <h4 class="card-title">{entry.title}</h4>

                      <p>

                        Written on: {entry.day}/{entry.month}/{entry.year}

                      </p>

                    </div>

                    <div class="card-body text-justify">                      

                      <p class="card-text">

                        {entry.description}

                      </p> 

                    </div>

                    <div class="card-footer text-center">

                      <a href="#!" class="btn btn-danger" on:click="{()=>{deleteBlog(entry.id)}}">Delete Blog</a>

                      <a href="{entry.link}" class="btn btn-success">Visit Site</a>

                    </div>

                  </div>

                </div>

            {/each}

      {:else}

       <p>Something went wrong while fetching the data:</p>

       <pre>{error}</pre>

       {/if} 

  </div>

</div>

<EntryModal />