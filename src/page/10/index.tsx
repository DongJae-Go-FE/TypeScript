import React from "react";

//타입스크립트 복습 1일차

const Day10 = () => {
  //Object에 타입지정하는 또다른 방법 interface

  interface Square {
    color: string;
    width: number;
  }
  // 보통 타입을 지정하는 방법과 똑같다
  let 네모: Square = { color: "red", width: 100 };

  //그러면 일반 오브젝트 타입 지정하는 거랑 뭔 차이임?
  //interface는 extends가 가능

  interface Student {
    name: string;
  }
  interface Teacher {
    name: string;
    age: number;
  }

  //이헐게 중복적인 것을

  interface Student2 {
    name: string;
  }
  interface Teacher2 extends Student2 {
    age: number;
  }

  //확장할 수 있다
  //즉 Student2 값을 Teacher2가 상속 받는다,

  //타입 선언과 다른 부분은 중복 선언을 하여 오버라이딩이 가능
  // 타입 선언은 중복 선언 불가

  //extend 할 때 object 안의 속성이 중복될 경우
  interface Animal {
    name: string;
  }
  interface Dog {
    name: number;
  }

  let 변수: Dog & Animal = { name: "멍멍" }; // 이거 오류남
  //그러나 둘다 타입이 같으면 그냥 하나로 합체함

  interface Mart {
    brand: string;
    serialNumber: number;
    model: string[];
  }

  let 상품: Mart = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
  };

  interface Mart2 {
    product: string;
    price: number;
  }

  let 장바구니: Mart2[] = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
  ];

  interface Card extends Mart2 {
    card: boolean;
  }

  interface MathObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
  }

  let 오브젝트: MathObj = {
    plus(a, b) {
      return a + b;
    },
    minus(a, b) {
      return a - b;
    },
  };

  return <></>;
};

export default Day10;
