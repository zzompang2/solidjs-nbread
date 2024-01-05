import { createStore } from "solid-js/store";
import { createSignal } from "solid-js";
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
    return this.list.find((m) => m.id === id)?.name;
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
    return this.list.find((p) => p.id === id)?.memo || "(내용 없음)";
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
    title: "정산할 사람들의 이름을 입력해주세요!",
    alert_duplicate: "중복된 이름입니다.",
    button: "명 정산 시작",
    button_add: "추가",
    button_delete: "삭제",
    placeholder: "이름 입력 후 엔터"
  },
  money: {
    title: "결제한 내역들을 입력해주세요!",
    button: "정산 결과 보기",
    button_add: "추가하기",
    button_delete: "삭제",
    back: "처음부터 다시 시작하기",
    backWarning: "입력한 결제 내역이 모두 지워집니다. 정말 돌아가시겠어요?",
    label1: "결제한 사람",
    label2: "엔빵할 사람들",
    label3: "결제한 금액"
  },
  paymentItem: {
    allSelected: "전체",
    emptySelected: "(엔빵 대상자들을 선택해주세요)",
    moneyUnit: "원",
    placeholderMemo: "내용을 입력해주세요(점심식사, 커피 등)"
  },
  result: {
    title: "엔빵 완료!",
    back: "결제 내역 수정하기",
    label1: "보내는 사람",
    label2: "받는 사람",
    label3: "보낼 돈",
    label4: "이름",
    label5: "결제한 돈",
    label6: "사용한 돈",
    label7: "받을/보낼돈"
  }
};
var TabMenu = /* @__PURE__ */ function(TabMenu2) {
  TabMenu2[TabMenu2["MEMBER"] = 0] = "MEMBER";
  TabMenu2[TabMenu2["MONEY"] = 1] = "MONEY";
  TabMenu2[TabMenu2["RESULT"] = 2] = "RESULT";
  return TabMenu2;
}(TabMenu || {});
const [currentTab, setTab] = createSignal(TabMenu.MEMBER);
export {
  TEXT as T,
  TabMenu as a,
  currentTab as c,
  memberList as m,
  paymentList as p
};
