// @refresh reload
import "../public/css/result.css";
import { createSignal, For } from "solid-js";
import PayInfoItem from "~/components/payInfoItem";
import SendingItem from "~/components/sendingItem";
import ArrowRight from "~/public/assets/icons/arrowRight";
import { calculateNBread } from "~/systems/calculate";
import { setTab, TabMenu } from "~/systems/signal";
import { TEXT } from "~/systems/text";

export default function Result() {
  const [selectedInfo, selectInfo] = createSignal(0);
  const [payInfoList, sendingList] = calculateNBread();
  console.log("payInfoList", payInfoList);
  console.log("sendingList", sendingList);

  return (
    <div class="container_body">
      <div class="container_header">
        <div class="back_message" onclick={() => setTab(TabMenu.MONEY)}>
          {TEXT.result.back}
        </div>
        <div class="title">{TEXT.result.title}</div>
      </div>

      <div class="container_sendings">
        <div class="table">
          <span class="section_1">{TEXT.result.label1}</span>
          <ArrowRight />
          <span class="section_2">{TEXT.result.label2}</span>
          <span class="section_3">{TEXT.result.label3}</span>
        </div>
        <div class="sending_list">
          <For each={sendingList}>
            {(sending) => <SendingItem sending={sending} />}
          </For>
        </div>
        <div class="table">
          <span class="section_payinfo">{TEXT.result.label4}</span>
          <span class="section_payinfo_money">{TEXT.result.label5}</span>
          <span class="section_payinfo_money">{TEXT.result.label6}</span>
          <span class="section_payinfo_money">{TEXT.result.label7}</span>
        </div>
        <div class="sending_list">
          <For each={payInfoList}>
            {(payInfo) => (
              <PayInfoItem
                payInfo={payInfo}
                selectedInfo={selectedInfo()}
                selectInfo={selectInfo}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
