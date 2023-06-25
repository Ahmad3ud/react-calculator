import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit }) {
  return (
    <button  className=" text-gray-200 rounded-full  text-4xl outline-0 hover:bg-slate-500 pointer"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}