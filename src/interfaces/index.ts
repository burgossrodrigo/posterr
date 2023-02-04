export interface IPosts {
    postId: number
    title: string
    body: string
    quote: boolean
    repost: boolean
    quoteId: number | null
    repostId: number | null
    comments: Array<{
        author:string,
        content:string
    }>,
    likes: Array<Number>,
    author: string,
    quotes: any[]
    shares: any[]
    authorId: number,
    date: number
  }

  export interface IModal {
    info?: string 
    user: number | undefined
    id?: number | undefined
    body?: string | undefined
    email?: string | undefined
    password?: string | undefined
    followers?: Number[] | undefined
    following?: Number[] | undefined
    posts?: String[] | undefined
    comments?: String[] | undefined
    date?: number
    name?: string
}

export interface IUser {
    id: number 
    name: string
    email: string
    followers: Number[]
    following: Number[]
    date: number
}

export interface IComments {
    author: string
    authorId: number
    content: string
    date: number
}

export interface IPostInput {
    repost?: boolean
    quote?: boolean
    quoteId?: number | undefined
    repostId?: number | undefined
} 

