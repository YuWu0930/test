import React, {useEffect, useState} from "react";
import {screenSize} from "../ScreenSize"
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
        <TitleContainer>
          <h2>zurück auf die Startseite: {countDown}</h2>
        </TitleContainer>
        <ContentContainer>
          <LeftContainer>
            <Image src="https://raw.githubusercontent.com/YuWu0930/test/gh-pages/assets/thankYou.png" />
            <a href="http://www.freepik.com"  style={{color:"black", fontSize:"5px", zIndex:1}}>Designed by slidesgo / Freepik</a>
          </LeftContainer>
          <RightContainer>
            <TextContainer>
              <h1>Vielen Dank,</h1>
              <Text>
                fürs teilnehmen. Ich hoffe euch hat die Umfrage gefallen und ihr konntet euch ein bisschen miteinbringen.
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
margin:20px;
`
const Image = styled.img`
width:80%;
`

const ContentContainer = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-items: center;
width:100vw;
height:calc(100vh - 200px);
border-radius:10px;
border:none;
`
const LeftContainer = styled.div`
  display: none;
  @media ${screenSize.tablet} {
    display: flex;
    flex-direction: column;
    flex: 6;
    align-items: center;
    justify-content: center;
  }
`;
const RightContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex:6;
align-items: center;
justify-content: center;

`
const TextContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding:10px;
border:none;
border-radius: 10px;
width:80%;
height:50%;
box-shadow: 0px 2px 5px 5px gray;
background-color:whitesmoke;

@media ${screenSize.tablet}{
 padding:20px;
}

`
const Text = styled.p`
  font-size: 15px;
  @media ${screenSize.tablet} {
    font-size: 20px;
  }
`;