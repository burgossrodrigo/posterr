import { IPostInput } from "../interfaces"

export const handleOpen = (dispatch: any) => {
    dispatch({type: 'OPEN_MODAL', payload: true})
}

export const handleClose = (dispatch: any) => {
    dispatch({type: 'CLOSE_MODAL', payload: false})
}

export const setInput = (dispatch: any, input: IPostInput | any) => {
    dispatch({type: 'SET_INPUT', payload: input})
}

export const refresh = (dispatch: any, payload: boolean) => {
    dispatch({type: 'REFRESH', payload: payload})
}