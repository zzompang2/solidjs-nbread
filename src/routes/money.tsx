// @refresh reload
import "../public/css/money.css";
import { For } from "solid-js";
import { memberList, paymentList } from "~/systems/data";
import { TEXT } from "~/public/text";
import { TabMenu, setTab } from "~/systems/signal";

paymentList.add([1, 2, 3], 1, 10000);
paymentList.add([1, 2], 2, 20000);

export default function Money() {
  return (
    <div class="container_body">
      <div class="container_header">
        <div class="back_message" onclick={() => setTab(TabMenu.MEMBER)}>
          {TEXT.money.back}
        </div>
        <div class="title">{TEXT.money.title}</div>
        <button class="button_small" onclick={() => setTab(TabMenu.RESULT)}>
          {TEXT.money.button}
        </button>
      </div>

      <div class="container_payments">
        <div class="table">
          <span class="item_section_1">{TEXT.money.label1}</span>
          <span class="item_section_2">{TEXT.money.label2}</span>
          <span class="item_section_3">{TEXT.money.label3}</span>
        </div>
        <div class="payment_list">
          <For each={paymentList.list}>
            {(payment) => (
              <div class="payment_item">
                <div class="item_section_1">
                  <select
                    class="item_payer"
                    value={payment.payer}
                    onchange={(e) =>
                      paymentList.change(
                        payment.id,
                        "payer",
                        Number(e.target.value)
                      )
                    }
                  >
                    <For each={memberList.list}>
                      {(member) => (
                        <option value={member.id}>{member.name}</option>
                      )}
                    </For>
                  </select>
                  <input
                    class="item_memo"
                    type="text"
                    value={payment.memo}
                    onchange={(e) =>
                      paymentList.change(payment.id, "memo", e.target.value)
                    }
                  />
                </div>
                <div class="item_section_2">
                  <div class="item_members_count">{payment.members}</div>
                  <div class="item_members_name">전체</div>
                </div>
                <div class="item_section_3">
                  <div class="item_money">1000원</div>
                </div>
              </div>
            )}
          </For>
          <button
            class="button_add"
            onclick={() => paymentList.add(memberList.list.map((m) => m.id))}
          >
            {TEXT.money.button_add}
          </button>
        </div>
      </div>
    </div>
  );
}
