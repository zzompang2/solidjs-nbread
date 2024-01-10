import { ssr, ssrHydrationKey, escape, createComponent } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/web/dist/server.js';
import { c as calculateNBread, S as SendingItem, P as PayInfoItem } from './calculate-c964e4e3.mjs';
import { createSignal, For } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/dist/server.js';
import { a as TEXT } from './signal-fbe3bbae.mjs';
import 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/store/dist/server.js';

const _tmpl$ = ["<div", ' class="ctn"><div class="ctn_header"><div class="subtitle">', '</div><div class="title">', '</div></div><div class="ctn_body"><div class="result_scroll"><div class="ctn_sending"><div class="table"><span class="col_flexible">', '</span><span style="', '"> </span><span class="col_flexible">', '</span><span class="col_money">', '</span></div><div class="list">', '</div><button>\uD14D\uC2A4\uD2B8\uB85C \uBCF5\uC0AC\uD558\uAE30</button></div><div class="middle_title">\uC544\uB798 \uD56D\uBAA9\uC744 \uD074\uB9AD\uD574\uC11C \uB514\uD14C\uC77C\uD55C \uC815\uBCF4\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694.</div><div class="table"><span class="col_flexible">', '</span><span class="col_money">', '</span><span class="col_money">', '</span><span class="col_money">', '</span></div><div class="list">', "</div></div></div></div>"];
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

export { Result as default };
//# sourceMappingURL=result.mjs.map
