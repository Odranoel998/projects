import axios from "axios";

const UsersGet=async()=>{
    await axios.get('http://localhost:3000/users')
    .the(response=>{
    console.log(response.data)
}).catch(err=>{
    console.log(err)
})
}

export default {
    UsersGet
}