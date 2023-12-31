import { createSignal } from "solid-js";

enum TabMenu {
  MEMBER,
  MONEY,
  RESULT,
}

const [currentTab, setTab] = createSignal(TabMenu.MEMBER);

export { TabMenu, currentTab, setTab };
