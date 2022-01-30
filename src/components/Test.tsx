import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom"
import Question2to4 from "./Question2to4"
import {questionData} from "../questions"
import {IState as Props} from "../App"
import db from "../firebase"
import { addDoc, collection } from "firebase/firestore"; 


const Test:React.FC <Props> = () => {

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
        setData(questionData[1])
        console.log(data)
    },[])

    const testUpdate = async() => {
      
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      
      
      
    }


    return (
      <button onClick={testUpdate}>Hello</button>
    );
}

export default Test;

