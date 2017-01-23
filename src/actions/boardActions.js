import Firebase from '../firebase'


const database = Firebase.database().ref('/boards')

export const FETCH_BOARDS = "FETCH_BOARDS"
export function fetchBoards() {
    return dispatch => {
        database.on("value", snapthot => {
            dispatch({
                type: FETCH_BOARDS,
                boards: snapthot.val()
            })
        })
    }
}

export const CREATE_BOARD = "CREATE_BOARD"
export function createBoard(board, userId) {
    return dispatch => {
        database.push({
            name: board.name,
            public: board.public,
            createdBy: userId
        });
    }
}

export const DELETE_BOARD = "DELETE_BOARD"
export function deleteBoard(id) {

}