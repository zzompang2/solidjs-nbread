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
    <div class="sending_item" onclick={(e) => e.stopPropagation()}>
      <div class={"section_1 item_section_1"}>
        <div class="item_payer">{memberList.name(props.sending.from)}</div>
      </div>
      <ArrowRight />
      <div class={"section_2 item_section_2"}>
        <div class="item_members_count">
          {memberList.name(props.sending.to)}
        </div>
      </div>
      <div class={"section_3 item_section_3"}>
        <div class="item_money">
          {String(props.sending.money).replace(
            /(\d)(?=(?:\d{3})+(?!\d))/g,
            "$1,"
          )}
          {` ${TEXT.paymentItem.moneyUnit}`}
        </div>
      </div>
    </div>
  );
}
