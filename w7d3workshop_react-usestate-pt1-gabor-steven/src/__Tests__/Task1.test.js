import App from "../App";
import React from "react";
import {fireEvent, render, screen} from '@testing-library/react'
import {bootcampers} from "../bootcampers";

describe("Task1",()=>{

  it('1.5: should render a <p></p> tag with text content of the first array item from bootcampers', () => {
    render(<App/>)
    let pTag= screen.getByText("Charmaine")
    expect(pTag).toBeInTheDocument()
  });

 
// ----------------------------------------------------------------


  it('1.7: should render a <p></p> tag with a random name from bootcampers array', () => {
    render(<App/>)
    // 1. Get the inistal state,it should be (charmaine) 
    // 2. click the random button 
    // 3. if the the state is the same as the inistial state click it again (3 attempts)
    // if the state is the same fail it 
    // 4. else  if the state is another name pass it.
    let orginalState= screen.getByText("Charmaine")
    let ButtonRandom = screen.getByText("Click me for a random bootcamper!")

    function getRandomBootcamper(){
      fireEvent.click(ButtonRandom)
      return bootcampers.filter((name)=>{
        try {
          if ( screen.getByText(name) ){
            return true
          }
        } catch (error) {
          return false
        }
        return false
      })[0]
    }
    
    // 2.^^  loop through the bootcampers Arr check if it's in the
    let isRandomBootcamper
    for(let i=0;i<3;i++){
      let bootcamperName=getRandomBootcamper()
      if(bootcamperName!==orginalState&&bootcampers.includes(bootcamperName)){

        isRandomBootcamper=bootcamperName
        break
      }
    }
    
    expect(screen.getByText(isRandomBootcamper)).toBeInTheDocument()
  });
// ----------------------------------------------------------------------
})