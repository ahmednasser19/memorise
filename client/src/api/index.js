import axios from 'axios'

const url = 'http://localhost:5001/posts';

export const fetchPost = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);