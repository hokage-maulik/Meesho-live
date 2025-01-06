
const arr = []

export const myReducer = (state = arr, action) => {
    if (action.type === "ADD") {
        return state = [
            ...state, { ...action.payload, qunatity: 1 }
        ]
    }
    else if (action.type === "DELETE") {
        const newvalue = [...state]
        newvalue.splice(action.payload, 1)
        state = newvalue
    } else if (action.type === "INC") {
        return state.map((el, index) => index === action.index
            ? { ...el, qunatity: el.qunatity + 1 }
            : el
        )
    } else if (action.type === "DEC") {
        return state.map((el, index) => index === action.index && el.qunatity > 1
            ? { ...el, qunatity: el.qunatity - 1 }
            : el
        )
    }

    return state
}