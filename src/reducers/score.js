import { SET_SCORE } from '../action/setScore';
const initialState = {
    score: 0
}

const score = (state = initialState, action) => {
    switch (action.type) {
        case `${SET_SCORE}`:
            return {
                ...state,
                score: action.data
            }
        default:
            return state
    }
}
export default score;
