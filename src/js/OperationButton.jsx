import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation }) {
  return (
    <button className=" outline-0 text-orange-500 text-4xl pointer rounded-2xl   hover:bg-slate-500 "
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}