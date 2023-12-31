// @refresh reload

import { For } from "solid-js";
import { memberList, Payment, paymentList } from "~/systems/data";

interface Props {
  payment: Payment;
}

export default function PaymentItem(props: Props) {
  return (
    <div class="payment_item">
      <div class="item_section_1">
        <select
          class="item_payer"
          value={props.payment.payer}
          onchange={(e) =>
            paymentList.change(
              props.payment.id,
              "payer",
              Number(e.target.value)
            )
          }
        >
          <For each={memberList.list}>
            {(member) => <option value={member.id}>{member.name}</option>}
          </For>
        </select>
        <input
          class="item_memo"
          type="text"
          value={props.payment.memo}
          onchange={(e) =>
            paymentList.change(props.payment.id, "memo", e.target.value)
          }
        />
      </div>
      <div class="item_section_2">
        <div class="item_members_count">{props.payment.members}</div>
        <div class="item_members_name">전체</div>
      </div>
      <div class="item_section_3">
        <input
          class="item_money"
          type="number"
          value={props.payment.money}
          onchange={(e) =>
            paymentList.change(
              props.payment.id,
              "money",
              Number(e.target.value)
            )
          }
        />
      </div>
    </div>
  );
}
