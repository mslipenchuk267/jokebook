import { DID_STARTUP, SET_CURRENT_JOKE, SAVE_JOKE, SET_SAVED_JOKES, REMOVE_SAVED_JOKE } from "../actions/jokes";

const initialState = {
    currentJoke: null,
    savedJokes: [],
    didStartup: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_JOKE:
            return {
                ...state,
                currentJoke: action.joke
            }
        case SAVE_JOKE:
            return {
                ...state,
                savedJokes: state.savedJokes.concat(action.joke)
            }
        case DID_STARTUP:
            return {
                ...state,
                didStartup: true
            }
        case REMOVE_SAVED_JOKE:
            const savedJokeIndex = state.savedJokes.findIndex(joke => joke.id === action.joke.id);
            const updatedSavedJokes = [...state.savedJokes];
            if (savedJokeIndex >= 0){
                updatedSavedJokes.splice(savedJokeIndex, 1)
            }
            return {
                ...state,
                savedJokes: updatedSavedJokes
            }
        case SET_SAVED_JOKES:
            return {
                ...state,
                savedJokes: action.savedJokes
            }
        default:
            return state;
    }
}

