// Arrow Function in Component
// Write a functional component Greeting using an arrow function syntax that accepts a name prop and renders "Hello, [name]!" using JSX.
import React from 'react'

const Greeting = ({name}) => {
  return (
    <div>
<h2>Hello,{name}!</h2>
    </div>
  )
}

export default Greeting
