import React, { useState } from 'react'
//This line imports React and the useState hook from the 'react' library. React is a JavaScript library for
//building user interfaces, and useState is a hook that allows you to add state to your functional components.

//Function Component
function Clock() { //functional component named Clock.
     //Initial Time Calculation:
     
    // let time = new Date().toLocaleTimeString();

    //The new Date() function creates a new Date object, and the toLocaleTimeString() method
    //returns the time in the local time zone, formatted according to the current locale.

    //State Initialization:

    // const [CurrentTime, setCurrentTime] = useState(time)
    
    /*
    This initializes a state variable called CurrentTime with the initial value set to the current date string.
     useState(time) returns an array with the current state value (CurrentTime) and a function to update this state
      (setCurrentTime).
    */

      // const [CurrentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
       /*
    useState hook is used
     to set the initial time to the current time. The useState hook returns an array with two
     elements: the first element is the current state, and the second element is a function that
     allows you to update the state. In this case, the state is the current time,
     and the function is setTime, which updates the state to the current time.
    */
      // Improved State Initialization with AM/PM formatting:
      const [CurrentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US',{hour12:true}));
      /*
  The useState hook is used to set the initial time to the current time, formatted to include AM/PM.
  The useState hook returns an array with two elements: the first element is the current state,
  and the second element is a function that allows you to update the state.
  */
   
   //Function to update the time:
   const updateTime = () => {
    // setCurrentTime(new Date().toLocaleTimeString());
    setCurrentTime(new Date().toLocaleTimeString('en-US',{hour12:true}));
   }
    
  //The updateTime function sets the current time to the new current time, formatted with AM/PM.

   //The updateTime function is called every second to update the time.

      //Update Time Function:

    // function updateTime() { 
    //     let newtime = new Date().toLocaleTimeString();
    //     setCurrentTime(newtime)
    //     }

        //The updateTime function is called every second to update the current time.
        //The newtime variable is set to the current time, and the setCurrentTime function is called
        //to update the state variable CurrentTime with the new time.

     // Set up interval to update time every second
    setInterval(updateTime, 1000)
     /*
  The setInterval function is used to call the updateTime function every second (1000 milliseconds).
  This updates the current time state every second.
  */
    
  return (
    <div className='container'>
        <h1>{CurrentTime}</h1>
        {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  )
 /*
 This returns a div element with a h1 element and a button element. The h1 element displays
 the current date, and the button element calls the updateTime function when clicked.
 */
}

export default Clock //This exports the Clock component so that it can be used in other files.
