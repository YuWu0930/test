import React, {useEffect, useState} from "react";

import styled from "styled-components"
import {Link,useNavigate} from "react-router-dom"

const ThankYouPage:React.FC = () => {
    const [countDown, setCountDown] = useState(10)
    const navigate = useNavigate()

    useEffect(()=> {
        if(countDown === 0){
            navigate("/")
        }else{
            setTimeout(()=>{
                setCountDown(countDown - 1)
            }, 1000) 
        }
    }, [countDown])

    return (
      <IntroductionContainer>
      <h2>Navigate to home page in: {countDown}</h2>
        <ContentContainer>
          <LeftContainer>
            <Image src="https://raw.githubusercontent.com/YuWu0930/test/gh-pages/assets/thankYou.png" />
          </LeftContainer>
          <RightContainer>
            <TextContainer>
              <h1>Vielen Dank,</h1>
              <Text>
                Viven say something thankful for the kids.
              </Text>
              <Text>Viel Spaß euch</Text>
            </TextContainer>
          </RightContainer>
        </ContentContainer>
        
      </IntroductionContainer>
    );
}

export default ThankYouPage;

const IntroductionContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:100vh;

`
const TitleContainer = styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content: center;
`
const Image = styled.img`
width:80%;
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
const RightContainer = styled.div`
display:flex;
flex:6;
align-items: center;
justify-content: center;
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