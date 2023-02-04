//ESLINT_DISABLE
import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components'
import { Card, Grid, CardContent, Typography, Badge, Divider, Accordion, AccordionSummary, AccordionDetails, TextField, Input, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { Posts } from '../data'
import { getPosts, getUsers } from '../queries'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { IComments, IModal, IPosts, IUser } from '../interfaces';
import ModalComponent from './ModalComponent';
import dayjs from 'dayjs';
import { useLocation, useParams } from 'react-router-dom';
import { handleOpen, refresh, setInput } from '../state/actions';
import { AppContext } from '../state';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { StyledButton, StyledField } from '.';
import ReplyIcon from '@mui/icons-material/Reply';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';



const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  position; relative;
  gap: 3vh;
`

const StyledCard = styled(Card)`
  width: 50vw;
  height: max-content;
  margin: 2vh 2vh;
  padding: 4vw;
`

const StyledPaper = styled(Paper)`
  width: 30vw;
  height: max-content;
  position: relative;
`

const StyledIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5vw;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`



const GridComponent = () => {
  const [ posts, setPosts ] = useState<IPosts[]>()
  const [ post, setPost ] = useState<IPosts>()
  const [ users, setUsers ] = useState<any>()
  const [ user, setUser ] = useState<number | undefined>(undefined)
  const [ data, setData ] = useState<IModal | any>({})
  const [ comment, setComment ] = useState<IComments>()

  const location = useLocation()
  const { id } = useParams()

  const { state, dispatch } = useContext(AppContext)

  const handleRepost = (postId: number) => {
    const _posts: IPosts[] = getPosts()
    const _users: IUser[] = getUsers()
    _posts.push({
      postId: _posts.length,
      title: '',
      body: _posts[postId].body,
      quote: false,
      quoteId: null,
      repost: true,
      repostId: postId,
      comments: [],
      likes: [],
      author: _users[0].name,
      quotes: [],
      shares: [],
      authorId: _users[0].id,
      date: Date.now() / 1000
    })
    localStorage.setItem('Posts', JSON.stringify(_posts))
}

const handleQuote = (quoteId: number) => {
  setInput(dispatch, {
    quote: true,
    quoteId: quoteId,
    repost: false,
    repostId: null
  })
}

const handleLike = (postId: number) => {
  const _posts: IPosts[] = getPosts()
  const _users: IUser[] = getUsers()
  if(!_posts[postId].likes.includes(_users[0].id)){
    _posts[postId].likes.push(_users[0].id)
    localStorage.setItem('Posts', JSON.stringify(_posts))
    refresh(dispatch, !state.refresh)
  }
}

  const postFormat = (
    quote: boolean, 
    repost: boolean,
    quoteId: number | null,
    repostId: number | null,
    posts: IPosts | undefined,
    link: string
    ) => {
      if(quote === false && repost === false){
        return(
          <CardContent>
          <Typography fontSize='md'>{posts?.body}</Typography>
            <Link onClick={ _ => handleOpen(dispatch)} to={link}><Typography variant="caption">{posts?.author}</Typography></Link>
          <Typography variant="subtitle2">{dayjs(posts?.date).format('DD/MM/YY hh:mm')}</Typography>
          <Divider />
        </CardContent>
        )
      }

      if(quote === true && quoteId !== null){
        const _posts: IPosts[] = getPosts()
        return(
          <CardContent>
          <StyledPaper>
            <Typography fontSize='md'>{_posts[quoteId]?.body}</Typography>
            <Typography variant="caption">{_posts[quoteId]?.author}</Typography>
            <Typography variant="subtitle2">{dayjs(_posts[quoteId]?.date).format('DD/MM/YY hh:mm')}</Typography>
          </StyledPaper>
          <Typography fontSize='md'>{posts?.body}</Typography>
            <Link onClick={ _ => handleOpen(dispatch)} to={link}><Typography variant="caption">{posts?.author}</Typography></Link>
          <Typography variant="subtitle2">{dayjs(Number(posts?.date) * 1000).format('DD/MM/YY hh:mm')}</Typography>
          <Typography variant="subtitle2">Quote</Typography>
          <Divider />
        </CardContent>
        )
      }

      if(repost === true && repostId !== null){
        const _posts: IPosts[] = getPosts()
        return(
          <CardContent>
          <StyledPaper>
            <Typography fontSize='md'>{_posts[repostId]?.body}</Typography>
            <Typography variant="caption">{_posts[repostId]?.author}</Typography>
            <Typography variant="subtitle2">{dayjs(_posts[repostId]?.date * 1000).format('DD/MM/YY hh:mm')}</Typography>
          </StyledPaper>
            <Link onClick={ _ => handleOpen(dispatch)} to={link}><Typography variant="caption">{posts?.author}</Typography></Link>
          <Typography variant="subtitle2">{dayjs(Number(posts?.date) * 1000).format('dd/mm/yy hh:mm')}</Typography>
          <Typography variant="subtitle2">Repost</Typography>
          <Divider />
        </CardContent>
        )
      }      
  }

  const handleSubmit = (e: any, postId: number) => {
    const _posts = getPosts()
    _posts.map((post: IPosts) => {
      if(post.postId === postId){
        _posts[postId].comments.push(comment)
        refresh(dispatch, !state.refresh)
      }
    })
    localStorage.setItem('Posts', JSON.stringify(_posts))
}

  useEffect(() => {
    setPosts(getPosts())
    setUsers(getUsers())
    console.log(users, 'users')
  }, [state])

  useEffect(() => {
    if(location.pathname === `/user/${id}`){
      setUser(Number(id))
      handleOpen(dispatch)
    if(users !== undefined){
      users.map((usersData: IUser) => {
        if(usersData.id === Number(id)){
          setData({
            user: Number(id),
            date: usersData.date,
            info: 'User',
            email: usersData.email,
            name: usersData.name,
            followers: usersData.followers,
            following: usersData.following
          })
        }
      })
      }
    }
  }, [state])

  return (
  <>
    <GridContainer>
      {posts?.map((posts: IPosts) => {
        const likes = posts.likes.length
        const quotes = posts.quotes.length
        const shares = posts.shares.length
        const comments = posts.comments.length
        const link: string = `user/${posts.authorId}`

        return (
          <StyledCard key={posts.postId}>
            {postFormat(posts.quote, posts.repost, posts.quoteId, posts.repostId, posts, link)}
            <CardContent>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <Badge badgeContent={comments} color="secondary">
                      Coments
                  </Badge>                  
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
              <StyledField
                rows={2}
                placeholder='Ypur comment here'
                multiline
                variant="standard"
                onChange={event => setComment({content: String(event.target.value), author: 'Stryder Crew', authorId: 0, date: (Date.now() / 1000)})}
                />
                <StyledButton onClick={event => handleSubmit(event, posts.postId)} disabled={!comment} variant="contained">Submit</StyledButton>                 
              {posts.comments.map((comments: IComments | any) => {
                return(
                  <>
                  <Typography>
                    {comments.content}
                  </Typography>
                  <Typography variant="caption">{comments.author}</Typography>
                  <Typography variant="subtitle2">{dayjs(Number(posts.date) * 1000).format('DD/MM/YY hh:mm')}</Typography>
                  <Divider />                        
                  </>
                )      
              })}
              </AccordionDetails>
            </Accordion>                
            </CardContent>
            <CardContent>
            <StyledIcons>  
              <Badge badgeContent={likes} color="secondary">
              <ButtonWrapper onClick={ _ => {
                handleLike(posts.postId)
              }}><ThumbUpAltIcon fontSize='medium' />Like</ButtonWrapper>
              </Badge>
              <Badge badgeContent={shares} color="secondary">
                <ButtonWrapper onClick={ _ => handleRepost(posts.postId)}><ReplyIcon fontSize='large'/>Share</ButtonWrapper>
              </Badge>
              <Badge badgeContent={quotes} color="secondary">
              <ButtonWrapper onClick={ _ => handleQuote(posts?.postId)}><FormatQuoteIcon fontSize='large'/>Quote</ButtonWrapper>
              </Badge>
            </StyledIcons>
            </CardContent>
          </StyledCard>
        )
      })}
      <ModalComponent 
        user={user} 
        info={data.info} 
        date={data.date}
        email={data.email}
        name={data.name}
        followers={data.followers}
        following={data.following} 
      />  
    </GridContainer>
  </>
  )
}

export default GridComponent