import { c as create_ssr_component, a as add_attribute, s as subscribe, o as onDestroy, b as each, e as escape, v as validate_component } from "./app-6b13d4b4.js";
import "./firebase-54d5ee67.js";
import { U as Ua } from "./index.esm2017-14122f54.js";
import { a as authStore, g as goto } from "./navigation-f207e3bc.js";
import "stream";
import "http";
import "url";
import "punycode";
import "https";
import "zlib";
const EntryModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dayDisabled;
  let monthDisabled;
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let title;
  let link;
  Ua();
  dayDisabled = day > 31 || day < 1;
  monthDisabled = month > 12 || month < 1;
  return `

<div class="${"modal fade"}" id="${"newEntry"}" tabindex="${"-1"}"><div class="${"modal-dialog modal-dialog-centered modal-dialog-scrollable"}"><div class="${"modal-content"}"><div class="${"modal-header"}"><h5 class="${"modal-title"}">New Blog</h5>

        <button type="${"button"}" class="${"btn-close"}" data-bs-dismiss="${"modal"}" aria-label="${"Close"}"></button></div>

      <div class="${"modal-body"}"><h5>Write something....</h5>

         <div class="${"container"}"><div class="${"row mt-3 text-center"}"><h4>Title

             </h4>

             <input class="${"mb-5"}"${add_attribute("value", title, 0)}>

              <h4>Description

             </h4>

             <textarea class="${"mb-5"}">${""}</textarea>

             <h4>Link

             </h4>

             <input class="${"mb-5"}"${add_attribute("value", link, 0)}></div></div>

        <div class="${"row px-5"}"></div>

        

        

        <div class="${"row"}"><div class="${"col"}"><label for="${"dayInput"}">Day</label>

            <h2><input type="${"number"}" id="${"day"}" ${dayDisabled ? "disabled" : ""}${add_attribute("value", day, 0)}></h2></div>

          <div class="${"col"}"><label for="${"monthInput"}">Month</label>

            <h2><input type="${"number"}" id="${"month"}" ${monthDisabled ? "disabled" : ""}${add_attribute("value", month, 0)}></h2></div>

          <div class="${"col"}"><label for="${"yearInput"}">Year</label>

            <h2><input type="${"year"}" id="${"year"}"${add_attribute("value", year, 0)}></h2></div></div></div>

      <div class="${"modal-footer"}"><button type="${"button"}" class="${"btn btn-secondary"}" data-bs-dismiss="${"modal"}">Cancel

        </button>

        <button type="${"button"}" class="${"btn btn-primary"}" data-bs-dismiss="${"modal"}">Save

        </button></div></div></div></div>`;
});
const Blogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  let blog = [];
  let error;
  Ua();
  const sub = authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
    if (!isLoggedIn && firebaseControlled) {
      await goto("/login");
    }
  });
  onDestroy(() => {
    sub();
  });
  $$unsubscribe_authStore();
  return `<nav class="${"navbar navbar-expand-lg navbar-dark bg-dark"}"><div class="${"container-fluid"}"><h1 class="${"navbar-brand"}">My Dashboard</h1>
    <button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
    <div class="${"collapse navbar-collapse"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav mr-auto"}"><li class="${"nav-item"}"><a class="${"nav-link"}">Home</a></li>
        <li class="${"nav-item"}"><a class="${"nav-link"}">Blogs</a></li></ul>
      <div class="${"d-flex ms-auto"}"><button class="${"btn btn-danger"}">Sign Out</button></div></div></div></nav>


<section class="${"text-center mt-5"}"><h1>Blog Page</h1>
  <input class="${"btn btn-light mb-2"}" type="${"button"}" value="${"+ New Blog"}" data-bs-toggle="${"modal"}" data-bs-target="${"#newEntry"}"></section>


<div class="${"container mt-5"}"><div class="${"row"}">${!blog ? `<p class="${"text-center"}">No Available Data...</p>` : `${blog ? `${each(blog, (entry) => `<div class="${"col-md-4 mb-3"}"><div class="${"card h-100"}"><div class="${"card-header text-center"}"><h4 class="${"card-title"}">${escape(entry.title)}</h4>
                      <p>Written on: ${escape(entry.day)}/${escape(entry.month)}/${escape(entry.year)}
                      </p></div>
                    <div class="${"card-body text-justify"}"><p class="${"card-text"}">${escape(entry.description)}
                      </p></div>
                    <div class="${"card-footer text-center"}"><a href="${"#!"}" class="${"btn btn-danger"}">Delete Blog</a>
                      <a${add_attribute("href", entry.link, 0)} class="${"btn btn-success"}">Visit Site</a>
                    </div></div>
                </div>`)}` : `<p>Something went wrong while fetching the data:</p>
       <pre>${escape(error)}</pre>`}`}</div></div>

${validate_component(EntryModal, "EntryModal").$$render($$result, {}, {}, {})}`;
});
export { Blogs as default };
