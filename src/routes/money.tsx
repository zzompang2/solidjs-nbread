// @refresh reload
import "../public/css/money.css";
import { For, createSignal } from "solid-js";
import { memberList, paymentList } from "~/systems/data";
import { TEXT } from "~/systems/text";
import { TabMenu, setTab } from "~/systems/signal";
import PaymentItem from "~/components/paymentItem";

// 두 그룹으로 나뉨
paymentList.add([1, 2, 3], 1, 6000);
paymentList.add([1, 2], 2, 4000);
paymentList.add([1, 2, 3, 4, 5], 3, 10000);
paymentList.add([1, 2, 3, 4, 5], 1, 10000);
paymentList.add([1, 2, 3, 4, 5], 2, 10000);

// paymentList.add([1, 2, 3], 1, 6000);
// paymentList.add([1, 2], 2, 4000);
// paymentList.add([1, 2, 3, 4, 5], 3, 10000);
// paymentList.add([1, 2, 3, 4, 5], 1, 10000);
// paymentList.add([1, 2, 3, 4, 5], 2, 9000);

export default function Money() {
  const [selectedItem, selectItem] = createSignal(0);

  return (
    <div class="ctn" onclick={() => selectItem(0)}>
      <div class="ctn_header">
        <div class="subtitle" onclick={() => setTab(TabMenu.MEMBER)}>
          {TEXT.money.back}
        </div>
        <div class="title">{TEXT.money.title}</div>
        <button onclick={() => setTab(TabMenu.RESULT)}>
          {TEXT.money.button}
        </button>
      </div>

      <div class="payment_list">
        <div class="table">
          <span class="col_name">{TEXT.money.label1}</span>
          <span class="col_member">{TEXT.money.label2}</span>
          <span class="col_money">{TEXT.money.label3}</span>
        </div>
        <div class="items">
          <For each={paymentList.list}>
            {(payment) => (
              <PaymentItem
                payment={payment}
                selected={selectedItem() === payment.id}
                select={selectItem}
              />
            )}
          </For>
          <div class="button_list">
            <button
              class="button_add"
              onclick={(e) => {
                e.stopPropagation();
                const newId = paymentList.add(memberList.list.map((m) => m.id));
                selectItem(newId);
              }}
            >
              {TEXT.money.button_add}
            </button>
            <button
              class="button_delete"
              onclick={(e) => {
                e.stopPropagation();
                selectItem(0);
                paymentList.delete();
              }}
            >
              {TEXT.money.button_delete}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
