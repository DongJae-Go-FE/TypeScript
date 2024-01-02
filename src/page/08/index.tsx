import React from "react";

//타입스크립트 복습 1일차

const Day8 = () => {
  let 제목 = document.querySelector("#title");
  제목.innerHTML = "반갑소";

  //제목이 오류
  // 왜냐면 셀렉터로 html을 찾으면 타입이 Element | null 이기 때문에

  if (제목 != null) {
    제목.innerHTML = "반갑소";
  }
  //1. 네로잉

  if (제목 instanceof HTMLElement) {
    제목.innerHTML = "반갑소";
  }
  //2. instanceof 사용 instanceof 오른쪽이 HTML 타입인지 체크

  //3.  as HTMLElement;
  // 그냥 쓰지마

  if (제목?.innerHTML != undefined) {
    제목.innerHTML = "반갑소";
  }
  //4. 옵셔널 체이닝

  let 링크 = document.querySelector("#link");
  if (링크 instanceof HTMLElement) {
    링크.href = "https://kakao.com"; //에러남 ㅅㄱ
  }

  //이렇게 하면 에러남
  if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com"; //에러남 ㅅㄱ
  }

  // html 태그 종류별로 정확한 타입명칭이 있습니다.
  // a 태그는 HTMLAnchorElement
  // img 태그는 HTMLImageElement
  // h4 태그는 HTMLHeadingElement

  let 버튼 = document.getElementById("button");
  버튼.addEventListener("click", function () {
    console.log("안녕");
  });

  버튼?.addEventListener("click", function () {
    console.log("안녕");
  });

  return (
    <>
      <h4 id="title">안녕하세요</h4>
      <a href="naver.com">링크</a>
      <button id="button">버튼</button>
    </>
  );
};

export default Day8;
