import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom"
import {IState as Props} from "../App"
import db from "../firebase"
import { addDoc, collection, setDoc, doc } from "firebase/firestore"; 

interface IProps {
   data:Props["questionData"],
  userInput:string,
  setUserInput:React.Dispatch<React.SetStateAction<string>>
  userID:{
    id: string;
}

}

const Question2to4:React.FC<IProps> = ({data,userInput,setUserInput, userID}) => {

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(e.target.value)
    }

    const handleNextUpdate = async() => {
      
      const colRef = collection(db, "users")
      const title = data.title
      await setDoc(
        doc(colRef, `${userID.id}`),
        {
          [title] : `${data.title} : ${userInput}`,
        },
        {merge:true}
      );
      console.log(userID.id)
      
    }

    return (
      <QuestionContainer>
        <h1>{data.title}</h1>
        <ContentContainer>
          <LeftContainer>
            <Image src={`${data.image}`} />
          </LeftContainer>
          <RightContainer>
            <QuestionBox>
              <TextMain>{data.mainQuestion}</TextMain>
              <Text>{data.subQuestion}</Text>
            </QuestionBox>
            <AnswerField onChange={handleChange} value={userInput} />
          </RightContainer>
        </ContentContainer>
        {data.id === 4 ? (
          <Link to="/thankyou">
            <ButtonNext
              style={userInput === "" ? { display: "none" } : { display: "" }}
              onClick={handleNextUpdate}
            >
              Finish
            </ButtonNext>
          </Link>
        ) : (
          <Link to={`/question${data.id + 1}`}>
            <ButtonNext
              style={userInput === "" ? { display: "none" } : { display: "" }}
              onClick={handleNextUpdate}
            >
              Next
            </ButtonNext>
          </Link>
        )}
      </QuestionContainer>
    );
}

export default Question2to4;

const QuestionContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top:30px;
`
const ContentContainer = styled.div`
display:flex;
flex-direction:row;

width:100vw;
height:calc(100vh - 200px);
border-radius:10px;
border:none;
`
const LeftContainer = styled.div`
display:flex;
flex:6;
align-items: center;
justify-content: center;
`
const Image = styled.img`
width:90%;
`

const RightContainer = styled.div`
display:flex;
flex-direction: column;
flex:6;
align-items: center;
justify-content: center;
`
const QuestionBox = styled.div`
width:80%;
padding:20px;
background-color:whitesmoke;
border-radius: 10px;
border:none;
box-shadow: 2px 2px 3px 3px gray;
`

const TextMain = styled.p`
font-size:25px;
font-weight:bold;
`
const Text = styled.p`
font-size:20px;
`
const AnswerField = styled.textarea`
margin-top:20px;
width:80%;
height:200px;
padding:20px;
background-color:white;
border-radius: 10px;
border:none;
box-shadow: 2px 2px 3px 3px gray;
font-size:20px;
resize:none;
`

const ButtonNext = styled.button`
width:100px;
height:30px;
border:none;
border-radius:10px;
box-shadow: 0px 0px 5px 5px green;
background-color:white;
font-size:20px;

&:hover{
    cursor:pointer;
    background-color:green;
    color:whitesmoke;
    font-size:25px;
    font-weight:bold;
}
`