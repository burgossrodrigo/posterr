import styled from "styled-components";
import CommentInput from "../components/Form";
import TabComponent from "../components/Tabs";
import { useEffect } from "react";
import { handleClose } from "../state/actions";
import { AppContext } from "../state";
import { useContext } from 'react'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 57vw;
`

const SinglePage = () => {
    const { state, dispatch } = useContext(AppContext)
    useEffect(() => {
        if(state.modal === true){
            handleClose(dispatch)
        }
    }, [])
    return(
        <>
            <AppWrapper>
                <CommentInput 
                    repost={state.input?.repost}
                    repostId={state.input?.repostId}
                    quote={state.input?.quote}
                    quoteId={state.input?.quoteId}  
                />
                <TabComponent />
            </AppWrapper>        
        </>
    )
}

export default SinglePage