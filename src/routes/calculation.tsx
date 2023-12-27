// @refresh reload

import { useLocation } from "@solidjs/router";

export default function Calculation() {
  const location = useLocation();
  console.log(location.state);

  return (
    <main>
      <div>Calculation</div>
    </main>
  );
}
