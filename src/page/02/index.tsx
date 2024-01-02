import React from "react";

//타입스크립트 복습 1일차

const Day2 = () => {
  //타입을 미리 정하기 애매할 때 (union type, any, unknown)

  //1. Union Type이란
  //해당 변수에는 string 또는 number가 들어올 수 있습니다 라고 두가지를 지정할 수 있게 하는 것을 유니온 타입이라고 합니다
  let 나이: number | string = 20;
  let 나이2: number | string = "20";
  var 어레이: (number | string)[] = [1, "2", 3]; // 배열에서는 타입 부분에()
  var 오브젝트: { data: number | string } = { data: "123" };

  //2. any 타입
  //쉽게 말하면 아무거나 삽입이 가능한 타입
  //막쓰면 버그날 때 찾기 힘드니 쓰지말 것
  //비상시 쓰는 변수 타입체크 해제기능에만 쓰세요

  //3.unknown 타입
  //아직 어떤 타입이 들어올지 모르는 경우, 다양한 타입을 집어 넣어야 하는 경우 사용

  let user = "kim";
  let age = undefined;
  let married = false;
  let 철수: (string | boolean | undefined)[] = [user, age, married];

  let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
  } = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
  };
  학교.score[4] = false;
  학교.friend = ["Lee", 학교.teacher];
  return <></>;
};

export default Day2;
