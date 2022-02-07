import { c as create_ssr_component } from "../../chunks/index-c6361d4c.js";
const browser = false;
const dev = false;
var login_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-1jvwr0i.svelte-1jvwr0i{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}.svelte-1jvwr0i.svelte-1jvwr0i{margin:200;padding:200;text-decoration:none;font-family:montserrat;box-sizing:border-box}.login-form.svelte-1jvwr0i.svelte-1jvwr0i{width:360px;background:#f1f1f1;height:580px;padding:80px 40px;border-radius:10px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.login-form.svelte-1jvwr0i h1.svelte-1jvwr0i{text-align:center;margin-bottom:60px}.txtb.svelte-1jvwr0i.svelte-1jvwr0i{border-bottom:2px solid #adadad;position:relative;margin:30px 0}.txtb.svelte-1jvwr0i input.svelte-1jvwr0i{font-size:15px;color:#333;border:none;width:100%;outline:none;background:none;padding:0 5px;height:40px}.logbtn.svelte-1jvwr0i.svelte-1jvwr0i{display:block;width:100%;height:50px;border:none;background:linear-gradient(120deg,#3498db,#8e44ad,#3498db);background-size:200%;color:#fff;outline:none;cursor:pointer;transition:.5s}.logbtn.svelte-1jvwr0i.svelte-1jvwr0i:hover{background-position:right}.bottom-text.svelte-1jvwr0i.svelte-1jvwr0i{margin-top:60px;text-align:center;font-size:13px}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Login</title>`, ""}`, ""}

<div class="${"content svelte-1jvwr0i"}"><form action="${"http://localhost:3000/api/auth/login"}" class="${"login-form svelte-1jvwr0i"}" id="${"reg-form"}" method="${"POST"}"><h1 class="${"svelte-1jvwr0i"}">Login</h1>
        
        <div class="${"txtb svelte-1jvwr0i"}"><input type="${"email"}" id="${"email"}" name="${"email"}" placeholder="${"email"}" autocomplete="${"on"}" class="${"svelte-1jvwr0i"}"></div>

            <div class="${"txtb svelte-1jvwr0i"}"><input type="${"password"}" id="${"password"}" name="${"password"}" placeholder="${"password"}" class="${"svelte-1jvwr0i"}"></div>

            <input type="${"submit"}" class="${"logbtn svelte-1jvwr0i"}" value="${"login"}" id="${"loginbutton"}" method="${"POST"}">

            <div class="${"bottom-text svelte-1jvwr0i"}">Don&#39;t have account? <a href="${"http://localhost:8080/signup/"}" class="${"svelte-1jvwr0i"}">Sign up</a></div>
            <div class="${"bottom-text svelte-1jvwr0i"}"></div>
            
    // @ts-ignore
    </form>
</div>`;
});
export { Login as default, hydrate, prerender, router };
