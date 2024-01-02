import React from "react";

//타입스크립트 복습 1일차

const Day13 = () => {
  // 타입도 import export 해서 씁니다

  // a.ts -> b.ts 이렇게 정의된 타입을 가져다 쓰고 싶은 경우

  a.ts;

  export type Name = string | boolean;
  export type Age = (a: number) => number;

  b.ts;

  import { Name, Age } from "./a";
  let 이름: Name = "kim";
  let 함수: Age = (a) => {
    return a + 10;
  };

  return <></>;
};

export default Day13;
