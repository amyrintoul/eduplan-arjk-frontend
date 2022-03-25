import axios from 'axios'
//College API Link
export default axios.create({
    baseURL: "http://localhost:3000"
})