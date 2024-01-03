// @refresh reload
import { memberList, paymentList } from "~/systems/data";
import { PayInfo } from "~/systems/calculate";
import { TEXT } from "~/systems/text";
import { For, Setter, Show } from "solid-js";

interface Props {
  payInfo: PayInfo;
  selected: boolean;
  selectInfo: Setter<number>;
}

export default function PayInfoItem(props: Props) {
  const payMoney =
    props.payInfo.pay.reduce((sum, cur) => sum + cur.money, 0) +
    props.payInfo.bonus;
  const useMoney = props.payInfo.use.reduce((sum, cur) => sum + cur.money, 0);
  const totalMoney = payMoney - useMoney;

  const formatMoney = (money: number): string =>
    `${String(money).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")} ${
      TEXT.paymentItem.moneyUnit
    }`;

  return (
    <div
      class={"payinfo_item" + (props.selected ? " selected" : "")}
      onclick={(e) => e.stopPropagation()}
    >
      <div
        class="row_info"
        onclick={(e) => {
          e.stopPropagation();
          if (props.selected) props.selectInfo(0);
          else props.selectInfo(props.payInfo.mid);
        }}
      >
        <div class={"col_flexible"}>
          <div class="item_payer">{memberList.name(props.payInfo.mid)}</div>
        </div>
        <div class={"col_money"}>{formatMoney(payMoney)}</div>
        <div class={"col_money"}>{formatMoney(useMoney)}</div>
        <div class={"col_money " + (totalMoney > 0 ? "take" : "send")}>
          {formatMoney(totalMoney)}
        </div>
      </div>
      <Show when={props.selected}>
        <div class="info_detail">
          <Show when={payMoney > 0}>
            <div class="title">{TEXT.result.label5}</div>
            <For each={props.payInfo.pay}>
              {(pay) => (
                <div class="info">
                  {paymentList.memo(pay.pid)} ... {formatMoney(pay.money)}
                </div>
              )}
            </For>
          </Show>
          <Show when={useMoney > 0}>
            <div class="title">{TEXT.result.label6}</div>
            <For each={props.payInfo.use}>
              {(use) => (
                <div>
                  {paymentList.memo(use.pid)} ... {formatMoney(use.money)}
                </div>
              )}
            </For>
          </Show>
          <div class="title">
            {totalMoney >= 0
              ? `총 받을돈: ${formatMoney(payMoney)} - ${formatMoney(
                  useMoney
                )} = `
              : `총 보낼돈: ${formatMoney(useMoney)} - ${formatMoney(
                  payMoney
                )} = `}
            {formatMoney(Math.abs(totalMoney))}
          </div>
        </div>
      </Show>
    </div>
  );
}
