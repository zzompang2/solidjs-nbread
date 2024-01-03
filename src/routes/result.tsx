// @refresh reload
import "../public/css/result.css";
import { createSignal, For } from "solid-js";
import PayInfoItem from "~/components/payInfoItem";
import SendingItem from "~/components/sendingItem";
import { calculateNBread } from "~/systems/calculate";
import { setTab, TabMenu } from "~/systems/signal";
import { TEXT } from "~/systems/text";

export default function Result() {
  const [selectedInfo, selectInfo] = createSignal(0);
  const [payInfoList, sendingList] = calculateNBread();
  console.log("payInfoList", payInfoList);
  console.log("sendingList", sendingList);

  return (
    <div class="ctn" onclick={() => selectInfo(0)}>
      <div class="ctn_header">
        <div class="subtitle" onclick={() => setTab(TabMenu.MONEY)}>
          {TEXT.result.back}
        </div>
        <div class="title">{TEXT.result.title}</div>
      </div>

      <div class="ctn_body">
        <div class="result_scroll">
          <div class="ctn_sending">
            <div class="table">
              <span class="col_flexible">{TEXT.result.label1}</span>
              <span style={{ width: "54px" }}> </span>
              <span class="col_flexible">{TEXT.result.label2}</span>
              <span class="col_money">{TEXT.result.label3}</span>
            </div>
            <div class="list">
              <For each={sendingList}>
                {(sending) => <SendingItem sending={sending} />}
              </For>
            </div>
          </div>
          <div class="middle_title">디테일한 정보 보기</div>
          <div class="table">
            <span class="col_flexible">{TEXT.result.label4}</span>
            <span class="col_money">{TEXT.result.label5}</span>
            <span class="col_money">{TEXT.result.label6}</span>
            <span class="col_money">{TEXT.result.label7}</span>
          </div>
          <div class="list">
            <For each={payInfoList}>
              {(payInfo) => (
                <PayInfoItem
                  payInfo={payInfo}
                  selected={selectedInfo() === payInfo.mid}
                  selectInfo={selectInfo}
                />
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
