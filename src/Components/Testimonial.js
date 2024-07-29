import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'
const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
      <h1 className="primary-heading">
        What They Are Saying
      </h1>
      <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in perferendis dolorem sint necessitatibus repellat incidunt exercitationem aperiam cum recusandae ad, impedit unde, officia tempore saepe ipsam. Quos, modi fugiat.</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero veritatis ex quasi explicabo vel, delectus minus quibusdam at id. Quidem dolore corporis aliquid molestias tempore minima, optio maxime quasi aliquam?</p>
      <div className="testimonials-stars-container">
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
      </div>
      <h2>John Doe</h2>
      </div>
    </div>
  )
}

export default Testimonial
