import { createStore } from 'solid-js/store';
import { createSignal } from 'solid-js';

class List {
  constructor() {
    [this._list, this.set] = createStore(Array());
    this.id = 0;
  }
  get list() {
    return this._list;
  }
  get count() {
    return this.list.length;
  }
  delete(id) {
    this.set((list) => list.filter((elem) => elem.id !== id));
  }
  reset() {
    this.set([]);
    this.id = 0;
  }
}
class MemberList extends List {
  exist(name) {
    return this.list.map((m) => m.name).indexOf(name) !== -1;
  }
  add(name) {
    this.set((list) => [...list, {
      id: ++this.id,
      name
    }]);
  }
  name(id) {
    var _a;
    return (_a = this.list.find((m) => m.id === id)) == null ? void 0 : _a.name;
  }
}
class PaymentList extends List {
  add(members, money = 0) {
    this.set((list) => [...list, {
      id: ++this.id,
      payer: members[0],
      money,
      members,
      memo: ""
    }]);
    return this.id;
  }
  delete() {
    if (this.list.length == 1)
      return false;
    this.set((list) => list.slice(0, -1));
    return true;
  }
  change(id, key, value) {
    this.set((p) => p.id === id, key, value);
  }
  updateMember(id, memberId) {
    const payment = this.list.find((p) => p.id === id);
    if (payment) {
      if (payment.members.find((mid) => mid === memberId))
        this.change(id, "members", payment.members.filter((mid) => mid !== memberId));
      else
        this.change(id, "members", [...payment.members, memberId].sort());
    }
  }
  selectAll(id, list) {
    this.change(id, "members", list.list.map((m) => m.id));
  }
  unselectAll(id) {
    this.change(id, "members", []);
  }
  memo(id) {
    var _a;
    return ((_a = this.list.find((p) => p.id === id)) == null ? void 0 : _a.memo) || "(\uB0B4\uC6A9 \uC5C6\uC74C)";
  }
  isValid() {
    if (this.count === 0)
      return false;
    for (let i = 0; i < this.list.length; i++) {
      const p = this.list[i];
      if (p.money <= 0)
        return false;
      if (p.members.length === 0)
        return false;
    }
    return true;
  }
}
const memberList = new MemberList();
const paymentList = new PaymentList();
const TEXT = {
  member: {
    title: "\uC815\uC0B0\uD560 \uC0AC\uB78C\uB4E4\uC758 \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694!",
    alert_duplicate: "\uC911\uBCF5\uB41C \uC774\uB984\uC785\uB2C8\uB2E4.",
    button: "\uBA85 \uC815\uC0B0 \uC2DC\uC791",
    button_add: "\uCD94\uAC00",
    button_delete: "\uC0AD\uC81C",
    placeholder: "\uC774\uB984 \uC785\uB825 \uD6C4 \uC5D4\uD130"
  },
  money: {
    title: "\uACB0\uC81C\uD55C \uB0B4\uC5ED\uB4E4\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694!",
    button: "\uC815\uC0B0 \uACB0\uACFC \uBCF4\uAE30",
    button_add: "\uCD94\uAC00\uD558\uAE30",
    button_delete: "\uC0AD\uC81C",
    back: "\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC2DC\uC791\uD558\uAE30",
    backWarning: "\uC785\uB825\uD55C \uACB0\uC81C \uB0B4\uC5ED\uC774 \uBAA8\uB450 \uC9C0\uC6CC\uC9D1\uB2C8\uB2E4. \uC815\uB9D0 \uB3CC\uC544\uAC00\uC2DC\uACA0\uC5B4\uC694?",
    label1: "\uACB0\uC81C\uD55C \uC0AC\uB78C",
    label2: "\uC5D4\uBE75\uD560 \uC0AC\uB78C\uB4E4",
    label3: "\uACB0\uC81C\uD55C \uAE08\uC561"
  },
  paymentItem: {
    allSelected: "\uC804\uCCB4",
    emptySelected: "(\uC5D4\uBE75 \uB300\uC0C1\uC790\uB4E4\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694)",
    moneyUnit: "\uC6D0",
    placeholderMemo: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694(\uC810\uC2EC\uC2DD\uC0AC, \uCEE4\uD53C \uB4F1)"
  },
  result: {
    title: "\uC5D4\uBE75 \uC644\uB8CC!",
    back: "\uACB0\uC81C \uB0B4\uC5ED \uC218\uC815\uD558\uAE30",
    label1: "\uBCF4\uB0B4\uB294 \uC0AC\uB78C",
    label2: "\uBC1B\uB294 \uC0AC\uB78C",
    label3: "\uBCF4\uB0BC \uB3C8",
    label4: "\uC774\uB984",
    label5: "\uACB0\uC81C\uD55C \uB3C8",
    label6: "\uC0AC\uC6A9\uD55C \uB3C8",
    label7: "\uBC1B\uC744/\uBCF4\uB0BC\uB3C8"
  }
};
var TabMenu = /* @__PURE__ */ function(TabMenu2) {
  TabMenu2[TabMenu2["MEMBER"] = 0] = "MEMBER";
  TabMenu2[TabMenu2["MONEY"] = 1] = "MONEY";
  TabMenu2[TabMenu2["RESULT"] = 2] = "RESULT";
  return TabMenu2;
}(TabMenu || {});
const [currentTab, setTab] = createSignal(TabMenu.MEMBER);

export { TabMenu as T, TEXT as a, currentTab as c, memberList as m, paymentList as p };
//# sourceMappingURL=signal-fbe3bbae.mjs.map
