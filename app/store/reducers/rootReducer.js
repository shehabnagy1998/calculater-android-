const initState = {
    screen: '',
    resault: ''
}

const rootReducer = (state = initState, action) => {
    const newState = { ...state };
    switch (action.type) {
        default:
            return newState
    }
}

export default rootReducer