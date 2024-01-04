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
    props.selected && selectedSection() === 1 ? " selected" : "";
  const sectionStyle2 = () =>
    props.selected && selectedSection() === 2 ? " selected" : "";
  const sectionStyle3 = () =>
    props.selected && selectedSection() === 3 ? " selected" : "";

  return (
    <div class="item" onclick={(e) => e.stopPropagation()}>
      <div class="wrap">
        <div
          class={"col_name clickable" + sectionStyle1()}
          onclick={() => {
            if (props.selected && selectedSection() === 1) {
              props.select(0);
            } else {
              props.select(props.payment.id);
              selectSection(1);
            }
          }}
        >
          <div class="row_payer">{memberList.name(props.payment.payer)}</div>
          <div class="row_memo">{props.payment.memo}</div>
        </div>
        <div
          class={"col_member clickable" + sectionStyle2()}
          onclick={() => {
            if (props.selected && selectedSection() === 2) {
              props.select(0);
            } else {
              props.select(props.payment.id);
              selectSection(2);
            }
          }}
        >
          <div
            class={
              "row_number" +
              (props.payment.members.length === 0 ? " warning" : "")
            }
          >
            {props.payment.members.length}명
          </div>
          <div class="row_names">
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
          class={"col_money clickable" + sectionStyle3()}
          onclick={() => {
            if (props.selected && selectedSection() === 3) {
              props.select(0);
            } else {
              props.select(props.payment.id);
              selectSection(3);
            }
          }}
        >
          <div
            class={"row_money" + (props.payment.money === 0 ? " warning" : "")}
          >
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
          selectedSection={selectedSection()}
          payment={props.payment}
        />
      </Show>
    </div>
  );
}
