import { createSlice } from "@reduxjs/toolkit"

// action value
// const PLUS_ONE = 'app/counter/PLUS_ONE'
// const MINUS_ONE = 'app/counter/MINUS_ONE'
// const PLUS_N = 'app/counter/PLUS_N'
// const MINUS_N = 'app/counter/MINUS_N'


// action creator : action value를 return하는 함수
// export const plusOne = () =>{
//     return{
//         type:PLUS_ONE
//     }
// }

// export const minusOne = () =>{
//     return{
//         type:MINUS_ONE
//     }
// }

// export const plusN = (payload) =>{
//     return{
//         type:PLUS_N,
//         payload: payload
//     }
// }

// export const minusN = (payload) =>{
//     return{
//         type:MINUS_N,
//         payload: payload
//     }
// }

// 초기 상태값 (state)
const initialState = {
    number : 0
}
// const [number,setNumber] = useState(0) 과 같은말이다.

// 리듀서 : 'state'에 변화를 일으키는 함수
// (1) state를 action의 type에 따라 변경하는 함수

// input : state, action
// action 객체라는 것은 action type을 payload만큼 처리하는 것이다
// ex : payload가 3이다. 3만큼을 plus해라
// const counter = (state = initialState, action) => {
//     switch (action.type){
//         case PLUS_ONE:
//             return {
//                 number : state.number + 1
//             }
//         case MINUS_ONE:
//             return {
//                 number : state.number -1
//             }
//         case PLUS_N:
//             return {
//                 number : state.number + action.payload
//             }
//         case MINUS_N:
//             return {
//                 number : state.number - action.payload
//             }
//         default:
//             return state;
//     }
// }

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        addNumber: (state,action) => {
            //로직을 만듦, 동시에 액션크리에이터
            state.number = state.number + action.payload
        },
        minusNumber: (state,action)=> {
            state.number = state.number - action.payload
        },
    }
})

// action creator 와 reducer를 각각만들어줄 필요 없이 API 만 호출하면 된다.

export default counterSlice.reducer
export const {addNumber, minusNumber} = counterSlice.actions