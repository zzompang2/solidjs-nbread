// @refresh reload

import { Show, createSignal } from "solid-js";
import { memberList, Payment } from "~/systems/data";
import { Sending } from "~/systems/calculate";
import { TEXT } from "~/systems/text";
import ArrowRight from "~/public/assets/icons/arrowRight";

interface Props {
  sending: Sending;
}

export default function SendingItem(props: Props) {
  return (
    <div class="sending_item">
      <div class={"col_flexible"}>{memberList.name(props.sending.from)}</div>
      <ArrowRight />
      <div class={"col_flexible"}>{memberList.name(props.sending.to)}</div>
      <div class={"col_money"}>
        {String(props.sending.money).replace(
          /(\d)(?=(?:\d{3})+(?!\d))/g,
          "$1,"
        )}
        {` ${TEXT.paymentItem.moneyUnit}`}
      </div>
    </div>
  );
}
