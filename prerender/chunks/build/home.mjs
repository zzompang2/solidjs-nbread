import { ssr, ssrHydrationKey } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/web/dist/server.js';
import { createContext, useContext } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/dist/server.js';

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
const _tmpl$ = ["<main", ">HOME<button>\uACC4\uC0B0\uD558\uB7EC \uAC00\uAE30</button></main>"];
function Home() {
  useNavigate();
  return ssr(_tmpl$, ssrHydrationKey());
}

export { Home as default };
//# sourceMappingURL=home.mjs.map
