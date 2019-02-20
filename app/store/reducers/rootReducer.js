const initState = {
    screen: '0',
    resault: '0',
    opr: ''
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {

        case 'CHANGE_RESAULT_ASYNC':
            return {
                ...state,
                resault: action.val
            }

        case 'CHANGE_SCREEN_ASYNC':
            return {
                ...state,
                screen: action.val
            }

        case 'CHANGE_OPR_ASYNC':
            return {
                ...state,
                opr: action.val
            }

        default:
            return state
    }
}

export default rootReducer