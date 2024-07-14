import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

const Svg = () => {

  const triggerBox = useRef()

  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(moveRef.current,{
      x:-1400,
      delay:0.8,
      duration:2,
      scrollTrigger: {
        trigger: moveRef.current,
        start: "top 100%",
        end: "top 65%",
        scrub: true,
        markers: false
      }
  })})

  const [x, setX] = useState(640)
  const [y, setY] = useState(200)

  const path = `M 10 200 Q ${x} ${y} 1270 200`

  const moveRef = useRef()

  const mouseMove = (event) => {
        gsap.to(moveRef.current, {
          attr: {
            d: `M 10 200 Q ${event.clientX} ${event.clientY-280} 1270 200`
          },
          duration: 0.3,
          ease: "power3.out"
        })
      }
    
      const mouseLeave = () => {
        gsap.to(moveRef.current, {
          attr: {
            d: `M 10 200 Q 640 200 1270 200`
          },
          duration: 1.5,
          ease: "elastic.out(1,0.2)"
        })
      }

  return (

    <>
      <div onMouseMoveCapture={mouseMove} onMouseLeave={mouseLeave}>
        <svg className='bg-black' width="1280" height="400" >
          <path ref={moveRef} d={path} stroke="white" fill="transparent"/>
        </svg>
      </div>
    </>
  )
}

export default Svg