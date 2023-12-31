// @refresh reload
import "../public/css/calculation.css";
import { Match, Switch } from "solid-js";
import Member from "./member";
import Money from "./money";
import Result from "./result";
import { TabMenu, currentTab } from "~/systems/signal";

export default function Calculation() {
  return (
    <main>
      <Switch>
        <Match when={currentTab() === TabMenu.MEMBER}>
          <Member />
        </Match>
        <Match when={currentTab() === TabMenu.MONEY}>
          <Money />
        </Match>
        <Match when={currentTab() === TabMenu.RESULT}>
          <Result />
        </Match>
      </Switch>
    </main>
  );
}
