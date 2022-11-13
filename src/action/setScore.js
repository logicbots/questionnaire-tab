export const SET_SCORE = "SET_SCORE"

export const setScore = (score) => {
    return ({
        type: SET_SCORE,
        data: score
    })
}