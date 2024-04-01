import React,{useEffect, useState} from 'react';
import LanguageContext from './LanguageContext';
import DisplaySelectedLanguage from './DisplaySelectedLanguage';
import ShowSomeMoreVarsFromContext from "./ShowSomeMoreVarsFromContext";
function App() {  


  //react does not know if defaultValue is an object unless u specify it

  let [defaultValue,setDefaultValue]=useState({});

 
  useEffect(()=>{

    setTimeout(function()
 {

  //fetch().then("")
  console.log("change the context provider value")
  setDefaultValue({ language:"English",var1:"valueOfVar1",var2:"valueOfVar2",var3:[4,5,6],var4:{name:"reactlearner",age:45}});

 }
 ,3000);


  } , [])
 
  return (
    <div>
  <LanguageContext.Provider value={defaultValue}>
    <div className="content">
      <div className="sidebar" />
      <div className="mainContent">
        <DisplaySelectedLanguage />
        <ShowSomeMoreVarsFromContext />
      </div>
    </div>
    
  </LanguageContext.Provider>
  </div>
)

  }

export default App;
