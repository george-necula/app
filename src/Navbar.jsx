import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ children }) => {
  const refs = useRef([]);
  const [buttons, setButtons] = useState([])
  useEffect(() => {
    // console.log("Form Children", refs.current.length);
    setButtons(refs.current.map((currRef, i) => {
      // console.log(currRef)
      return <button onClick={() => currRef.scrollIntoView()}>scroll to section: {i}</button>

    }))
  }, []);

  return (
    <div className="NavbarUpper">{
      React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ref: (ref) => (refs.current[index] = ref)
        })
      )
    }
      <div className="Navbar" >
        {/* {React.Children.map(children,((child) => {
          console.log(child)
          return <button onClick={() => child.scrollIntoView(true)}>scroll</button>
          }))} */}
        {/* {children.map((child) => {
          console.log(child)
          returns (<button onClick={() => child.current.scrollIntoView()}>scroll to </button>)
        })} */}
        {buttons.map(butt => { return butt })}
      </div>

    </div>
  )
}


export default Navbar