import React from "react";

//타입스크립트 복습 1일차

const Day7 = () => {
  //함수와 methods에 type alias 지정하는 법
  //function type 도 저장가능

  type NumOut = (x: number, y: number) => number;
  let ABC: NumOut = function (x, y) {
    return x + y;
  };

  type test = {
    name: string;
    age: number;
    plusOne(x: number): number;
    changeName: () => void;
  };

  let 회원정보: test = {
    name: "kim",
    age: 30,
    plusOne(x) {
      return x + 1;
    },
    changeName: () => {
      console.log("안녕");
    },
  };

  return <></>;
};

export default Day7;
