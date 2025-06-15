<script>
  // Importing functions from modules
  import {auth} from '../firebase';
  import { onMount } from 'svelte';
  import authStore from '../stores/authStore';
  import {onAuthStateChanged } from "firebase/auth";

  // Runs when the component is mounted to the DOM
  onMount(() => {
   // Checks for changes in the authentication state
    onAuthStateChanged(auth, async (user) => {
     // Updates the authStore with the authentication state information
      authStore.set({
        isLoggedIn: user !== null, // Set whether the user is logged in or not
        user, // Set the user object (or null if not logged in)
        firebaseControlled: true,  // Set a flag indicating that authentication is managed by Firebase
      }); 
    }); 
  });
</script>

<slot />