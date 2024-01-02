import React from "react";

//타입스크립트 복습 1일차

const Day5 = () => {
  //타입도 변수에 담아쓰세요 type 키워드 써서 & readonly
  //1. Type Aliases

  let 동물: string | number | undefined;
  //너무 복잡함

  type Animal = string | number | undefined;
  let 동물2: Animal;

  //type 타입변수명 = 타입종류  -> 너무 코드가 길어지기 때문에 이런식으로 함 관습적으로 대문자로 작명
  //object도 가능

  type Man = {
    name: string;
    age: number;
  };
  let teacher: Man = { name: "koo", age: 20 };

  const 여친 = {
    name: "엠버",
  };
  여친.name = "유라"; //const 변수지만 에러안남
  //const는 재할당을 막을 뿐 objec 속성 바꾸는 것까지는 관여하지 않기 때문

  //readonly 키워드는 속성 왼쪽에 붙일 수 있으며 특정 속성을 잠궈줌

  type Girlfriend = {
    readonly name: string;
  };

  let 여친2: Girlfriend = {
    name: "엠버",
  };

  여친2.name = "유라"; //readonly라서 에러남

  type Square = {
    color?: string;
    width: number;
  };

  let 네모2: Square = {
    width: 100,
  };
  //color가 없어도 타입 부여가 가능한 이유!
  // 옵셔널 체이닝!!!!!! 중요 ? === 있어도 그만 없어도 그만

  //이런식으로 타입을 합칠 수 있다.
  type Name = string;
  type Age = number;
  type NewOne = Name | Age;

  // 오브젝트는 & 이걸로 합칠 수 있다.
  type PositionX = { x: number };
  type PositionY = { y: number };
  type XandY = PositionX & PositionY;
  let 좌표: XandY = { x: 1, y: 2 };

  //타입은 재지정이 불가능하다.
  type Name = string;
  type Name = number;

  type test = { color?: string; size: number; readonly postion: number[] };

  type Info = { name: string; phone: number; email: string };
  let asd: Info = { name: "kim", phone: 123, email: "abc@naver.com" };

  type test2 = Info | { young: boolean };
  return <></>;
};

export default Day5;
