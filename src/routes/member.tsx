// @refresh reload
import { For, Show, createSignal } from "solid-js";
import { DATA } from "~/systems/data";

export default function Member() {
  const [alert, setAlert] = createSignal({ show: false, message: "" });
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
    if (DATA.memberList.exist(trimedName)) {
      popupAlert("중복된 이름입니다.");
      return;
    }

    inputRef.value = "";
    DATA.memberList.add(trimedName);
  };

  return (
    <main>
      <div>{DATA.memberList.count}명</div>
      <form onSubmit={handleAddMember}>
        <input type="text" ref={(ref) => (inputRef = ref)} placeholder="이름" />
        <button type="submit">추가</button>
      </form>
      <p>엔터키로 빠르게 추가할 수 있어요!</p>
      <For each={DATA.memberList.list}>
        {(member) => (
          <div>
            <span>
              {member.id}. {member.name}
            </span>
            <button onclick={() => DATA.memberList.delete(member.id)}>
              삭제
            </button>
          </div>
        )}
      </For>
      <button
        onclick={() => {
          if (DATA.memberList.count < 2) popupAlert("2명 이상이어야 해요.");
        }}
      >
        다음
      </button>
      <Show when={alert().show}>
        <div class="alert">{alert().message}</div>
      </Show>
    </main>
  );
}
