const initislState = {
    data :[]
}

const jsonReducer = (state  = initislState, action) =>{
    switch(action.type) {
        case 'GET_DATA' :
            console.log(action.payload);
            return{
                ...state,
                data: action.payload
            }
    }
}

export default jsonReducer