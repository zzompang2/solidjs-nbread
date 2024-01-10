// @refresh reload
import "../public/css/member.css";
import { For, Show, Switch, createSignal } from "solid-js";
import { memberList } from "~/systems/data";
import { TEXT } from "~/systems/text";
import { TabMenu, setTab } from "~/systems/signal";
import Alert from "~/components/alert";
import axios from "axios";

export default function Member() {
  const [alert, setAlert] = createSignal({ show: false, message: "" });
  const [selectedName, selectName] = createSignal(0);
  let inputRef: HTMLInputElement;
  let alertTimer: NodeJS.Timeout;

  axios({
    method: "get",
    url: "http://127.0.0.1:8080/database",
  }).then((res) => {
    console.log(res.data);
  });

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
    <div class="ctn">
      <div class="ctn_header">
        <div class="title">{TEXT.member.title}</div>
        <button
          onclick={() => {
            if (memberList.count < 2) popupAlert("2명 이상이어야 해요.");
            else setTab(TabMenu.MONEY);
          }}
        >
          {memberList.count + TEXT.member.button}
        </button>
      </div>

      <div class="ctn_body" onclick={() => selectName(0)}>
        <div class="member_list">
          <Show
            when={memberList.count !== 0}
            fallback={
              <div class="guide">이름을 입력하고 [추가]버튼을 눌러보세요!</div>
            }
          >
            <div class="wrap">
              <For each={memberList.list}>
                {(member) => (
                  <span
                    class="item"
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
          </Show>
        </div>
        <form class="member_input" onSubmit={handleAddMember}>
          <div class="wrap">
            <input
              type="text"
              ref={(ref) => (inputRef = ref)}
              placeholder={TEXT.member.placeholder}
            />
            <button type="submit">{TEXT.member.button_add}</button>
          </div>
        </form>
      </div>
      <Alert trigger={alert().show} message={alert().message} />
    </div>
  );
}
