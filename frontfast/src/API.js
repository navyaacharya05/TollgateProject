import axios from 'axios'

const url="http://localhost:8081/FastTag/fest"


// axios.method(url,object)

const traverse=async()=>{
    const tmp=await axios.get(`${url}/`)
    return tmp
}

const oneAtTime=async(param)=>{
    const tmp = await axios.get(`${url}/${param}`)
    return tmp
}
{/*const terminate=async(param)=>{
    const t = await axios.delete(`${url}/remove/${param}`)
    return t
}*/}

const change=async(object)=>{
    const t = await axios.put(`${url}/fast`,object)
    return t
}

export {traverse, oneAtTime,change}