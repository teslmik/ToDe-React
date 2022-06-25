import { SHOW_ALERT, HIDE_ALERT } from "../types"

const handlers = {
  [SHOW_ALERT]: (state, {payload}) =>({...payload, visible: true}),
  [HIDE_ALERT]: state =>({...state, visible: false}),
  DAFAULT: state => state
}

export const alertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DAFAULT
  return handle(state, action)
}