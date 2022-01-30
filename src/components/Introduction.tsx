import React, {useEffect} from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom"
import * as uuid from 'uuid'
import {IState as Props} from "../App"
import db from "../firebase"
import { addDoc, collection, setDoc, doc } from "firebase/firestore"; 
import {screenSize} from "../ScreenSize"


interface IProps {
  userID:Props["userID"]
  setUserID:React.Dispatch<React.SetStateAction<Props["userID"]>>

}

const Introduction:React.FC<IProps> = ({userID, setUserID}) => {



  const handleClick = async() => {

    try {
      const colRef = collection(db, "users")
      const currentID = uuid.v4()
      setDoc(doc(colRef, currentID), {
        id: currentID,
      })
      setUserID({
        id:currentID,
      })
     
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

    return (
      <IntroductionContainer>
        <TitleContainer>
          <h1>Umfrage</h1>
        </TitleContainer>
        <ContentContainer>
          <LeftContainer>
            <Image src="https://raw.githubusercontent.com/YuWu0930/test/gh-pages/assets/Introduction.png" />
          </LeftContainer>
          <RightContainer>
            <TextContainer>
              <h1>Hallöchen👋🏽,</h1>
              <Text>
                ich habe für euch eine kleine Umfrage erstellt. Gerne könnt ihr
                hier eure Ideen und Wünsche miteinbringen. Die Umfrage dauert
                ca. 5 min und ist für meine Fallstudie dieses Semester.
              </Text>
              <Text>Viel Spaß euch</Text>
            </TextContainer>
          </RightContainer>
        </ContentContainer>
        <Link to="/question1" onClick={handleClick}>
        <ButtonStart >Start</ButtonStart>
        </Link>
      </IntroductionContainer>
    );
}

export default Introduction;

const IntroductionContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top:30px;

`
const TitleContainer = styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content: center;

`
const Image = styled.img`
width:95%;
`

const ContentContainer = styled.div`
display:flex;
flex-direction:row;
width:100vw;
height:calc(100vh - 200px);
border-radius:10px;
border:none;

@media ${screenSize.mobileS}{
 align-items: center;
 justify-content: center;
}
`
const LeftContainer = styled.div`
display:flex;
flex:6;
align-items: center;
justify-content: center;

@media ${screenSize.mobileS}{
 display:none; 
}

`
const RightContainer = styled.div`
display:flex;
flex:6;
align-items: center;
justify-content: center;
@media ${screenSize.mobileS}{
  flex:1;
  padding:10px;
  height:90vh;
}
`
const TextContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding:20px;
border:none;
border-radius: 10px;
width:80%;
height:50%;
box-shadow: 0px 2px 5px 5px gray;
background-color:whitesmoke;
`
const Text = styled.p`
font-size:20px;
`
const ButtonStart = styled.button`
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
