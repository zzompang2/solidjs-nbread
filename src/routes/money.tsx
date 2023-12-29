// @refresh reload
import { For } from "solid-js";
import { memberList, paymentList } from "~/systems/data";

export default function Money() {
  return (
    <main>
      <div>MONEY</div>
      <For each={paymentList.list}>
        {(payment) => (
          <div>
            <select
              value={payment.payer}
              onchange={(e) =>
                paymentList.change(payment.id, "payer", Number(e.target.value))
              }
            >
              <For each={memberList.list}>
                {(member) => (
                  <option value={member.id}>
                    {member.id}. {member.name}
                  </option>
                )}
              </For>
            </select>
            <input
              type="number"
              value={payment.money}
              onchange={(e) =>
                paymentList.change(payment.id, "money", Number(e.target.value))
              }
            />
            <span>{payment.members}</span>
            <input
              type="text"
              value={payment.memo}
              onchange={(e) =>
                paymentList.change(payment.id, "memo", e.target.value)
              }
            />
          </div>
        )}
      </For>
      <button onclick={() => paymentList.add(memberList.list.map((m) => m.id))}>
        추가
      </button>
    </main>
  );
}
