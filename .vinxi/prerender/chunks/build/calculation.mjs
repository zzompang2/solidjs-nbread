import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/web/dist/server.js';
import { Switch, Match, createSignal, Show, For } from 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/dist/server.js';
import { c as currentTab, T as TabMenu, a as TEXT, m as memberList, p as paymentList } from './signal-fbe3bbae.mjs';
import { A as Alert } from './alert-2b4bdc3f.mjs';
import { P as PaymentItem } from './paymentItem-2763de05.mjs';
import { c as calculateNBread, S as SendingItem, P as PayInfoItem } from './calculate-c964e4e3.mjs';
import 'file:///Users/ham/Downloads/2024_spring_individual%20project/n-bread2/node_modules/solid-js/store/dist/server.js';

const _tmpl$$3 = ["<div", ' class="wrap">', "</div>"], _tmpl$2$1 = ["<div", ' class="ctn"><div class="ctn_header"><div class="title">', "</div><button>", '</button></div><div class="ctn_body"><div class="member_list">', '</div><form class="member_input"><div class="wrap"><input type="text"', '><button type="submit">', "</button></div></form></div><!--$-->", "<!--/--></div>"], _tmpl$3 = ["<div", ' class="guide">\uC774\uB984\uC744 \uC785\uB825\uD558\uACE0 [\uCD94\uAC00]\uBC84\uD2BC\uC744 \uB20C\uB7EC\uBCF4\uC138\uC694!</div>'], _tmpl$4 = ["<button", ' class="button_delete">', "</button>"], _tmpl$5 = ["<span", ' class="item"><span>', "</span><!--$-->", "<!--/--></span>"];
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
      return ssr(_tmpl$$3, ssrHydrationKey(), escape(createComponent(For, {
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
const _tmpl$$2 = ["<div", ' class="ctn"><div class="ctn_header"><div class="subtitle">', '</div><div class="title">', "</div><button>", '</button></div><div class="payment_list"><div class="table"><span class="col_name">', '</span><span class="col_member">', '</span><span class="col_money">', '</span></div><div class="items"><!--$-->', '<!--/--><div class="button_list"><button class="button_add">', '</button><button class="button_delete">', "</button></div></div></div><!--$-->", "<!--/--></div>"], _tmpl$2 = ["<div", ' class="guide">\uACB0\uC81C \uB0B4\uC5ED\uC744 \uCD94\uAC00\uD574\uBCF4\uC138\uC694!</div>'];
function Money() {
  const [selectedItem, selectItem] = createSignal(0);
  const [alert, setAlert] = createSignal(false);
  return ssr(_tmpl$$2, ssrHydrationKey(), escape(TEXT.money.back), escape(TEXT.money.title), escape(TEXT.money.button), escape(TEXT.money.label1), escape(TEXT.money.label2), escape(TEXT.money.label3), escape(createComponent(Show, {
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
    message: "\uCC44\uC6CC\uC9C0\uC9C0 \uC54A\uC740 \uC815\uBCF4\uAC00 \uC788\uC2B5\uB2C8\uB2E4."
  })));
}
const _tmpl$$1 = ["<div", ' class="ctn"><div class="ctn_header"><div class="subtitle">', '</div><div class="title">', '</div></div><div class="ctn_body"><div class="result_scroll"><div class="ctn_sending"><div class="table"><span class="col_flexible">', '</span><span style="', '"> </span><span class="col_flexible">', '</span><span class="col_money">', '</span></div><div class="list">', '</div><button>\uD14D\uC2A4\uD2B8\uB85C \uBCF5\uC0AC\uD558\uAE30</button></div><div class="middle_title">\uC544\uB798 \uD56D\uBAA9\uC744 \uD074\uB9AD\uD574\uC11C \uB514\uD14C\uC77C\uD55C \uC815\uBCF4\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694.</div><div class="table"><span class="col_flexible">', '</span><span class="col_money">', '</span><span class="col_money">', '</span><span class="col_money">', '</span></div><div class="list">', "</div></div></div></div>"];
function Result() {
  const [selectedInfo, selectInfo] = createSignal(0);
  const [payInfoList, sendingList] = calculateNBread();
  console.log("payInfoList", payInfoList);
  console.log("sendingList", sendingList);
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(TEXT.result.back), escape(TEXT.result.title), escape(TEXT.result.label1), "width:54px", escape(TEXT.result.label2), escape(TEXT.result.label3), escape(createComponent(For, {
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
const _tmpl$ = ["<main", ">", "</main>"];
function Calculation() {
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Switch, {
    get children() {
      return [createComponent(Match, {
        get when() {
          return currentTab() === TabMenu.MEMBER;
        },
        get children() {
          return createComponent(Member, {});
        }
      }), createComponent(Match, {
        get when() {
          return currentTab() === TabMenu.MONEY;
        },
        get children() {
          return createComponent(Money, {});
        }
      }), createComponent(Match, {
        get when() {
          return currentTab() === TabMenu.RESULT;
        },
        get children() {
          return createComponent(Result, {});
        }
      })];
    }
  })));
}

export { Calculation as default };
//# sourceMappingURL=calculation.mjs.map
