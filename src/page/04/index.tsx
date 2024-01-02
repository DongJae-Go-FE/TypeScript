import React from "react";

//타입스크립트 복습 1일차

const Day4 = () => {
  //타입 확정하기 Narrowing & Assertion

  function 내함수(x: number | string) {
    return x + 1; //에러남
  }
  // 유니온 타입은 일반적으로 조작을 못하도록 막음

  //해결책
  //1. 타입을 하나로 Narrowing을 해주거나
  //2. Assert 해주거나

  //1. Type Narrowing

  function 내함수2(x: number | string) {
    if (typeof x === "number") {
      return x + 1;
    } else if (typeof x === "string") {
      return x + 1;
    } else {
      return 0;
    }
  }

  //2. Type Assertion
  // 이 변수명을 as ~~ 물결표로 생각해주ㅅ[여
  //변수명 as number // as 키워드를 사용해라

  function 내함수3(x: number | string) {
    return (x as number) + 1;
  }

  //나는 이변수를 무조건 number라 주장을 하겠습니다!

  //as 키워드의 특징
  //1. as 키워드는 union 타입 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할을 수행합니다(number 타입을 as string으로 바꾸면 에러 날걸?)
  //2. 실은 그냥 타입실드 임시 해제용입니다. 실제 코드 실행결과는 as 있을 때나 없을 때나 동일
  //3. as는 주장만 해주는 거지 실제로 타입을 바꿔주지는 않는다.

  //진짜 중요한 순간에만 써라
  //1. 왜 타입에러가 나는지 정말 모르겠는 사오항에 임시로 에러해결용으로 사용하거나
  //2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때

  function 클리닝함수(a: (string | number)[]): number[] {
    return a.map((item) => {
      return Number(item);
    });
  }

  클리닝함수(["1", 2, "3"]);

  function 만들함수(x: { subject: string | string[] }) {
    if (typeof x === "string") {
      return x;
    } else {
      return x.subject[x.subject.length - 1];
    }
  }

  return <></>;
};

export default Day4;
