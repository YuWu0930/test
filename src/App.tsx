import React,{useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Introduction from "./components/Introduction"
import Question1 from "./components/Question1"
import Question2 from "./components/Question2"
import Question3 from "./components/Question3"
import Question4 from "./components/Question4"
import ThankYouPage from './components/ThankYouPage';


export interface IState{
  questionData:{
      id:number,
      title:string,
      image:string,
      mainQuestion:string,
      subQuestion:string,
      license:string,
      licenseText:string
  }
  userID:{
    id:string
  }
}

function App() {

  const [userID, setUserID] = useState<IState["userID"]>({
    id:""
  })

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <BrowserRouter basename='/test'>
        <Routes>
          <Route
            path="/"
            element={<Introduction userID={userID} setUserID={setUserID} />}
          />
          <Route
            path="/question1"
            element={<Question1 userID={userID} setUserID={setUserID} />}
          />
          <Route
            path="/question2"
            element={
              <Question2
                userID={userID}
                setUserID={setUserID}
                questionData={{
                  id: 0,
                  title: "",
                  image: "",
                  mainQuestion: "",
                  subQuestion: "",
                  license: "",
                  licenseText:""
                }}
              />
            }
          />
          <Route
            path="/question3"
            element={
              <Question3
                userID={userID}
                questionData={{
                  id: 0,
                  title: "",
                  image: "",
                  mainQuestion: "",
                  subQuestion: "",
                  license: "",
                  licenseText:""
                }}
              />
            }
          />
          <Route
            path="/question4"
            element={
              <Question4
                userID={userID}
                questionData={{
                  id: 0,
                  title: "",
                  image: "",
                  mainQuestion: "",
                  subQuestion: "",
                  license: "",
                  licenseText:""
                }}
              />
            }
          />
          
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
        {/* <NavBar /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
