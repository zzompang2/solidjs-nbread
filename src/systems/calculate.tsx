import { memberList, paymentList } from "./data";

interface PayInfo {
  mid: number; // member 의 id
  pay: { pid: number; money: number }[]; // 결제한 payments 리스트
  use: { pid: number; money: number }[]; // 사용한 payments 리스트
  money: number; // (총 사용한 금액) - (총 결제한 금액)
  bonus: number; // 나누어 떨어지지 않을 때 소수점 올림하면서 생긴 차액. 결제자에게만 생긴다
  included: boolean; // 부분집합 구할 때 사용(calculateSubsetList() 참고)
}

interface Sending {
  from: number; // 송금해야 하는 member id
  to: number; // 돈을 받아야 할 member id
  money: number;
}

/**
 * 최적의 엔빵 방법을 구한다.
 *
 * - 전체 송금 횟수를 최소화
 * - 나누어 떨어지지 않을 땐 1원 단위로 올림하여 결제자에게 차액(bonus)을 주기
 * - 부분집합 별로 가장 많은 금액을 결제한 사람은 송금하지 않기
 */
export const calculateNBread = (): {
  payInfoList: PayInfo[];
  sendingList: Sending[];
} => {
  // e.g. of element: PayInfo
  // { mid: 1, pay: [{1, 500}, {2, 500}], use: [{1, 167}, {2, 167}], money: -668, bonus: 2, ... }
  const payInfoList: PayInfo[] = createPayInfoList();

  // e.g. of element: money 합이 0이 되는 PayInfo 집합
  // [{ mid: 2, money: -1000, ... }, { mid: 3, money: 500, ... }, { mid: 4, money: 500, ... }]
  const sumZeroSubsetList: PayInfo[][] = calculateSubsetList(payInfoList);

  const sendingList: Sending[] = [];

  // e.g. of element: Sending
  // { from: 3, to: 2, money: 500 }
  sumZeroSubsetList.forEach((subset) => {
    sendingList.push(...calculateSendingFlow(subset));
  });

  console.log("payInfoList", payInfoList);
  console.log("sendingList", sendingList);
  return { payInfoList, sendingList };
};

/**
 * paymentList 정보를 바탕으로 payInfo 리스트를 만든다.
 *
 * input(paymentList):
 * { id: 1, payer: 1, money: 500, members: [1, 2, 3] }
 * { id: 2, payer: 1, money: 500, members: [1, 2, 3] }
 *
 * output:
 * { mid: 1, pay: [{1, 500}, {2, 500}], use: [{1, 167}, {2, 167}], money: -1000, bonus: 2, ... }
 * { mid: 2, pay: [                  ], use: [{1, 167}, {2, 167}], money:   334, bonus: 0, ... }
 * { mid: 3, pay: [                  ], use: [{1, 167}, {2, 167}], money:   334, bonus: 0, ... }
 */
const createPayInfoList = (): PayInfo[] => {
  let result: PayInfo[] = memberList.list.map((m) => ({
    mid: m.id,
    pay: [],
    use: [],
    money: 0,
    bonus: 0,
    included: false,
  }));

  paymentList.list.forEach(({ id, payer, money, members }) => {
    const usersNum = members.length;

    // bonus: 나누어 떨어지지 않을 때 올림하여 생긴 차액
    // dividedMoney: 엔빵한 금액
    const bonus = (usersNum - (money % usersNum)) % usersNum;
    const dividedMoney = (money + bonus) / usersNum;

    // payer 를 찾아 업데이트
    result = result.map((res) =>
      res.mid === payer
        ? {
            ...res,
            pay: [...res.pay, { pid: id, money }],
            bonus: res.bonus + bonus,
          }
        : res
    );

    // user 를 찾아 업데이트
    members.forEach((mid) => {
      result = result.map((res) =>
        res.mid === mid
          ? { ...res, use: [...res.use, { pid: id, money: dividedMoney }] }
          : res
      );
    });
  });

  // 총 금액을 계산
  result = result.map((res) => ({
    ...res,
    money:
      res.use.reduce((sum, cur) => sum + cur.money, 0) -
      res.pay.reduce((sum, cur) => sum + cur.money, 0) -
      res.bonus,
  }));

  return result;
};

/**
 * [0...(n-1)] 의 모든 부분집합을 구한다.
 * 한 원소씩 더해진 순서로 만들어져야 한다.
 * (calculateSubsetList 함수 설명 참고)
 *
 * input: 3
 * output: [0, 1, 2] 의 부분집합들
 * [[], [0], [1], [0, 1], [2], [0, 2], [1, 2], [1, 2, 3]]
 */
const createIndexSubsetList = (n: number): number[][] => {
  const result: number[][] = [[]];

  for (let i = 0; i < n; i++) {
    const subsetNum = result.length;
    for (let j = 0; j < subsetNum; j++) {
      const subset = result[j];
      result.push([...subset, i]);
    }
  }

  return result;
};

/**
 * payInfoList 에서 money 의 합이 0 이 되는 부분집합들이 되도록 나눈다.
 * 최대한 많은 부분집합으로 나눠지도록 계산한다.
 *
 * indexSubset 을 만들 때 한 원소씩 포함하면서 만들었기 때문에
 * 나눠지지 못한 부분집합이 생길 걱정은 할 필요가 없다.
 * 예를 들어, [0, 1] 도 합이 0이고 [2, 3]도 합이 0인데
 * [0, 1, 2, 3]으로 만들어지진 않을까 걱정하지 않아도 된다는 뜻이다.
 *
 * input:
 * { mid: 1, money: -1500, ... }
 * { mid: 2, money: -1000, ... }
 * { mid: 3, money:   500, ... }
 * { mid: 4, money:   500, ... }
 * { mid: 5, money:  1500, ... }
 *
 * output:
 * [{ mid: 2, ... }, { mid: 3, ... }, { mid: 4, ... }]
 * [{ mid: 1, ... }, { mid: 5, ... }]
 */
const calculateSubsetList = (payInfoList: PayInfo[]) => {
  const result: PayInfo[][] = [];

  // [[], [0], [1], [0, 1], [2], [0, 2], [1, 2], [1, 2, 3], ... ]
  const indexSubsetList = createIndexSubsetList(payInfoList.length);

  for (let i = 1; i < indexSubsetList.length; i++) {
    const indexSet = indexSubsetList[i];

    if (!isSumZeroOrIncluded(payInfoList, indexSet)) continue;

    // indexSubset 을 실제 PayInfo 원소들로 이루어진 부분집합으로 만들어 result 에 넣기
    const payInfoSubset: PayInfo[] = [];
    indexSet.forEach((idx) => {
      payInfoList[idx].included = true; // 사용되었음을 표시
      payInfoSubset.push(payInfoList[idx]);
    });
    result.push(payInfoSubset);
  }
  return result;
};

/**
 * list 에서 indexSet 의 index 멤버들의 money 의 총합이 0 인지 확인한다.
 * 혹은 이미 완성된 부분집합에 포함된 멤버인 경우(included = true)에도 false 를 리턴한다.
 *
 * list: [{ money: -500, ... }, { money: 500, ... }, { money: 500, ... }]
 * indexSet: [0, 1] => return true;
 * indexSet: [1, 2] => return false;
 */
const isSumZeroOrIncluded = (list: PayInfo[], indexSet: number[]): boolean => {
  let sum = 0;
  for (let i = 0; i < indexSet.length; i++) {
    // 이미 완성된 부분집합에 포함된 멤버인 경우
    if (list[indexSet[i]].included) return false;
    sum += list[indexSet[i]].money;
  }
  if (sum === 0) return true;
  return false;
};

/**
 * 집합 내에서 송금 방식을 계산한다.
 *
 * 합이 0이 되도록 최대한 나눠진 집합이므로
 * 한 명 빼고는 모두 송금을 해야한다.
 *
 * 즉, result.length === (set.length - 1)
 */
const calculateSendingFlow = (set: PayInfo[]): Sending[] => {
  const result: Sending[] = [];

  // money 내림차순 정렬 (e.g. 700, 300, -1000, ...)
  set.sort((a, b) => (a.money < b.money ? 1 : -1));

  // mostPayer: 가장 많이 결제한 사람
  // mostPayer 는 송금에서 제외한다.
  const mostPayer = set[set.length - 1];
  set.pop();

  for (let i = 0; i < set.length; i++) {
    // 가능하다면 mostPayer 에게 우선적으로 송금
    // 그렇지 않다면 나머지 중 보낼 돈이 가장 적은 사람에게 송금
    if (set[0].money <= Math.abs(mostPayer.money)) {
      sendFromTo(set[0], mostPayer);
    } else {
      sendFromTo(set[0], set[set.length - 1]);
    }
    // 재정렬
    set.sort((a, b) => (a.money < b.money ? 1 : -1));
  }

  return result;

  function sendFromTo(from: PayInfo, to: PayInfo) {
    result.push({
      from: from.mid,
      to: to.mid,
      money: from.money,
    });
    to.money += from.money;
    from.money = 0;
  }
};
