import { memberList, paymentList } from "./data";

interface PayInfo {
  mid: number; // id of member
  pay: number; // 총 결제한 금액
  use: number; // 총 사용한 금액
  bonus: number; // 소수점 올림하면서 생긴 차액. 결제자만 존재
}

/**
 * paymentList 정보를 바탕으로 payInfoList 만든다.
 *
 * input:
 * { id: 1, payer: 1, money: 500, members: [1, 2, 3] }
 * { id: 2, payer: 1, money: 500, members: [1, 2, 3] }
 *
 * output:
 * { mid: 1, pay: 1000, use: 334, bonus: 2 }
 * { mid: 2, pay:    0, use: 334, bonus: 0 }
 * { mid: 3, pay:    0, use: 334, bonus: 0 }
 */
const createPayInfoList = (): PayInfo[] => {
  let result: PayInfo[] = memberList.list.map((m) => ({
    mid: m.id,
    pay: 0,
    use: 0,
    bonus: 0,
  }));

  paymentList.list.forEach(({ payer, money, members }) => {
    const usersNum = members.length;

    // bonus: 나누어 떨어지지 않을 때 올림하여 생긴 차액
    // dividedMoney:
    const bonus = (usersNum - (money % usersNum)) % usersNum;
    const dividedMoney = (money + bonus) / usersNum;

    result = result.map((res) =>
      res.mid === payer
        ? { ...res, pay: res.pay + money, bonus: res.bonus + bonus }
        : res
    );

    members.forEach((mid) => {
      result = result.map((res) =>
        res.mid === mid ? { ...res, use: res.use + dividedMoney } : res
      );
    });
  });

  return result;
};

const craeteSubsetList = (
  moneyList: {
    mid: number;
    money: number;
    included: boolean;
  }[]
) => {
  const result: {
    mid: number;
    money: number;
  }[][] = [];
  const subsetList: number[][] = [[]];

  /**
   * moneyList 의 인덱스 배열의 모든 부분집합을 구한다.
   *
   * input: [0, 1, 2]
   * output: [[], [0], [1], [0, 1], [2], [0, 2], [1, 2], [1, 2, 3]]
   */
  for (let i = 0; i < moneyList.length; i++) {
    const subsetNum = subsetList.length;
    for (let j = 0; j < subsetNum; j++) {
      const subset = subsetList[j];
      subsetList.push([...subset, i]);
    }
  }

  /**
   * 부분집합 중에서 money 의 합이 0이 되는 애들을 구한다.
   *
   * 차례대로 합이 0이 되는지 확인한다.
   * 합이 0 이라면 해당 부분집합을 result 에 넣는다.
   * result 에 포함된 멤버들을 제외한 부분집합 중에서 계속 확인한다.
   */
  loop: for (let i = 1; i < subsetList.length; i++) {
    const subset = subsetList[i];
    let sum = 0;
    for (let j = 0; j < subset.length; j++) {
      if (moneyList[subset[j]].included) continue loop;
      sum += moneyList[subset[j]].money;
    }
    if (sum === 0) {
      const elem: {
        mid: number;
        money: number;
      }[] = [];
      subset.forEach((idx) => {
        const { included, ...others } = moneyList[idx];
        elem.push(others);
        moneyList[idx].included = true;
      });
      result.push(elem);
    }
  }
  return result;
};

export const calculateNBread = () => {
  // e.g. [{ mid: 1, pay: 1000, use: 334, bonus: 2 } ... ]
  const payInfoList: PayInfo[] = createPayInfoList();

  // e.g. [{ mid: 1, money: -668, included: false } ... ]
  const moneyList = payInfoList.map((res) => ({
    mid: res.mid,
    money: res.use - res.pay - res.bonus,
    included: false,
  }));

  // e.g. [[{ mid: 1, money: -668}, {mid: 2, money: 668}] ... ]
  const sumZeroSubsetList = craeteSubsetList(moneyList);
  console.log("sumZeroSubsetList", sumZeroSubsetList);

  const moneyFlows = []; /* payer, payee 쌍의 집합 */
  // for (let i = 0; i < sumZeroSubsetList.length; i++) {}
  sumZeroSubsetList.forEach((subset) => {
    // 지불 금액 많은 사람 순으로 정렬
    subset.sort((a, b) => (a.money < b.money ? 1 : -1));

    const mostPayer = subset[subset.length - 1];
    subset.pop();

    console.log("mostPayer", mostPayer);
    console.log("subset", subset);

    const result = [];

    for (let i = 0; i < subset.length; i++) {
      if (subset[0].money <= Math.abs(mostPayer.money)) {
        result.push({
          from: subset[0].mid,
          to: mostPayer.mid,
          money: subset[0].money,
        });
        mostPayer.money += subset[0].money;
        subset[0].money = 0;
      } else {
        result.push({
          from: subset[0].mid,
          to: subset[subset.length - 1].mid,
          money: subset[0].money,
        });
        subset[subset.length - 1].money += subset[0].money;
        subset[0].money = 0;
      }
      subset.sort((a, b) => (a.money < b.money ? 1 : -1));
    }

    console.log(result, mostPayer);

    return result;
  });
};
