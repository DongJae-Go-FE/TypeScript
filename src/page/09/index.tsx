import React from "react";

//타입스크립트 복습 1일차

const Day9 = () => {
  //class 필드값 타입지정

  class Person {
    data: number = 0;
  }

  let john = new Person();
  let kim = new Person();

  console.log(john.data);
  console.log(kim.data);

  john.data = "1"; // 이러면 애러남

  //constructor 타입지정
  class Person {
    constructor() {
      this.name = "kim";
      this.age = 20;
    }
  }

  //위에는 오류

  class Person2 {
    name;
    age;
    constructor(a: string) {
      this.name = a;
      this.age = 20;
    }
  }

  //미리 필드값을 만들어 준다

  class Person3 {
    add(숫자: number) {
      console.log(숫자 + 1);
    }
  }
  //메소드 타입지정

  class Car {
    model;
    price;
    constructor(a: string, b: number) {
      this.model = a;
      this.price = b;
    }
    tax(): number {
      return this.price / 10;
    }
  }

  let car1 = new Car("소나타", 3000);
  console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
  console.log(car1.tax()); //콘솔창 출력결과는 300

  return <></>;
};

export default Day9;
