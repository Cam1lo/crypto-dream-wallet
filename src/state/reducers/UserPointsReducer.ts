type Action = {
    type: string,
    payload: any
}

const initialState = 100;

export const userPointsReducer = (
    state = initialState,
    action: Action
) => {
    switch (action.type) {
        case "change_points":
            state = state + action.payload
            return state ;
        default: 
            return state
    }
}