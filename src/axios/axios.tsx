import axios from "axios"

interface CreatePostProps{
    body?: string | number;
    id?: number |string,
    title?: string | number;
    userId?: string | number;
}




export async function axiosGetPosts(pages: number){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${pages}`)
    return response
}


export async function axiosGetFitrstPosts(){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    return response
}


export async function axiosCreatePost(post: CreatePostProps){
    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
    return response
}