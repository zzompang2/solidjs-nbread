// @refresh reload
import { useNavigate } from "@solidjs/router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      HOME
      <button onclick={() => navigate("/calculation")}>계산하러 가기</button>
    </main>
  );
}
