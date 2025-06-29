import { c as create_ssr_component, e as escape, a as add_attribute, b as each, s as subscribe, o as onDestroy, v as validate_component } from "./app-6b13d4b4.js";
import "./firebase-54d5ee67.js";
import { a as authStore, g as goto } from "./navigation-f207e3bc.js";
import { U as Ua } from "./index.esm2017-14122f54.js";
import "stream";
import "http";
import "url";
import "punycode";
import "https";
import "zlib";
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let quote = "Patience is the key to a good life.";
  let author = "Unknown";
  return `<main>\xA0 <button>Get me a quote!</button>
\xA0 <h1>${escape(quote)}</h1>
\xA0 <p>- ${escape(author)} -</p></main>`;
});
const Todo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let item = "";
  Ua();
  return `<section class="${"text-center"}"><h1>Welcome!</h1>
<p>Write your to do list.</p>
<div class="${"container text-center"}"><input type="${"text"}" class="${"form-control m-3"}"${add_attribute("value", item, 0)}>
<button type="${"button"}" class="${"btn btn-primary mb-3"}">\xA0 \xA0 Add
</button></div></section>`;
});
const Showtodo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let task = [];
  let error;
  Ua();
  return `<div class="${"container bg-light rounded-3 p-2 h4 w-50"}">

  ${!task ? `
       <p class="${"text-center"}">No Available Data...</p>` : `${task ? `
          ${each(task, (entry) => `

              <table class="${"table"}"><tr><td style="${"width: 100%;"}"><li>${escape(entry.item)}</li></td>
                    <td>

                      <div><button class="${"btn btn-danger"}">x</button></div>
                    </td></tr>
              </table>`)}` : `

     <p>Something went wrong while fetching the data:</p>
     <pre>${escape(error)}</pre>`}`}</div>`;
});
var Timetable_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1kfitup.svelte-1kfitup{text-align:center;color:#ffffff}.myTimetable.svelte-1kfitup.svelte-1kfitup{width:100%;border-collapse:collapse;table-layout:fixed}.myTimetable.svelte-1kfitup thead.svelte-1kfitup{color:#ffffff}.myTimetable.svelte-1kfitup tbody.svelte-1kfitup{background-color:#aaaaff}.myTimetable.svelte-1kfitup td.svelte-1kfitup{border:1px solid black;padding:6px;text-align:center}.myTimetable.svelte-1kfitup tbody tr td.svelte-1kfitup:first-child{background-color:#ff0066;font-weight:bold}th.svelte-1kfitup.svelte-1kfitup{color:black;text-align:center}.break.svelte-1kfitup.svelte-1kfitup{background-color:#ff0066 !important;font-style:italic}.subject.svelte-1kfitup.svelte-1kfitup{font-size:12pt;margin-bottom:4px}",
  map: null
};
const Timetable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container"}"><h1 class="${"svelte-1kfitup"}">My Timetable</h1>
  <table class="${"myTimetable svelte-1kfitup"}"><thead class="${"svelte-1kfitup"}"><tr><th class="${"svelte-1kfitup"}"></th>
        <th class="${"svelte-1kfitup"}">Monday</th>
        <th class="${"svelte-1kfitup"}">Tuesday</th>
        <th class="${"svelte-1kfitup"}">Wednesday</th>
        <th class="${"svelte-1kfitup"}">Thursday</th>
        <th class="${"svelte-1kfitup"}">Friday</th></tr></thead>
    <tbody class="${"svelte-1kfitup"}"><tr><td class="${"svelte-1kfitup"}">P1</td>
        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Maths</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Art</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">English</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Moral</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Geography</div></td></tr>

      <tr><td class="${"svelte-1kfitup"}">P2</td>
        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>
        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">History</div></td>
        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Spanish</div></td>
        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">P.E.</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Maths</div></td></tr>

      

      <tr><td class="${"svelte-1kfitup"}">P3</td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">I.T.</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">English</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Musique</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">English</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">PSHE</div></td></tr>

      

      <tr><td class="${"svelte-1kfitup"}">P4</td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">History</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Drama</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Maths</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Geography</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">P.E.</div></td></tr>

      <tr><td colspan="${"6"}" class="${"break svelte-1kfitup"}">Break</td></tr>

      <tr><td class="${"svelte-1kfitup"}">P5</td>

        <td rowspan="${"2"}" class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">BM</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">English</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">R.E.</div></td></tr>

      <tr><td class="${"svelte-1kfitup"}">P6</td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Spanish</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">English</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td></tr>

      <tr><td class="${"svelte-1kfitup"}">P7</td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Spanish</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">English</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">R.E.</div></td></tr>

      <tr><td class="${"svelte-1kfitup"}">P8</td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Spanish</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">English</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">R.E.</div></td></tr>

      <tr><td class="${"svelte-1kfitup"}">P9</td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Spanish</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">English</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">R.E.</div></td></tr>

      <tr><td class="${"svelte-1kfitup"}">P10</td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Spanish</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">English</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">Science</div></td>

        <td class="${"svelte-1kfitup"}"><div class="${"subject svelte-1kfitup"}">R.E.</div></td></tr></tbody></table></div>`;
});
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
      <div class="${"d-flex ms-auto"}"><button class="${"btn btn-danger"}">Sign Out</button></div></div></div></nav>

<div class="${"container-fluid mt-5"}"><div class="${"row"}"><div class="${"col-md"}"><div class="${"card h-100"}"><div class="${"card-header bg-dark text-white"}">Quote of the Day
        </div>
        <div class="${"card-body"}">${validate_component(Quote, "Quote").$$render($$result, {}, {}, {})}</div></div></div>
    <div class="${"col-md"}">\xA0 \xA0 \xA0 <div class="${"card h-100"}"><div class="${"card-header bg-dark text-white"}">To Do List
        </div>
        <div class="${"card-body"}"><col-md></col-md>
          ${validate_component(Todo, "Todo").$$render($$result, {}, {}, {})}
          ${validate_component(Showtodo, "Showtodo").$$render($$result, {}, {}, {})}
          <col-md></col-md></div></div></div></div></div>

<div class="${"container-fluid mt-5 mb-5"}"><div class="${"row"}"><div class="${"col-md"}"><div class="${"card"}"><div class="${"card-header bg-dark text-white"}">Timetable
        </div>
        <div class="${"card-body"}">${validate_component(Timetable, "Timetable").$$render($$result, {}, {}, {})}</div></div></div></div></div>`;
});
export { Routes as default };
