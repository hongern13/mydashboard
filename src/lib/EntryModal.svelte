<script>

  // Import necessary functions and modules from Firebase and Svelte 

 import {auth} from '../firebase'; // Import the auth object from the ../firebase module.

 import { onMount} from 'svelte'; 

 import {onAuthStateChanged } from "firebase/auth";

 import {getFirestore,collection,addDoc} from 'firebase/firestore';

  // Get the current date

 let today = new Date();//Create a new Date object and assign it to the today variable.

 let day = today.getDate();//Get the current day from the today object and assign it to the day variable.

 let month = today.getMonth() + 1;//Get the current month from the today object and assign it to the month variable. Add 1 because months are zero-based.

 let year = today.getFullYear();

 // Declare variables for blog entry

 let title;

 let description;

 let link;

  // Insert entry

  // Define an asynchronous function writeUserData to save the user data to the database.

  async function writeUserData() {

    try {

      // Add the blog entry data to the "blogEntries" collection under the user's unique ID

      const docRef = await addDoc(collection(db, "blogEntries", uid, "blogs"), {

        title: title,

        description: description,

        link: link,

        day: day,

        month: month,

        year: year,

      });

    } catch(error) {

      // Log any errors that occur during the insertion process

      console.log(error);

    }

  }

  

 let uid;

 let db = getFirestore();//Get the Firestore instance and assign it to the db variable.

 onMount(() => {

   onAuthStateChanged(auth, async (user) => {

     uid = user.uid;    

   }); 

 });

  if(day > 31 || day < 0){
    day.disabled = true
    else{
     day.disabled = false
    }
  }
  
  if(month > 12 || month < 0){
    month.disabled = true
    else{
     month.disabled = false
    }
  }
  
</script>

<!-- This code represents a modal dialog for creating a new blog entry -->

<div class="modal fade" id="newEntry" tabindex="-1">

  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

    <div class="modal-content">

      <div class="modal-header">

        <h5 class="modal-title">New Blog</h5>

        <button

          type="button"

          class="btn-close"

          data-bs-dismiss="modal"

          aria-label="Close"

        />

      </div>

      <div class="modal-body">

         <h5>Write something....</h5>

         <div class="container">

           <div class="row mt-3 text-center">           

            <h4>

              Title

             </h4>

             <input bind:value={title} class="mb-5"/>

              <h4>

              Description

             </h4>

             <textarea bind:value={description} class="mb-5"/>

             <h4>

              Link

             </h4>

             <input bind:value={link} class="mb-5"/>

          </div>

        </div>

        <div class="row px-5">

          

        </div>

        

        <!-- Date Input -->

        <div class="row">

          <div class="col">

            <label for="dayInput">Day</label>

            <h2>
              <input type="number" id="day" bind:value={day}>
            </h2>

          </div>

          <div class="col">

            <label for="monthInput">Month</label>

            <h2>
              <input type="number" id="month" bind:value={month}>
            </h2>

          </div>

          <div class="col">

            <label for="yearInput">Year</label>

            <h2>
              <input type="year" id="year" bind:value={year}>
            </h2>

          </div>

        </div>

      </div>

      <div class="modal-footer">

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">

          Cancel

        </button>

        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" on:click="{writeUserData}">

          Save

        </button>

      </div>

    </div>

  </div>

</div>