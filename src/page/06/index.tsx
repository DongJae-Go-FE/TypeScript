import React from "react";

//타입스크립트 복습 1일차

const Day6 = () => {
  //Literal Types로 만드는 const 변수 유사품
  //어떤 변수는 1이라는 값만 가질 수 있게 제한하고 싶으면 어쩌죠.
  //자바스크립트 const 변수 쓰면 되겠군요. 근데 1 또는 0만 가질 수 있게 제한하고 싶으면 어쩌죠.
  //그 변수에 number 이런 식으로 타입을 지정하면 너무 광범위하지않습니까.
  //그럴 땐 Literal type을 선언하도록 합시다.
  //어떤 변수가 미리 골라놓은 데이터만 가질 수 있게 도와줍니다.

  let john: "대머리";
  let kim: "솔로";

  //이런식으로 할당을 하면 작성한 글자만 할당을 할 수 있다
  //특정 글자나 숫자만을 가질 수 있게 제한을 두는 타입을 literal type이라고 함

  let 방향: "left" | "right";
  방향 = "left";

  // | 기호로 여러개도 가능

  function 함수(a: "hello"): 1 | 0 | -1 {
    return 1;
  }
  함수("hello");
  //함수도 가능

  type Qwe = "가위" | "바위" | "보";
  function test(a: Qwe[]) {
    return a;
  }

  var 자료 = {
    name: "kim",
  };

  function 내함수(a: "kim") {}
  내함수(자료.name);

  //보통은 이렇게 하면 오류 왜? a는 "kim" 타입이지 자료.name 타입이 아니기 때문에

  var 자료2 = {
    name: "kim",
  } as const;

  function 내함수2(a: "kim") {}
  내함수2(자료2.name);

  //as const를 사용하면 오류가 안난다

  //as const의 효과
  //1.타입을 object의 value로 교체해준다
  //2.object 안의 모든 속성을 readoniy로 바꿔준다.
  return <></>;
};

export default Day6;
