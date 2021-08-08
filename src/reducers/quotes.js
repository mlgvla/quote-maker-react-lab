
export default (state = [], action) => {
    
    switch (action.type) {
        case 'ADD_QUOTE':
            
            return state.concat(action.quote)
        
        case 'REMOVE_QUOTE':
        
            return state.filter(q => q.id !== action.quoteId)

        case 'UPVOTE_QUOTE':
            const quoteIndex = state.findIndex(q => q.id === action.quoteId)
            const quote = {...state[quoteIndex], votes: state[quoteIndex].votes + 1}
            return [
                ...state.slice(0, quoteIndex), 
                quote, 
                ...state.slice(quoteIndex + 1)]

        case 'DOWNVOTE_QUOTE':
            const qIndex = state.findIndex(q => q.id === action.quoteId)
            const qwote = {...state[qIndex], votes: state[qIndex].votes - 1}
            if (qwote.votes > 0) {
                return [
                    ...state.slice(0, qIndex), 
                    qwote, 
                    ...state.slice(qIndex + 1)
                ] 
            }
            return state
           
        default:
            return state;
    }

}
