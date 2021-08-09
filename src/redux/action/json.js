import axios from 'axios'

export const json = () => (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        dispatch({type: 'GET_DATA', payload: res.data})
    })
    .catch((err)=>{
        console.log(err.response);
    })
}