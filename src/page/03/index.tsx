import React from "react";

//타입스크립트 복습 1일차

const Day3 = () => {
  //함수에 타입 지정하는 법 & void 타입

  function 내함수(x: number): number {
    return x * 2;
  }
  //1. 함수로 들어오는 파라미터에 타입을 지정하고 싶으면 x:타입 이런식으로 지정을 해준다.
  //- 파라미터에 타입을 지정하면 필수 파라미터가 됩니다.
  //2. 함수 옆에 타입을 지정을 해주면 return 하는 값의 타입을 지정해줍니다.

  //3.함수는 void 타입이 존재
  //void 롤 공허의 지팡이 생각 아무것도 없는 공허함
  //return 할 자료가 없는 함수 타입을 지정을 한다.

  function 내함수(x: number): void {
    return x * 2; //여기서 에러남
  }
  //함수에 return 방지장치를 주고 싶을 때 void 타입을 활용

  function 내함수2(x?: number) {}
  내함수2(); //가능
  내함수2(2); //가능
  //옵셔널 체이닝
  //파라미터가 들어올 수도 있고 없을 수도 있기 때문에
  // 해석하면 x:number | undefined

  //유니온도 있지만 유니온 타입일 경우 자료 조작을 금지
  function 자릿수세기(x: number | string) {
    return x + 1;
  }
  return <></>;
};

export default Day3;
