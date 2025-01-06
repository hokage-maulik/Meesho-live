
export const myAction = (payload) => {
    return {
        type: "ADD",
        payload
    }
}

export const deletAction = (payload) => {
    return {
        type: "DELETE",
        payload
    }
}

export const QuntDec = (index) => {
    return {
        type: "DEC",
        index
    }
}


export const QuntInc = (index) => {
    return {
        type: "INC",
        index
    }
}
