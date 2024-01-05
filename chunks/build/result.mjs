import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { d as calculateNBread, b as TEXT, S as SendingItem, e as PayInfoItem } from '../nitro/node-server.mjs';
import { createSignal, For } from 'solid-js';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'seroval';
import 'seroval-plugins/web';
import 'solid-js/web/storage';
import 'solid-js/store';

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
