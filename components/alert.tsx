// @refresh reload

import { Show } from "solid-js";

interface Props {
  trigger: boolean;
  message: string;
}

export default function Alert(props: Props) {
  return (
    <Show when={props.trigger}>
      <div class="alert">{props.message}</div>
    </Show>
  );
}
