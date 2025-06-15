import { c as create_ssr_component, s as subscribe, o as onDestroy } from "./app-53aff420.js";
import "./firebase-d3cf68b7.js";
import { a as authStore, g as goto } from "./navigation-c25923ef.js";
import "stream";
import "http";
import "url";
import "punycode";
import "https";
import "zlib";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  const sub = authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
    if (!isLoggedIn && firebaseControlled) {
      await goto("/login");
    }
  });
  onDestroy(() => {
    sub();
  });
  $$unsubscribe_authStore();
  return `

<nav class="${"navbar navbar-expand-lg navbar-dark bg-dark"}"><div class="${"container-fluid"}"><h1 class="${"navbar-brand"}">My Dashboard</h1>
    <button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarSupportedContent"}" aria-controls="${"navbarSupportedContent"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
    <div class="${"collapse navbar-collapse"}" id="${"navbarSupportedContent"}"><ul class="${"navbar-nav mr-auto"}"><li class="${"nav-item"}"><a class="${"nav-link"}">Home</a></li>
        <li class="${"nav-item"}"><a class="${"nav-link"}">Blogs</a></li></ul>
      <div class="${"d-flex ms-auto"}"><button class="${"btn btn-danger"}">Sign Out</button></div></div></div></nav>`;
});
export { Routes as default };
