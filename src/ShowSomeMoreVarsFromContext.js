import React ,{useRef} from 'react';
import LanguageContext from './LanguageContext';

///consumer of the provider named language context
const ShowSomeMoreVarsFromContext = function() 
{

   
   return(
    <>
    <p> This content doesnt use the consumer </p>
  <LanguageContext.Consumer>
    {value =>
    <>
    <p> var1  is { value.var1 } </p>
    <p> var2  is { value.var2 } </p>
    <p> var4  is { (JSON.stringify(value.var4)) } </p>
    <p> var3  is {value.var3 &&  (value.var3.filter((eachElement)=>{return eachElement>4})) } </p>
    
   
    </>
    
    
    }
    
  </LanguageContext.Consumer>
  
  </>
  )
  
};

export default ShowSomeMoreVarsFromContext;
