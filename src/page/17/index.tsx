import React from "react";
import { Age } from "./test";

//타입스크립트 복습 2일차

const Day17 = () => {
  // d.ts
  // 타입정의 보관용 파일입니다.
  // ts파일에 다입 정의가 너무 길면 d.ts 파일을 만들기도 함
  // 가끔은 모든 타입을 정리 해놓은 레퍼런스용 d.ts 파일 쓰기도 함

  //   (tsconfig.json)

  // {
  //     "compilerOptions": {
  //         "target": "es5",
  //         "module": "es6",
  //         "declaration": true,
  //    declaration 이거 키면 자동으로 d.ts 파일 자동으로 만들어줌

  //      "typeRoots": ["./types"]  해당 경로에 만들 d.ts 파일은 글로벌 모듈이다
  //        대신 이거 따로 설정해놓으면 라이브러리 같은 거 타입 여기다 안두면 오류남
  //     }
  // }

  //d.ts 파일은 자동으로 글로벌 모듈 아님 로컬 모듈임
  return <></>;
};

export default Day17;
