import { ssr, ssrHydrationKey } from "solid-js/web";
import { createContext, useContext } from "solid-js";
function invariant(value, message) {
  if (value == null) {
    throw new Error(message);
  }
  return value;
}
const RouterContextObj = createContext();
createContext();
const useRouter = () => invariant(useContext(RouterContextObj), "Make sure your app is wrapped in a <Router />");
const useNavigate = () => useRouter().navigatorFactory();
const _tmpl$ = ["<main", ">HOME<button>계산하러 가기</button></main>"];
function Home() {
  useNavigate();
  return ssr(_tmpl$, ssrHydrationKey());
}
export {
  Home as default
};
