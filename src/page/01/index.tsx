import React from "react";

//타입스크립트 복습 1일차

const Day1 = () => {
  //1.문자형 타입지정
  let 이름: string = "kim";

  //2.숫자형 타입지정
  let 나이: number = 20;

  //3.논리형 타입지정
  let 결혼했어: boolean = false;

  //4.array 타입지정
  let 부동산114: string[] = ["oh", "kar"];

  //5.object 타입지정
  let 정보: { age: number } = { age: 30 };

  
  // 그러나 이렇게 생략해도 괜찮음 변수는 자동적으로 타입을 부여
  let 이름2 = 'kim';
  let 나이2 = 20;
  
  return <></>;
};

export default Day1;
