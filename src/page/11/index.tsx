import React from "react";

//타입스크립트 복습 1일차

const Day11 = () => {
  //rest 파라미터
  //파라미터 갯수를 모를때 ...
  //- rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있습니다.
  //- rest 파라미터자리에 집어넣은 값들은 전부 [ ] 안에 담겨있습니다. 출력해보시면 진짜임

  function 전부더하기(...a: number[]) {
    //rest 파라미터는 항상 배열이기 때문
    console.log(a);
  }

  전부더하기(1, 2, 3, 4, 5);

  //Spread operator

  let arr = [3, 4, 5];
  let arr2 = [1, 2, ...arr];
  console.log(arr2);

  //Destructuring
  let 사람 = { student: true, age: 20 };
  let student = 사람.student;
  let age = 사람.age;

  //위처럼 복잡한 걸

  let { student, age } = { student: true, age: 20 };
  let [a, b] = ["안녕", 100];

  let person: { student: boolean; age: number } = { student: true, age: 20 };

  function 함수({ student, age }: { student: boolean; age: number }) {
    console.log(student, age);
  }
  함수({ student: true, age: 20 });

  function 함수2({
    user,
    comment,
    admin,
  }: {
    user: string;
    comment: number[];
    admin: boolean;
  }) {
    console.log(user, comment, admin);
  }

  함수2({ user: "kim", comment: [3, 5, 4], admin: false });

  return <></>;
};

export default Day11;
