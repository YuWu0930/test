import React, {useState, useEffect} from 'react';
import Question2to4 from "./Question2to4"
import {questionData} from "../questions"
import {IState as Props} from "../App"
import db from "../firebase"
import { addDoc, collection, setDoc, doc } from "firebase/firestore"; 

interface IProps {
  userID:Props["userID"]
  setUserID:React.Dispatch<React.SetStateAction<Props["userID"]>>
  questionData:Props["questionData"]
}


const Question2:React.FC<IProps> = ({userID, setUserID}) => {

  const [userInput, setUserInput] = useState("")
  const [data, setData] = useState<IProps["questionData"]>({
      id:0,
    title:"",
    image:"",
    mainQuestion:"",
    subQuestion:"",
    license:"",
    licenseText:""
  })

  useEffect(()=> {
    setData(questionData[1])
},[])




    return (
      <Question2to4  data={data} userInput={userInput} setUserInput={setUserInput} userID={userID}/>
    );
}

export default Question2;

