import { Typography, Modal, Divider, TableContainer, Paper } from "@mui/material"
import { FC, useContext, useEffect, useState } from "react"
import { AppContext } from "../state"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import { getUsers } from "../queries"
import styled from "styled-components"
import { IModal, IUser } from "../interfaces"
import { Link, useParams } from "react-router-dom";
import { handleClose, refresh } from "../state/actions";

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
    height: max-content;
    margin: 0 auto;
    background-color: white;
    gap: 5vh;
`

const StyledTypography = styled(Typography)`
    cursor: pointer;
`

const ModalComponent: FC<IModal> = (props: IModal) => {

    const { info, name, email, followers, following } = props
    const [ users, setUsers ] = useState<any[]>()
    const { id } = useParams()
    const { state, dispatch } = useContext(AppContext)
    
    useEffect(() => {
        setUsers(getUsers())
    }, [])

    const follow = (userId: number) => {
        const _users: IUser[] = getUsers()
        if(! _users[userId].followers.includes(0)){
            _users[userId].followers.push(0)
            localStorage.setItem('Users', JSON.stringify(_users))
            refresh(dispatch, !state.refresh)   
        } 
    }

    const unfollow = (userId: number) => {
        const _users: IUser[] = getUsers()
        if(_users[userId].followers.includes(0)){
            const indexOf = _users[userId].followers.indexOf(0)
            _users[userId].followers.splice(indexOf, 1)
            localStorage.setItem('Users', JSON.stringify(_users))
            refresh(dispatch, !state.refresh) 
        } 
    } 

    const followUnfollow = (followers: any[] | undefined, id: number) => {
        if(followers?.includes(0)){
            return <StyledTypography onClick={_ => unfollow(id)}>Unfollow</StyledTypography>
        }
        return <StyledTypography onClick={_ => follow(id)}>Follow</StyledTypography>
    }

    return(
        <Modal open={state.modal}>
            <ModalWrapper>
                <div onClick={_ => handleClose(dispatch)}><Link to="/" ><ArrowBackIosIcon /></Link></div>
                {

                        info === 'User'

                            ?

                            <TableContainer component={Paper}>
                            <TableBody>
                                <TableRow>{id}</TableRow>
                                <Divider />
                                <TableRow>Name: {name}</TableRow>
                                <Divider />
                                <TableRow>Email: {email}</TableRow>
                                <Divider />
                                <TableRow>Followers:</TableRow>
                                {
                                followers?.map((_followers: any) => {
                                    return(<>
                                        {
                                            users?.map((_users: any) => {
                                                if(_users?.id === _followers){
                                                    return(
                                                    <>
                                                        <TableRow><Typography variant='subtitle1'>{_users.name}</Typography></TableRow>
                                                    </>)
                                                }
                                            })                                           
                                        }
                                    </>)})
                                }
                                <Divider />
                                <TableRow>Following:</TableRow>
                                {
                                following?.map((_following: any) => {
                                    return(<>
                                        {
                                            users?.map((_users: any) => {
                                                if(_users?.id === _following){
                                                    return(
                                                    <>
                                                        <TableRow><Typography variant='subtitle1'>{_users.name}</Typography></TableRow>
                                                    </>)
                                                }
                                            })                                           
                                        }
                                    </>)})
                                }                                
                            </TableBody>
                            <div>
                            {followUnfollow(followers, Number(id))}
                            </div>
                            </TableContainer>                         

                            :

                            info === 'Post'

                            ?

                                <>Não é post</>

                            :

                        <>Não é User</>
                }
            </ModalWrapper>    
        </Modal>
    )
}

export default ModalComponent