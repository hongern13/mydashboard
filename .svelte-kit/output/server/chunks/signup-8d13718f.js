import { c as create_ssr_component, o as onDestroy, b as add_attribute } from "./app-747dfeb6.js";
import "./firebase-f379b5e1.js";
import { a as authStore, g as goto } from "./navigation-c4464c84.js";
import "stream";
import "http";
import "url";
import "punycode";
import "https";
import "zlib";
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email;
  let password;
  const sub = authStore.subscribe(async (info) => {
    if (info.isLoggedIn) {
      await goto("/login");
    }
  });
  onDestroy(() => {
    sub();
  });
  return `





<div class="${"card mt-5 m-auto text-center"}" style="${"width: 24em;"}"><div class="${"card-body"}"><h5 class="${"card-title"}">Welcome</h5>

      <p class="${"card-text text-muted"}">Please sign up to continue...</p>

      <form class="${"form-floating"}">

      <div class="${"mb-3"}"><label for="${"emailInput"}" class="${"form-label"}">Email address</label>

          <input type="${"email"}" class="${"form-control"}" id="${"emailInput"}"${add_attribute("value", email, 0)}></div>

      

      <div class="${"mb-3"}"><label for="${"passwordInput"}" class="${"form-label"}">Password</label>

          <input type="${"password"}" class="${"form-control"}" id="${"passwordInput"}" aria-describedby="${"passwordHelp"}"${add_attribute("value", password, 0)}></div>

      <div id="${"passwordHelp"}" class="${"form-text"}">Your password must be at least 6 characters long.

      </div>

      

      <button type="${"submit"}" class="${"btn btn-dark mt-3"}">Sign Up</button></form></div></div>



<div class="${"text-center mt-3"}"><a href="${"/login"}" class="${"text-muted"}">Already have an account? Click here to login.</a></div>`;
});
export { Signup as default };
