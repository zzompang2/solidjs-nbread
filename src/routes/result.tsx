// @refresh reload
import { calculateNBread } from "~/systems/calculate";
import { setTab, TabMenu } from "~/systems/signal";

export default function Result() {
  calculateNBread();

  return (
    <main>
      <div onclick={() => setTab(TabMenu.MONEY)}>BACK</div>
    </main>
  );
}
