import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom"
import {IState as Props} from "../App"
import db from "../firebase"
import { addDoc, collection, setDoc, doc } from "firebase/firestore"; 


interface IProps {
  userID:Props["userID"]
  setUserID:React.Dispatch<React.SetStateAction<Props["userID"]>>

}

const Question1:React.FC<IProps> = ({userID, setUserID}) => {

    const [emotion, setEmotion] = useState("")
    const [selected, setSelected] = useState(false)
    const [currentEmotion, setCurentemotion] = useState("")

    const handleClick = (userEmotion:string) => {
      setEmotion(userEmotion);
      setSelected(true)
    }

    useEffect(() => {
      setCurentemotion(emotion)

      }, [emotion])

    const handleNextUpdate = async() => {
      const colRef = collection(db, "users")
      await setDoc(
        doc(colRef, `${userID.id}`),
        {
          Frage1: currentEmotion,
        },
        { merge: true }
      );
      console.log(userID.id)
      
    }

    return (
      <Question1Container>
        <h1>Frage 1</h1>
        <QuestionCard>
          <QuestionContainer>
            <TextMain>1. How do you feel right now in the group? </TextMain>
            <Text>
              Here are three emojies, please select one which can represent your
              current feeling.
            </Text>
          </QuestionContainer>
          <AnswerContainer>
            <EmojieConntainer
              onClick={() => handleClick("happy")}
              style={
                emotion === "happy"
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "" }
              }
            >
              <Emojie src="/assets/happy.png" />
            </EmojieConntainer>
            <EmojieConntainer
              onClick={() => handleClick("soso")}
              style={
                emotion === "soso"
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "" }
              }
            >
              <Emojie src="/assets/soso.png" />
            </EmojieConntainer>
            <EmojieConntainer
              onClick={() => handleClick("sad")}
              style={
                emotion === "sad"
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "" }
              }
            >
              <Emojie src="/assets/sad.png" />
            </EmojieConntainer>
          </AnswerContainer>
          <Link to="/question2" onClick={handleNextUpdate}>
            <ButtonNext
              style={selected === false ? { display: "none" } : { display: "" }}
            >
              Next
            </ButtonNext>
          </Link>
        </QuestionCard>
      </Question1Container>
    );
}

export default Question1;

const Question1Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top:30px;
`
const QuestionCard = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:60%;
height:500px;
border:none;
border-radius: 10px;
box-shadow: 2px 2px 10px 2px gray;
padding:30px;
`
const QuestionContainer = styled.div`
flex:4;
display:flex;
flex-direction: column;
`
const TextMain = styled.p`
font-size:25px;
font-weight:bold;
`
const Text = styled.p`
font-size:20px;
`

const AnswerContainer = styled.div`
flex:8;
display:flex;
flex-direction:row;
width:100%;
`
const EmojieConntainer = styled.button`
display:flex;
flex:4;
align-items:center;
justify-content:center;
border-radius:10px;
margin:20px;
background-color:whitesmoke;
&:hover{
    background-color:lightgreen;
    cursor:pointer;
}
`
const Emojie = styled.img`

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