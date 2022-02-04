import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom"
import {IState as Props} from "../App"
import db from "../firebase"
import { addDoc, collection, setDoc, doc } from "firebase/firestore"; 
import {screenSize} from "../ScreenSize"


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
            <TextMain>1. Wie fühlst du dich gerade auf der Gruppe?</TextMain>
            <Text>Wähle dazu einen der drei Smileys aus.</Text>
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
              <Emojie src="https://raw.githubusercontent.com/YuWu0930/test/gh-pages/assets/happy.png" />
            </EmojieConntainer>
            <EmojieConntainer
              onClick={() => handleClick("soso")}
              style={
                emotion === "soso"
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "" }
              }
            >
              <Emojie src="https://raw.githubusercontent.com/YuWu0930/test/gh-pages/assets/soso.png" />
            </EmojieConntainer>
            <EmojieConntainer
              onClick={() => handleClick("sad")}
              style={
                emotion === "sad"
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "" }
              }
            >
              <Emojie src="https://raw.githubusercontent.com/YuWu0930/test/gh-pages/assets/sad.png" />
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
height:50vh;
border:none;
border-radius: 10px;
box-shadow: 2px 2px 10px 2px gray;
padding:30px;

@media ${screenSize.tablet}{
 height:100%;
}
`
const QuestionContainer = styled.div`
flex:1;
display:flex;
flex-direction: column;

@media ${screenSize.tablet}{
 flex:4;
}
`
const TextMain = styled.p`
font-size:20px;
font-weight:bold;
@media ${screenSize.tablet}{
 font-size:25px;
}
`
const Text = styled.p`
font-size:15px;
@media ${screenSize.tablet}{
 font-size:20px;
}
`

const AnswerContainer = styled.div`
flex:1;
display:flex;
flex-direction:row;
width:100%;
padding:5px;
@media ${screenSize.tablet}{
 padding:none;
 flex:8;
}
`
const EmojieConntainer = styled.button`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 20px;
  background-color: whitesmoke;
  width: 80px;
  height: 80px;
  margin: 5px;
  &:hover {
    background-color: lightgreen;
    cursor: pointer;
  }

  @media ${screenSize.tablet} {
    height:150px;
  }
`;
const Emojie = styled.img`
  width: 40px;
  height: 40px;
  @media ${screenSize.tablet} {
    width:60px;
    height:60px;
  }
`;

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
@media ${screenSize.tablet}{
  margin-top:30px;
}
`