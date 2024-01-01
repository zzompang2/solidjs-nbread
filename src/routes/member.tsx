// @refresh reload
import "../public/css/member.css";
import { For, Show, createSignal } from "solid-js";
import { memberList } from "~/systems/data";
import { TEXT } from "~/systems/text";
import { TabMenu, setTab } from "~/systems/signal";

// dummy data
memberList.add("하나");
memberList.add("두울");
memberList.add("세사리");
memberList.add("네마리");
memberList.add("오징어");

export default function Member() {
  const [alert, setAlert] = createSignal({ show: false, message: "" });
  const [selectedName, selectName] = createSignal(0);
  let inputRef: HTMLInputElement;
  let alertTimer: NodeJS.Timeout;

  const popupAlert = (message: string) => {
    setAlert({ show: true, message });
    clearTimeout(alertTimer);
    alertTimer = setTimeout(() => setAlert({ ...alert(), show: false }), 2000);
  };

  const handleAddMember = (e: Event) => {
    e.preventDefault(); // prevent refresh

    const trimedName = inputRef.value.trim();

    // empty
    if (trimedName === "") return;

    // duplicate
    if (memberList.exist(trimedName)) {
      popupAlert(TEXT.member.alert_duplicate);
      return;
    }

    inputRef.value = "";
    memberList.add(trimedName);
  };

  return (
    <div class="container_body">
      <div class="container_header">
        <div class="title">{TEXT.member.title}</div>
        <button
          class="button_small"
          onclick={() => {
            if (memberList.count < 2) popupAlert("2명 이상이어야 해요.");
            else setTab(TabMenu.MONEY);
          }}
        >
          {memberList.count + TEXT.member.button}
        </button>
      </div>

      <div class="container_members" onclick={() => selectName(0)}>
        <div class="container_items">
          <For each={memberList.list}>
            {(member) => (
              <span
                class="name_item"
                onclick={(e) => {
                  e.stopPropagation();
                  selectName(member.id);
                }}
              >
                <span>{member.name}</span>
                <Show when={selectedName() === member.id}>
                  <button
                    class="button_delete"
                    onclick={() => memberList.delete(member.id)}
                  >
                    {TEXT.member.button_delete}
                  </button>
                </Show>
              </span>
            )}
          </For>
        </div>
        <form class="input_name_form" onSubmit={handleAddMember}>
          <div class="input_name_warp">
            <input
              class="input_name"
              type="text"
              ref={(ref) => (inputRef = ref)}
              placeholder={TEXT.member.placeholder}
            />
            <button class="button_add_name" type="submit">
              {TEXT.member.button_add}
            </button>
          </div>
        </form>
      </div>
      <Show when={alert().show}>
        <div class="alert">{alert().message}</div>
      </Show>
    </div>
  );
}
