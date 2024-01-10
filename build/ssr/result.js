import { ssr, ssrHydrationKey, escape, createComponent } from "solid-js/web";
import { c as calculateNBread, S as SendingItem, P as PayInfoItem } from "./assets/calculate-3ddee196.js";
import { createSignal, For } from "solid-js";
import { a as TEXT } from "./assets/signal-1623ee26.js";
import "solid-js/store";
const _tmpl$ = ["<div", ' class="ctn"><div class="ctn_header"><div class="subtitle">', '</div><div class="title">', '</div></div><div class="ctn_body"><div class="result_scroll"><div class="ctn_sending"><div class="table"><span class="col_flexible">', '</span><span style="', '"> </span><span class="col_flexible">', '</span><span class="col_money">', '</span></div><div class="list">', '</div><button>텍스트로 복사하기</button></div><div class="middle_title">아래 항목을 클릭해서 디테일한 정보를 확인해보세요.</div><div class="table"><span class="col_flexible">', '</span><span class="col_money">', '</span><span class="col_money">', '</span><span class="col_money">', '</span></div><div class="list">', "</div></div></div></div>"];
function Result() {
  const [selectedInfo, selectInfo] = createSignal(0);
  const [payInfoList, sendingList] = calculateNBread();
  console.log("payInfoList", payInfoList);
  console.log("sendingList", sendingList);
  return ssr(_tmpl$, ssrHydrationKey(), escape(TEXT.result.back), escape(TEXT.result.title), escape(TEXT.result.label1), "width:54px", escape(TEXT.result.label2), escape(TEXT.result.label3), escape(createComponent(For, {
    each: sendingList,
    children: (sending) => createComponent(SendingItem, {
      sending
    })
  })), escape(TEXT.result.label4), escape(TEXT.result.label5), escape(TEXT.result.label6), escape(TEXT.result.label7), escape(createComponent(For, {
    each: payInfoList,
    children: (payInfo) => createComponent(PayInfoItem, {
      payInfo,
      get selected() {
        return selectedInfo() === payInfo.mid;
      },
      selectInfo
    })
  })));
}
export {
  Result as default
};
