import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber, plusOne } from "./redux/modules/counter";
import { minusOne } from "./redux/modules/counter";
import { plusN } from "./redux/modules/counter";
import { minusN } from "./redux/modules/counter";

function App() {
  const [number, setNumber] = useState(0);
  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!!
  // useSelector 사용

  const counter = useSelector((state) => {
    return state.counter;
  });

  // 실제로 넘버가 올라가나요 ? 를 확인하기 위해 useEffect 사용
  // useEffect(() => {
  //   console.log("number -> " + number);
  // }, [number]);

  // store에 접근하여 counter 내의 number 값을 변경하고 싶다 !!
  // useDispatch 사용
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            // 구조분해 할당
            const { value } = e.target;
            // setNumber(+e.target.value);
            setNumber(+value);
            // 앞에 +를 붙여주면 문자열로 들어온 값을 자동으로 숫자열로 변형해준다.
          }}
        />
      </div>
      <button
        onClick={() => {
          // +1을 해주는 로직을 써주면 된다.
          // dispatch({ type: PLUS_ONE });
          // dispatch(plusOne());
          dispatch(addNumber(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // dispatch({ type: MINUS_ONE });
          // dispatch(minusOne());
          dispatch(minusNumber(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
