import React from "react";
import { JsxElement } from "typescript";

//타입스크립트 복습 2일차

type AppProps = {
  name: string;
};

const Day15 = (props: AppProps): JsxElement => {
  //React + TypeScript 사용할 때 알아야할 점
  //변수, 함수만들 때 타입지정하면 끝임

  //파일 jsx => tsx  js => ts

  //1.jsx 표현하는 타입 변수에 담기
  let 박스: JsxElement = <div></div>;

  return <></>;
};

//2.컴포넌트 타입지정
function Profile(): JsxElement {
  return <div>프로필입니다.</div>;
}

//3. 프롭스 타입지정 잘해라

//4. state 타입지정

//제네릭 처럼 넣어라
const [let, setLet] = useState<string | number>("kim");
export default Day15;
