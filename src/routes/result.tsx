// @refresh reload
import "../public/css/result.css";
import { createSignal, For } from "solid-js";
import PayInfoItem from "~/components/payInfoItem";
import SendingItem from "~/components/sendingItem";
import { calculateNBread } from "~/systems/calculate";
import { memberList } from "~/systems/data";
import { setTab, TabMenu } from "~/systems/signal";
import { TEXT } from "~/systems/text";

export default function Result() {
  const [selectedInfo, selectInfo] = createSignal(0);
  const [payInfoList, sendingList] = calculateNBread();
  console.log("payInfoList", payInfoList);
  console.log("sendingList", sendingList);

  const copyResultText = async () => {
    let result = sendingList.reduce((pre, sending) => {
      const sender = memberList.name(sending.from);
      const taker = memberList.name(sending.to);
      return pre + `${sender} --> ${taker} : ${sending.money}원\n`;
    }, "[N빵 정산 결과]\n\n");

    result += "\n(똑똑하게 정산하자! N-bread)";
    try {
      await navigator.clipboard.writeText(result);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

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
            <button onclick={() => copyResultText()}>텍스트로 복사하기</button>
          </div>
          <div class="middle_title">디테일한 정보</div>
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
