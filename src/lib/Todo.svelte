<script>  
  import {auth} from '../firebase'; // Importing the 'auth' object from the 'firebase' module
  import { onMount} from 'svelte'; // Importing the 'auth' object from the 'firebase' module
  import {onAuthStateChanged } from "firebase/auth"; // Importing the 'onAuthStateChanged' function from the 'firebase/auth' module
  import {getFirestore,collection,addDoc} from 'firebase/firestore'; // Importing functions from the 'firebase/firestore' module
  let item ="";
  let uid; //uid variable will store the user ID of the currently logged-in user
  let db = getFirestore(); // Creating a Firestore instance

 // Function that runs when the component is mounted 

  onMount(() => {
    onAuthStateChanged(auth, async (user) => {
      uid = user.uid;  // Storing the user ID
    });
  });

// Function to save the to-do list item to the database

  async function saveEntry() {
    try{
      const docRef = await addDoc(collection(db,"todolist",uid,"task"),{
        item:item,
      });
    }catch(error){
      console.log(error);
    }
  }
  
    // Function to check if the to-do list item is empty or not

  function checkEntry() {
      if (item === "") {
        alert("Please Enter Activity");
      } else {
        saveEntry();
      }
    }
</script>
<section class="text-center">
<h1>Welcome!</h1>
<p>Write your to do list.</p>
<div class="container text-center">
<input bind:value="{item}" type="text" class="form-control m-3" /><!-- Input field for entering the to-do list item -->
<button type="button" class="btn btn-primary mb-3" on:click="{checkEntry}">
    Add
</button>
</div>
</section>