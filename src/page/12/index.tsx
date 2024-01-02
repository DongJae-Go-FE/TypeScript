import React from "react";

//타입스크립트 복습 1일차

const Day12 = () => {
  //Narrowing 하면서 코드짜는 것도 힘든데 특히나
  //1. undefined 타입일 경우 처리하는거
  //2. 복잡한 object자료들 narrowing 하는거
  // 이게 제일 귀찮음

  //&& 연산자
  1 && null && 3; // null이 남음
  undefined && "안녕" && 100; // undefined 남음

  if (변수 && typeof strs === "string") {
  }

  function printAll(strs: string | undefined) {
    if (strs && typeof strs === "string") {
      console.log(s);
    }
  }

  //in 연산자로 object 자료 narrowing

  //if (이 파라미터가 a라는 속성을 안에 가지고 있냐)
  //이런 if문을 써도 narrowing이 가능하다는 뜻입니다.
  //if (키값 in object자료형) 이렇게 쓰면 됩니다.

  type Fish = { swim: string };
  type Bird = { fly: string };
  function 함수(animal: Fish | Bird) {
    if ("swim" in animal) {
      return animal.swim;
    }
    return animal.fly;
  }

  //class로부터 생산된 object라면 instanceof로 narrowing
  let 날짜 = new Date();
  if (날짜 instanceof Date) {
    console.log("참이에요");
  }

  //이러면 부모 클래스를 검사할 수 있다.


  //literal type이 있으면 narrowing 쉬움 
  type Car = {
    wheel: "4개";
    color: string;
  };
  type Bike = {
    wheel: "2개";
    color: string;
  };

  function 함수(x: Car | Bike) {
    if (x.wheel === "4개") {
      console.log("the car is " + x.color);
    } else {
      console.log("the bike is " + x.color);
    }
  }

  return <></>;
};

export default Day12;
