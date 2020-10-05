import React from "react"
import gestImg from "../images/gestImg.png"

const ProfessionalCol = () => {
  return (
    <div className="professional-grid">
      <div className="professional-col-one">
        <p>
          Currently I'm a front end web developer intern over at Gesture
          (yourgesture.com). I Work specifically on the four person website team
          using HTML, SCSS, React, and even a bit of Firebase. Being on the team
          pre-launch up until now has been not only challenging but exciting.
          You'll typically find me doing an array of tasks from debugging
          exsisting code to creating and developing exciting new features (like
          the nifty and simple giftbox). One thing that stands out to me the
          most is having the opporunity to not only code but to do product
          developing research and work with other various other
          departments like the UX team
        </p>
      </div>
      <div className="professional-col-two">
        <a
          href="https://www.yourgesture.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gestImg} alt="n/a" width="100%" />
        </a>
      </div>
    </div>
  )
}

export default ProfessionalCol