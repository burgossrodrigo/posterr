import { Divider, Paper, Typography } from '@mui/material'
import styled from 'styled-components'

import { StyledButton, StyledField } from '.'
import { IPostInput, IPosts } from '../interfaces'
import { FC, useContext, useState } from 'react'
import { getPosts } from '../queries'
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect'
import { AppContext } from '../state'
import { setInput } from '../state/actions'

const SubmitPostWrapper = styled.div`
 position: relative;
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 width: 50vw;
 gap: 2vh;
 `

const StyledPaper = styled(Paper)`
    height: min-content;
    width: 20vw;
    position: relative;
    margin: auto auto;
`

const CommentInput: FC<IPostInput> = (props: IPostInput) => {

    const [ post, setPost ] = useState<IPosts | any>()
    const [ posts, setPosts ] = useState<IPosts[] | any>()
    const { dispatch } = useContext(AppContext)



    const handleSubmit = (e: any) => {
        const _posts: IPosts[] = getPosts()
        _posts.push(post)
        localStorage.setItem('Posts', JSON.stringify(_posts))
        setInput(dispatch, {
            quote: posts?.quote,
            repost: posts?.repost,
            repostId: posts?.repostId,
            quoteId: posts?.quoteId

        })
        console.log('chamou')
        console.log(localStorage.Posts, 'aqui')
    }

    useEnhancedEffect(() => {
        setPosts(getPosts())
    }, [])

    const formatForm = (props: IPostInput) => {
        const { quote, repost, repostId, quoteId } = props
        if(quote === true && quoteId !== undefined){
            return(<>
                <StyledPaper>
                    <Typography fontSize='small'>{posts[quoteId].body}</Typography>
                </StyledPaper>
                <SubmitPostWrapper>
                    <StyledField
                    rows={2}
                    placeholder='Your text here'
                    multiline
                    variant="standard"
                    onChange={event => setPost({
                        postId: posts.length, 
                        title: '', 
                        body: String(event.target.value), 
                        comments: [], 
                        likes: [], 
                        author: 'Stryder Crew', 
                        authorId: 0, 
                        date: (Date.now() / 1000),
                        repost: repost,
                        quote: quote,
                        shares: [],
                        quotes: [],
                        repostId: repostId,
                        quoteId: quoteId
                    })}
                    />
                    <StyledButton onClick={handleSubmit} disabled={!post} variant="contained">Submit</StyledButton>        
                </SubmitPostWrapper>                
            </>)
        }

            return(<>
                <SubmitPostWrapper>
                    <StyledField
                    rows={2}
                    placeholder='Your text here'
                    multiline
                    variant="standard"
                    onChange={event => setPost({
                        postId: posts.length, 
                        title: '', 
                        body: String(event.target.value), 
                        comments: [], 
                        likes: [], 
                        author: 'Stryder Crew', 
                        authorId: 0, 
                        date: (Date.now() / 1000),
                        repost: false,
                        quote: false,
                        shares: [],
                        quotes: [],
                        repostId: repostId,
                        quoteId: quoteId
                    })}
                    />
                    <StyledButton onClick={handleSubmit} disabled={!post} variant="contained">Submit</StyledButton>        
                </SubmitPostWrapper>              
            </>)
    }



    return(<>
        {formatForm(props)}
    </>)
}

export default CommentInput