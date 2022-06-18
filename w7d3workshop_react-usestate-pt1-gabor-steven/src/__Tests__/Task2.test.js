import App from "../App";
import React from "react";
import {fireEvent, render, screen} from '@testing-library/react'
import {bootcampers, compliments} from "../bootcampers";

describe("Task2",()=>{
  it('should render a <p></p> tag with a random name from bootcampers array && a random ', () => {
    render(<App/>)

    let initStateBc= screen.getByText("Charmaine")
    let initStateComp= screen.getByText("is awesome!")


    let ButtonRandom = screen.getByText("Click me for a random bootcamper!")
    
    function getRandomBootcamper(){
      return bootcampers.filter((name)=>{
        try {
          if(screen.getByText(name)){
            return true
          }
        } catch (error) {
        }
      })[0]
    }

    function getRandomCompliment(){
      
      return compliments.filter((complimentss)=>{
        try {
          if(screen.getByText(complimentss)){
            return true
          }
        } catch (error) {
        }
      })[0]
    }
    
    let isRandomBcAndName
    for(let i=0;i<2;i++){
      fireEvent.click(ButtonRandom)
      let bootcamperName=getRandomBootcamper()
      let bootcamperCompliments=getRandomCompliment()
      if((bootcamperName!==initStateBc)&&(bootcamperCompliments!==initStateComp)){
        isRandomBcAndName=true
        break 
      }
    }
    
    expect(isRandomBcAndName).toBe(true)
  });

})