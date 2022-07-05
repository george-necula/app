import React, { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import img from './tap-button.png'
const Navbar = ({ children }) => {
  const refs = useRef([]);
  const [buttons, setButtons] = useState([])
  const [open, setOpen] = useState(false)
  useEffect(() => {
    // console.log("Form Children", refs.current.length);
    setButtons(refs.current.map((currRef, i) => {
      // console.log(currRef)
      return <button onClick={() => currRef.scrollIntoView()}>scroll to section: {i+1}</button>

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
      <div className={open ? 'Navbar NavbarSelected' : 'Navbar'}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)} >
        <div onMouseDown={() => setOpen(!open)} className="NavbarButton">
          <img src={img} alt="swipe to left" />
        </div>
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

    </div >
  )
}


export default Navbar