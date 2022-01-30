import React, {useState, useEffect} from 'react';
import Question2to4 from "./Question2to4"
import {questionData} from "../questions"
import {IState as Props} from "../App"

const Question3: React.FC<Props> = ({userID}) => {
  const [userInput, setUserInput] = useState("")
  const [data, setData] = useState<Props["questionData"]>({
      id:0,
    title:"",
    image:"",
    mainQuestion:"",
    subQuestion:"",
    license:""
  })

  useEffect(()=> {
    setData(questionData[2])
    console.log(data)
},[])


    return (
      <Question2to4  data={data} userInput={userInput} setUserInput={setUserInput} userID={userID}/>
    );
}

export default Question3

