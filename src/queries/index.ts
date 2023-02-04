export const getPosts = () => {
    const posts = JSON.parse(localStorage.getItem('Posts') || "{}")
    return posts
}

export const getUsers = () => {
    const posts = JSON.parse(localStorage.getItem('Users') || "{}")
    console.log(posts, 'aqui')
    return posts
}