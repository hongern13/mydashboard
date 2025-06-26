<script>
  
  import {onAuthStateChanged} from 'firebase/auth';

  import {getFirestore,collection,onSnapshot, doc,deleteDoc} from 'firebase/firestore';

  import {auth} from '../firebase';

  import {onMount} from 'svelte';

  let uid;

  let task = [];

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

        let unsubscribe = onSnapshot(collection(db,"todolist",uid,"task"),(querySnapshot)=>{

        let fbtask = [];

          querySnapshot.forEach((doc)=>{

            let item = {...doc.data(),id: doc.id}

            fbtask = [item,...fbtask];

            //fbtask.push(item);

          });

          task = fbtask;

        }); 

    }catch(error){

      console.log(error);

    }

  } 

  // Function to delete a task item from Firestore    

async function deleteToDo(id) {
    try {

// Delete the document with the specified ID from the "task" collection

      await deleteDoc(doc(db,"todolist",uid,"task",id));
    }catch(error){

// Log any errors that occur during the deletion process

      console.log(error);
    }

  }
</script>
<div class="container bg-light rounded-3 p-2 h4 w-50">

  <!-- Check if the task list is empty -->

  {#if !task}

    <!-- Display a message if no task is available -->
       <p class="text-center">No Available Data...</p>
  {:else if task}

    <!-- Iterate through each task item -->
          {#each task as entry}

<!-- Display the task item in a table format -->

              <table class="table">
                  <tr>
                      <td  style="width: 100%;">
                          <li>{entry.item}</li>
                      </td>
                    <td>

            <!-- Create a button to delete the task item -->

                      <div><button class="btn btn-danger" on:click="{()=>{deleteToDo(entry.id)}}">x</button></div>
                    </td>

                  </tr>
              </table>

          {/each}
    {:else}

    <!-- Display an error message if something went wrong during data retrieval -->

     <p>Something went wrong while fetching the data:</p>
     <pre>{error}</pre>
   {/if} 
</div>