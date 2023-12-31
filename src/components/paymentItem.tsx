// @refresh reload

import { For, Match, Setter, Show, Switch, createSignal } from "solid-js";
import Reset from "~/public/assets/icons/reset";
import { memberList, Payment, paymentList } from "~/systems/data";

interface Props {
  payment: Payment;
  selected: boolean;
  select: Setter<number>;
}

export default function PaymentItem(props: Props) {
  let memoRef: HTMLInputElement;
  let moneyRef: HTMLInputElement;
  const [selectedSection, selectSection] = createSignal(0);
  const sectionStyle1 = () =>
    props.selected && selectedSection() === 1 ? " section_selected" : "";
  const sectionStyle2 = () =>
    props.selected && selectedSection() === 2 ? " section_selected" : "";
  const sectionStyle3 = () =>
    props.selected && selectedSection() === 3 ? " section_selected" : "";

  const changeMemo = (e: Event) => {
    e.preventDefault();
    memoRef.blur();
    memoRef.value = memoRef.value.trim();
    paymentList.change(props.payment.id, "memo", memoRef.value.trim());
  };

  const cleanMemo = () => {
    memoRef.value = "";
    paymentList.change(props.payment.id, "memo", "");
  };

  const changeMoney = (e: Event) => {
    e.preventDefault();
    moneyRef.blur();
    if (Number(moneyRef.value) > 0 && Number(moneyRef.value) < 1000000000000)
      paymentList.change(props.payment.id, "money", Number(moneyRef.value));
    else moneyRef.value = String(props.payment.money);
  };

  return (
    <div class="payment_item">
      <div class="item_row_info">
        <div
          class={"item_section_1" + sectionStyle1()}
          onclick={() => {
            props.select(props.payment.id);
            selectSection(1);
          }}
        >
          <div class="item_payer">{memberList.name(props.payment.payer)}</div>
          <div class="item_memo">{props.payment.memo}</div>
        </div>
        <div
          class={"item_section_2" + sectionStyle2()}
          onclick={() => {
            props.select(props.payment.id);
            selectSection(2);
          }}
        >
          <div class="item_members_count">{props.payment.members.length}명</div>
          <div class="item_members_name">
            {props.payment.members.length == memberList.list.length
              ? "전체"
              : props.payment.members
                  .map((mid) => memberList.name(mid))
                  .join(", ")}
          </div>
        </div>
        <div
          class={"item_section_3" + sectionStyle3()}
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
            {" 원"}
          </div>
        </div>
      </div>
      <Show when={props.selected}>
        <div class="item_row_edit">
          <Switch>
            <Match when={selectedSection() === 1}>
              <div class="option_list">
                <For each={memberList.list}>
                  {(member) => (
                    <div
                      class={
                        "option" +
                        (props.payment.payer === member.id ? " selected" : "")
                      }
                      onclick={() =>
                        paymentList.change(props.payment.id, "payer", member.id)
                      }
                    >
                      {member.name}
                    </div>
                  )}
                </For>
              </div>
              <form class="label_input" onsubmit={changeMemo}>
                <input
                  class="input_memo"
                  value={props.payment.memo}
                  placeholder="내용을 입력해주세요(선택)"
                  ref={(ref) => (memoRef = ref)}
                  onchange={changeMemo}
                />
                <div class="button_reset" onclick={cleanMemo}>
                  <Reset />
                </div>
              </form>
            </Match>
            <Match when={selectedSection() === 2}>
              <div class="option_list">
                <For each={memberList.list}>
                  {(member) => (
                    <div
                      class={
                        "option" +
                        (props.payment.members.find((mid) => mid === member.id)
                          ? " selected"
                          : "")
                      }
                      onclick={() =>
                        paymentList.updateMember(props.payment.id, member.id)
                      }
                    >
                      {member.name}
                    </div>
                  )}
                </For>
              </div>
            </Match>
            <Match when={selectedSection() === 3}>
              <form class="label_input" onsubmit={changeMoney}>
                <input
                  class="input_money"
                  type="number"
                  placeholder="0"
                  required
                  value={props.payment.money}
                  ref={(ref) => (moneyRef = ref)}
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-", "."].includes(e.key) &&
                    e.preventDefault()
                  }
                  onchange={changeMoney}
                />
                원
              </form>
            </Match>
          </Switch>
        </div>
      </Show>
    </div>
  );
}
