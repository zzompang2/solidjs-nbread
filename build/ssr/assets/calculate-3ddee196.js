import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent } from "solid-js/web";
import { m as memberList, a as TEXT, p as paymentList } from "./signal-1623ee26.js";
import { Show, For } from "solid-js";
const result = "";
const _tmpl$$2 = ["<div", ' class="title">', "</div>"], _tmpl$2 = ["<div", ' class="info_detail"><!--$-->', "<!--/--><!--$-->", '<!--/--><div class="title"><!--$-->', "<!--/--><!--$-->", "<!--/--></div></div>"], _tmpl$3 = ["<div", '><div class="row_info"><div class="col_flexible"><div class="item_payer">', '</div></div><div class="col_money">', '</div><div class="col_money">', "</div><div", ">", "</div></div><!--$-->", "<!--/--></div>"], _tmpl$4 = ["<div", ' class="info"><!--$-->', "<!--/--> ... <!--$-->", "<!--/--></div>"], _tmpl$5 = ["<div", "><!--$-->", "<!--/--> ... <!--$-->", "<!--/--></div>"];
function PayInfoItem(props) {
  const payMoney = props.payInfo.pay.reduce((sum, cur) => sum + cur.money, 0) + props.payInfo.bonus;
  const useMoney = props.payInfo.use.reduce((sum, cur) => sum + cur.money, 0);
  const totalMoney = payMoney - useMoney;
  const formatMoney = (money) => `${String(money).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")} ${TEXT.paymentItem.moneyUnit}`;
  return ssr(_tmpl$3, ssrHydrationKey() + ssrAttribute("class", "payinfo_item" + (props.selected ? " selected" : ""), false), escape(memberList.name(props.payInfo.mid)), escape(formatMoney(payMoney)), escape(formatMoney(useMoney)), ssrAttribute("class", "col_money " + (totalMoney > 0 ? "take" : "send"), false), escape(formatMoney(totalMoney)), escape(createComponent(Show, {
    get when() {
      return props.selected;
    },
    get children() {
      return ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(Show, {
        when: payMoney > 0,
        get children() {
          return [ssr(_tmpl$$2, ssrHydrationKey(), escape(TEXT.result.label5)), createComponent(For, {
            get each() {
              return props.payInfo.pay;
            },
            children: (pay) => ssr(_tmpl$4, ssrHydrationKey(), escape(paymentList.memo(pay.pid)), escape(formatMoney(pay.money)))
          })];
        }
      })), escape(createComponent(Show, {
        when: useMoney > 0,
        get children() {
          return [ssr(_tmpl$$2, ssrHydrationKey(), escape(TEXT.result.label6)), createComponent(For, {
            get each() {
              return props.payInfo.use;
            },
            children: (use) => ssr(_tmpl$5, ssrHydrationKey(), escape(paymentList.memo(use.pid)), escape(formatMoney(use.money)))
          })];
        }
      })), totalMoney >= 0 ? `총 받을돈: ${escape(formatMoney(payMoney))} - ${escape(formatMoney(useMoney))} = ` : `총 보낼돈: ${escape(formatMoney(useMoney))} - ${escape(formatMoney(payMoney))} = `, escape(formatMoney(Math.abs(totalMoney))));
    }
  })));
}
const _tmpl$$1 = ["<svg", ' width="54" height="20" viewBox="0 0 54 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 9.5C15.7239 9.5 15.5 9.72386 15.5 10C15.5 10.2761 15.7239 10.5 16 10.5V9.5ZM38 10L33 7.11325V12.8868L38 10ZM16 10.5H33.5V9.5H16V10.5Z" fill="black"></path></svg>'];
function ArrowRight() {
  return ssr(_tmpl$$1, ssrHydrationKey());
}
const _tmpl$ = ["<div", ' class="sending_item"><div class="col_flexible">', "</div><!--$-->", '<!--/--><div class="col_flexible">', '</div><div class="col_money"><!--$-->', "<!--/--><!--$-->", "<!--/--></div></div>"];
function SendingItem(props) {
  return ssr(_tmpl$, ssrHydrationKey(), escape(memberList.name(props.sending.from)), escape(createComponent(ArrowRight, {})), escape(memberList.name(props.sending.to)), escape(String(props.sending.money).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")), ` ${escape(TEXT.paymentItem.moneyUnit)}`);
}
const calculateNBread = () => {
  const payInfoList = createPayInfoList();
  const sumZeroSubsetList = calculateSubsetList(payInfoList);
  const sendingList = [];
  sumZeroSubsetList.forEach((subset) => {
    sendingList.push(...calculateSendingFlow(subset));
  });
  return [payInfoList, sendingList];
};
const createPayInfoList = () => {
  let result2 = memberList.list.map((m) => ({
    mid: m.id,
    pay: [],
    use: [],
    money: 0,
    bonus: 0,
    included: false
  }));
  paymentList.list.forEach(({
    id,
    payer,
    money,
    members
  }) => {
    const usersNum = members.length;
    const bonus = (usersNum - money % usersNum) % usersNum;
    const dividedMoney = (money + bonus) / usersNum;
    result2 = result2.map((res) => res.mid === payer ? {
      ...res,
      pay: [...res.pay, {
        pid: id,
        money
      }],
      bonus: res.bonus + bonus
    } : res);
    members.forEach((mid) => {
      result2 = result2.map((res) => res.mid === mid ? {
        ...res,
        use: [...res.use, {
          pid: id,
          money: dividedMoney
        }]
      } : res);
    });
  });
  result2 = result2.map((res) => ({
    ...res,
    money: res.use.reduce((sum, cur) => sum + cur.money, 0) - res.pay.reduce((sum, cur) => sum + cur.money, 0) - res.bonus
  }));
  return result2;
};
const createIndexSubsetList = (n) => {
  const result2 = [[]];
  for (let i = 0; i < n; i++) {
    const subsetNum = result2.length;
    for (let j = 0; j < subsetNum; j++) {
      const subset = result2[j];
      result2.push([...subset, i]);
    }
  }
  return result2;
};
const calculateSubsetList = (payInfoList) => {
  const result2 = [];
  const indexSubsetList = createIndexSubsetList(payInfoList.length);
  for (let i = 1; i < indexSubsetList.length; i++) {
    const indexSet = indexSubsetList[i];
    if (!isSumZeroOrIncluded(payInfoList, indexSet))
      continue;
    const payInfoSubset = [];
    indexSet.forEach((idx) => {
      payInfoList[idx].included = true;
      payInfoSubset.push(payInfoList[idx]);
    });
    result2.push(payInfoSubset);
  }
  return result2;
};
const isSumZeroOrIncluded = (list, indexSet) => {
  let sum = 0;
  for (let i = 0; i < indexSet.length; i++) {
    if (list[indexSet[i]].included)
      return false;
    sum += list[indexSet[i]].money;
  }
  if (sum === 0)
    return true;
  return false;
};
const calculateSendingFlow = (set) => {
  const result2 = [];
  set.sort((a, b) => a.money < b.money ? 1 : -1);
  const mostPayer = set[set.length - 1];
  set.pop();
  for (let i = 0; i < set.length; i++) {
    if (set[0].money <= Math.abs(mostPayer.money)) {
      sendFromTo(set[0], mostPayer);
    } else {
      sendFromTo(set[0], set[set.length - 1]);
    }
    set.sort((a, b) => a.money < b.money ? 1 : -1);
  }
  return result2;
  function sendFromTo(from, to) {
    result2.push({
      from: from.mid,
      to: to.mid,
      money: from.money
    });
    to.money += from.money;
    from.money = 0;
  }
};
export {
  PayInfoItem as P,
  SendingItem as S,
  calculateNBread as c
};
