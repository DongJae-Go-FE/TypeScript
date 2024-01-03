import React from "react";
import { a, b } from "./data";
//타입스크립트 복습 2일차

declare let a: number;

const Day16 = () => {
  //외부 파일 이용시 declare & 이상한 특징인 ambient module

  //TS의 이상한 특징 : Ambient Module
  //(data.ts)
  type Age = number;
  let 나이: Age = 20;

  //index.ts;

  console.log(나이 + 1); //가능
  let 철수: Age = 30; //가능

  //   지금 같은 폴더에 아무데나 data.ts 만들고 타입, 변수 이런거 넣어보십시오.
  // 그럼 index.ts에서도 data.ts에 있던 변수와 타입을 자유롭게 사용가능합니다.
  // import export 그런거 안해도 같은 폴더에 있는 ts 파일은 그냥 사용가능합니다.
  // 왜냐면 그냥 ts 파일에 대충 입력한 변수와 타입들은 전부 global 변수 취급을 받습니다.
  // 전역으로 쓸 수 있는 파일을 전문용어로 ambient module 이라고 칭합니다.
  // (타입스크립트에서 let name 이라는 이름의 변수생성이 안되는 이유를 여기서 찾을 수 있습니다. 어디선가 기본으로 let name 이미 쓰고있음)

  //   반면에 import 혹은 export 키워드가 들어간 ts 파일은 다릅니다.
  // import / export 키워드가 적어도 하나 있으면 그 파일은 로컬 모듈이 되고
  // 거기 있는 모든 변수는 export를 해줘야 다른 파일에서 사용가능합니다.
  // 그래서 타입스크립트 파일이 다른 파일에 영향끼치는걸 막고싶으면 export 키워드를 강제로 추가하면 됩니다.

  return <></>;
};

export default Day16;
