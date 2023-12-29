// @refresh reload

import { Match, Switch, createSignal } from "solid-js";
import Member from "./member";
import Money from "./money";
import Result from "./result";

enum TabMenu {
  MEMBER,
  MONEY,
  RESULT,
}

export default function Calculation() {
  const [currentTab, setTab] = createSignal(TabMenu.MEMBER);

  return (
    <main>
      <ul>
        <li onclick={() => setTab(TabMenu.MEMBER)}>MEMBER</li>
        <li onclick={() => setTab(TabMenu.MONEY)}>MONEY</li>
        <li onclick={() => setTab(TabMenu.RESULT)}>RESULT</li>
      </ul>
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
