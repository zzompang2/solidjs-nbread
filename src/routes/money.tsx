// @refresh reload
import { For } from "solid-js";
import { DATA } from "~/systems/data";

export default function Money() {
  return (
    <main>
      <div>MONEY</div>
      <div>
        <select>
          <For each={DATA.memberList.list}>
            {(member) => (
              <option value={member.id}>
                {member.id}. {member.name}
              </option>
            )}
          </For>
        </select>
      </div>
    </main>
  );
}
