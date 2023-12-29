import { Accessor, Setter, createSignal } from "solid-js";

class List<T> {
  id = 0;
  _list: Accessor<T[]>;
  set: Setter<T[]>;

  constructor() {
    [this._list, this.set] = createSignal(Array<T>());
  }

  get list() {
    return this._list();
  }

  get count(): number {
    return this.list.length;
  }
}

interface Member {
  id: number;
  name: string;
}

class MemberList extends List<Member> {
  exist(name: string): boolean {
    return this.list.map((m) => m.name).indexOf(name) !== -1;
  }

  add(name: string) {
    this.set((list) => [...list, { id: ++this.id, name }]);
  }

  delete(id: number) {
    this.set((list) => list.filter((m) => m.id !== id));
  }
}

interface Payment {
  id: number;
  payer: number;
  money: number;
  members: number[];
}

class PaymentList extends List<Payment> {
  add(payer: number, money: number, members: number[]) {
    this.set((list) => [...list, { id: ++this.id, payer, money, members }]);
  }

  delete(id: number) {
    this.set((list) => list.filter((p) => p.id !== id));
  }
}

export const DATA = {
  memberList: new MemberList(),
  paymentList: new PaymentList(),
};
