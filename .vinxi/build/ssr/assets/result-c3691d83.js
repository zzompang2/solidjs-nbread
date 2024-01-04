import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from "solid-js/web";
/* empty css                 */import { createSignal, Show, For } from "solid-js";
import { a as TEXT, m as memberList, p as paymentList } from "./signal-1623ee26.js";
import { A as Alert } from "./alert-2b4bdc3f.js";
import { P as PaymentItem } from "./paymentItem-c160847c.js";
import { c as calculateNBread, S as SendingItem, P as PayInfoItem } from "./calculate-3ddee196.js";
const calculation = "";
const _tmpl$$2 = ["<div", ' class="wrap">', "</div>"], _tmpl$2$1 = ["<div", ' class="ctn"><div class="ctn_header"><div class="title">', "</div><button>", '</button></div><div class="ctn_body"><div class="member_list">', '</div><form class="member_input"><div class="wrap"><input type="text"', '><button type="submit">', "</button></div></form></div><!--$-->", "<!--/--></div>"], _tmpl$3 = ["<div", ' class="guide">이름을 입력하고 [추가]버튼을 눌러보세요!</div>'], _tmpl$4 = ["<button", ' class="button_delete">', "</button>"], _tmpl$5 = ["<span", ' class="item"><span>', "</span><!--$-->", "<!--/--></span>"];
function Member() {
  const [alert, setAlert] = createSignal({
    show: false,
    message: ""
  });
  const [selectedName, selectName] = createSignal(0);
  return ssr(_tmpl$2$1, ssrHydrationKey(), escape(TEXT.member.title), escape(memberList.count) + escape(TEXT.member.button), escape(createComponent(Show, {
    get when() {
      return memberList.count !== 0;
    },
    get fallback() {
      return ssr(_tmpl$3, ssrHydrationKey());
    },
    get children() {
      return ssr(_tmpl$$2, ssrHydrationKey(), escape(createComponent(For, {
        get each() {
          return memberList.list;
        },
        children: (member) => ssr(_tmpl$5, ssrHydrationKey(), escape(member.name), escape(createComponent(Show, {
          get when() {
            return selectedName() === member.id;
          },
          get children() {
            return ssr(_tmpl$4, ssrHydrationKey(), escape(TEXT.member.button_delete));
          }
        })))
      })));
    }
  })), ssrAttribute("placeholder", escape(TEXT.member.placeholder, true), false), escape(TEXT.member.button_add), escape(createComponent(Alert, {
    get trigger() {
      return alert().show;
    },
    get message() {
      return alert().message;
    }
  })));
}
const _tmpl$$1 = ["<div", ' class="ctn"><div class="ctn_header"><div class="subtitle">', '</div><div class="title">', "</div><button>", '</button></div><div class="payment_list"><div class="table"><span class="col_name">', '</span><span class="col_member">', '</span><span class="col_money">', '</span></div><div class="items"><!--$-->', '<!--/--><div class="button_list"><button class="button_add">', '</button><button class="button_delete">', "</button></div></div></div><!--$-->", "<!--/--></div>"], _tmpl$2 = ["<div", ' class="guide">결제 내역을 추가해보세요!</div>'];
function Money() {
  const [selectedItem, selectItem] = createSignal(0);
  const [alert, setAlert] = createSignal(false);
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(TEXT.money.back), escape(TEXT.money.title), escape(TEXT.money.button), escape(TEXT.money.label1), escape(TEXT.money.label2), escape(TEXT.money.label3), escape(createComponent(Show, {
    get when() {
      return paymentList.count !== 0;
    },
    get fallback() {
      return ssr(_tmpl$2, ssrHydrationKey());
    },
    get children() {
      return createComponent(For, {
        get each() {
          return paymentList.list;
        },
        children: (payment) => createComponent(PaymentItem, {
          payment,
          get selected() {
            return selectedItem() === payment.id;
          },
          select: selectItem
        })
      });
    }
  })), escape(TEXT.money.button_add), escape(TEXT.money.button_delete), escape(createComponent(Alert, {
    get trigger() {
      return alert();
    },
    message: "채워지지 않은 정보가 있습니다."
  })));
}
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
  Member as M,
  Result as R,
  Money as a
};
