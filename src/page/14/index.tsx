import React from "react";

//타입스크립트 복습 2일차

const Day14 = () => {
  //타입을 파라미터로 입력하는 Generic

  function 함수(x: unknown[]) {
    return x[0];
  }

  let a = 함수([4, 2]);
  console.log(a);

  //타입스크립트는 타입을 알아서 변경해주지 않습니다.
  //스마트하게 숫자가 리턴이 된다면 넘버 타입으로 변환을 안해주고 문자가 리턴을 하면 자동으로 문자로 리턴을 안해줍니다.

  // 함수에 불확실한 unkown, any, union 타입을 지정하면 나오는 값도 똑같고 이 때문에 일어나는 문제들이 많다
  //해결책
  //1. 네로잉을 잘하거나
  //2. 애초에 함수에 타입을 파라미터로 미리 입력하는 방법도 있습니다 이를 제네릭 이라고 합니다

  //Generic 적용한 함수만들기
  // 함수에 <> 이런 괄호를 열면 파라미터를 입력할 수 있습니다.
  //근데 여기 안에 타입만 입력할 수 있습니다. 타입파라미터 문법임

  function 타입파라미터<MyType>(x: MyType[]): MyType {
    return x[0];
  }

  let a1 = 타입파라미터<number>([4, 2]); // 타입파라미터(x:number):number{} 이런식으로 동작
  let a2 = 타입파라미터<string>(["kim", "park"]); //타입파라미터(x:string):string{} 이런식으로 동작

  //아무튼 결론 Generic을 쓰먄 여러분이 정한 타입을 return 값으로 뱉는 함수를 제작가능한 것 <> 문법만 잘쓰면 됩니다.

  //실은 함수 사용시 꼭 <> 안써도 알아서 기본 타입을 유추해서 집어넣어줍니다

  // 이러면 위에 선언을 했기때문에 그냥 적용이 됩니다.
  let a3 = 타입파라미터([4, 2]);
  let b3 = 타입파라미터(["kim", "park"]);

  //그런데 왜 - 1은 불가능함?!?

  function 타입파라미터2<MyType>(x: MyType) {
    return x - 1;
  }

  let a4 = 타입파라미터2<number>(100);

  // 제네릭에 뭐가 들어올지 모르는데? 계산식인데 스트링값 들어오면 어쩌려고?

  // 그래서 제네릭 타입을 제한 할 수 있는 constraints

  // Generic 타입 제한하기 (constraints)
  // 제네릭 안에 extends 문법을 쓰면 넣을 수 있는 타입을 제한할 수 있습니다.
  // 그래서 MyType extends number 라고 쓰면 타입 파라미터에 넣을 수 있는 타입을 넘버로 제한압니다
  //interface 문법에 쓰는 extends와는 살짝 다른 느낌입니다.
  //그 extends는 복사인데 이번 extends는 number와 비슷한 속성을 가지고 있는지 if 문으로 체크하는 문법이라고 보면 됩니다.

  function 타입파라미터3<MyType extends number>(x: MyType) {
    return x - 1;
  }

  let a5 = 타입파라미터3<number>(100);
  // 오 이제 계산가능

  // 그럼 타입도 커스텀이 가능하니 얘도 커스텀 가능
  //언제나 커스텀 타입도 extends 가능

  interface lengthCheck {
    length: number;
  }

  function 타입파라미터4<MyType extends lengthCheck>(x: MyType) {
    return x.length; // .length 조작을 방지
  }

  let a = 타입파라미터4<string>("hello"); //가능
  let a = 타입파라미터4<number>(1234); //에러남

  function 문제<MyType extends lengthCheck>(a: MyType) {
    return a.length;
  }

  문제<string>("hello");
  문제<string[]>(["kim", "park"]);

  interface Animal {
    name: string;
    age: number;
  }

  let data = '{"name" : "dog", "age" : 1 }';

  function 제이슨변환<MyType>(a: string): MyType {
    return JSON.parse(a);
  }
  제이슨변환<Animal>(data);

  class Person<MyType> {
    name;
    constructor(a: MyType) {
      this.name = a;
    }
  }
  let a6 = new Person<string>("어쩌구");
  a6.name; //any 타입이 되었넹

  return <></>;
};

export default Day14;
