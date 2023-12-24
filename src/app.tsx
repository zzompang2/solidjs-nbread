// @refresh reload
import { createSignal } from "solid-js";
import "./app.css";

export default function App() {
  const [members, setMembers] = createSignal(Array<any>());
  let inputRef: HTMLInputElement;

  const handleAddMember = (e: Event) => {
    e.preventDefault(); // prevent refresh

    const trimedName = inputRef.value.trim();
    inputRef.value = "";

    if (trimedName === "") return;
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
      <div>
        {members().map((mem, i) => (
          <div>
            <span>
              {i + 1}. {mem}
            </span>
            <button onclick={() => handleDeleteMember(i)}>삭제</button>
          </div>
        ))}
      </div>
    </main>
  );
}
