// @refresh reload
import { memberList, paymentList } from "~/systems/data";
import { PayInfo } from "~/systems/calculate";
import { TEXT } from "~/systems/text";
import { For, Setter, Show } from "solid-js";

interface Props {
  payInfo: PayInfo;
  selectedInfo: number;
  selectInfo: Setter<number>;
}

export default function PayInfoItem(props: Props) {
  const payMoney =
    props.payInfo.pay.reduce((sum, cur) => sum + cur.money, 0) +
    props.payInfo.bonus;
  const useMoney = props.payInfo.use.reduce((sum, cur) => sum + cur.money, 0);
  const totalMoney = payMoney - useMoney;

  return (
    <div
      class="payinfo_item"
      onclick={(e) => {
        e.stopPropagation();
        props.selectInfo(props.payInfo.mid);
      }}
    >
      <div class="item_row_info">
        <div class={"section_payinfo"}>
          <div class="item_payer">{memberList.name(props.payInfo.mid)}</div>
        </div>
        <div class={"section_payinfo_money"}>
          <div class="item_money">
            {String(payMoney).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}
            {` ${TEXT.paymentItem.moneyUnit}`}
          </div>
        </div>
        <div class={"section_payinfo_money"}>
          <div class="item_money">
            {String(useMoney).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}
            {` ${TEXT.paymentItem.moneyUnit}`}
          </div>
        </div>
        <div class={"section_payinfo_money"}>
          <div class="item_money">
            {String(totalMoney).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}
            {` ${TEXT.paymentItem.moneyUnit}`}
          </div>
        </div>
      </div>
      <Show when={props.selectedInfo === props.payInfo.mid}>
        <div class="info_detail">
          <Show when={payMoney > 0}>
            <div>{TEXT.result.label5}</div>
            <For each={props.payInfo.pay}>
              {(pay) => (
                <div>
                  {paymentList.memo(pay.pid)} ... {pay.money}원
                </div>
              )}
            </For>
          </Show>
          <Show when={useMoney > 0}>
            <div>{TEXT.result.label6}</div>
            <For each={props.payInfo.use}>
              {(use) => (
                <div>
                  {paymentList.memo(use.pid)} ... {use.money}원
                </div>
              )}
            </For>
          </Show>
          <div>
            총 {totalMoney >= 0 ? "받을" : "보낼"}돈: {Math.abs(totalMoney)}원
          </div>
        </div>
      </Show>
    </div>
  );
}
