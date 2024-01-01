// @refresh reload

import { Setter, Show, createSignal } from "solid-js";
import { memberList, Payment } from "~/systems/data";
import PaymentEdit from "./paymentEdit";
import { TEXT } from "~/systems/text";

interface Props {
  payment: Payment;
  selected: boolean;
  select: Setter<number>;
}

export default function PaymentItem(props: Props) {
  const [selectedSection, selectSection] = createSignal(1);
  const sectionStyle1 = () =>
    props.selected && selectedSection() === 1 ? " section_selected" : "";
  const sectionStyle2 = () =>
    props.selected && selectedSection() === 2 ? " section_selected" : "";
  const sectionStyle3 = () =>
    props.selected && selectedSection() === 3 ? " section_selected" : "";

  return (
    <div class="payment_item" onclick={(e) => e.stopPropagation()}>
      <div class="item_row_info">
        <div
          class={"section_1 item_section_1" + sectionStyle1()}
          onclick={() => {
            props.select(props.payment.id);
            selectSection(1);
          }}
        >
          <div class="item_payer">{memberList.name(props.payment.payer)}</div>
          <div class="item_memo">{props.payment.memo}</div>
        </div>
        <div
          class={"section_2 item_section_2" + sectionStyle2()}
          onclick={() => {
            props.select(props.payment.id);
            selectSection(2);
          }}
        >
          <div class="item_members_count">{props.payment.members.length}명</div>
          <div class="item_members_name">
            {props.payment.members.length == memberList.list.length
              ? TEXT.paymentItem.allSelected
              : props.payment.members.length == 0
              ? TEXT.paymentItem.emptySelected
              : props.payment.members
                  .map((mid) => memberList.name(mid))
                  .join(", ")}
          </div>
        </div>
        <div
          class={"section_3 item_section_3" + sectionStyle3()}
          onclick={() => {
            props.select(props.payment.id);
            selectSection(3);
          }}
        >
          <div class="item_money">
            {String(props.payment.money).replace(
              /(\d)(?=(?:\d{3})+(?!\d))/g,
              "$1,"
            )}
            {` ${TEXT.paymentItem.moneyUnit}`}
          </div>
        </div>
      </div>
      <Show when={props.selected}>
        <PaymentEdit
          selectedSection={selectedSection}
          payment={props.payment}
        />
      </Show>
    </div>
  );
}
