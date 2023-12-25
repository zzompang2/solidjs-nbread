// @refresh reload
import { For, Show, createSignal } from "solid-js";
import "./app.css";

export default function App() {
  const [members, setMembers] = createSignal(Array<string>());
  const [alert, setAlert] = createSignal({ show: false, message: "" });
  let inputRef: HTMLInputElement;
  let alertTimer: NodeJS.Timeout;

  const handleAddMember = (e: Event) => {
    e.preventDefault(); // prevent refresh

    const trimedName = inputRef.value.trim();

    // empty
    if (trimedName === "") return;

    // duplicate
    if (members().indexOf(trimedName) !== -1) {
      setAlert({ show: true, message: "중복된 이름입니다." });
      clearTimeout(alertTimer);
      alertTimer = setTimeout(
        () => setAlert({ ...alert(), show: false }),
        2000
      );
      return;
    }

    inputRef.value = "";
    setMembers([...members(), trimedName]);
  };

  const handleDeleteMember = (index: number) => {
    console.log(index);
    setMembers(members().filter((_, i) => i !== index));
  };

  return (
    <main>
      <div>{members().length}명</div>
      <form onSubmit={handleAddMember}>
        <input type="text" ref={(ref) => (inputRef = ref)} placeholder="이름" />
        <button type="submit">추가</button>
      </form>
      <p>엔터키로 빠르게 추가할 수 있어요!</p>
      <For each={members()}>
        {(mem, i) => (
          <div>
            <span>
              {i() + 1}. {mem}
            </span>
            <button onclick={() => handleDeleteMember(i())}>삭제</button>
          </div>
        )}
      </For>
      <Show when={alert().show}>
        <div class="alert">{alert().message}</div>
      </Show>
    </main>
  );
}
