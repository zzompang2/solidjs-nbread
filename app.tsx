// @refresh reload
import "./public/css/app.css";
import { Router, Route } from "@solidjs/router";
import Home from "./routes/home";
import Calculation from "./routes/calculation";
import Result from "./routes/result";

export default function App() {
  return (
    <Router>
      {/* <Route path="/" component={Home} /> */}
      <Route path="/" component={Calculation} />
      {/* <Route path="/result" component={Result} /> */}
    </Router>
  );
}
