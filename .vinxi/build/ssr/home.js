import { ssr, ssrHydrationKey } from "solid-js/web";
import { u as useNavigate } from "./assets/routing-3e58b16d.js";
import "solid-js";
const _tmpl$ = ["<main", ">HOME<button>계산하러 가기</button></main>"];
function Home() {
  useNavigate();
  return ssr(_tmpl$, ssrHydrationKey());
}
export {
  Home as default
};
