import React from 'react';
import './Pages.scss';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

const pagesContent = [
  {
    title: "I am from France",
    course: "Now the races of these two have been for some ages utterly extinct, and besides to discourse any further of them would not be at all to my purpose.",
    src: '#',
    likes: '23',
    comments: '50',
    date: '5 November'
  },

  {
    title: "Out of the Darkness",
    course: "Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.",
    src: '#',
    likes: '423',
    comments: '4523',
    date: '5 November'
  },

  {
    title: "Tears for my Mom",
    course: "It was some time before he obtained any answer, and the reply, when made, was unpropitious.",
    src: '#',
    likes: '234',
    comments: '2345',
    date: '5 November'
  },
  {
    title: "How the internet is uniting the world",
    course: "This sounded a very good reason, and Alice was quite pleased to know it. 'I never thought of that before!' she said.",
    src: '#',
    likes: '263',
    comments: '2339',
    date: '5 November'
  }
]

const Pages = () => {
  return (
    <div className='app__page-section'>
    <div className='app__pages'>
    <div className='app__page-heading'>
    <h1 className='head-text'>Around the University</h1>
    <div className='app__page-desc'>
    <p>A hundred thousand grateful loves to your dear papa and mamma. Is your poor brother<br/> recovered of his rack-punch? Oh, dear! Oh, dear! How men should beware of wicked punch!</p>
    <button className='app__page-btn'>All News Post</button>
    </div>

    </div>

    <div className='app__page-items'>
    {pagesContent.map((item) => (
      <motion.div
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className="app__page-item"
    >
      <a src={item.src} alt="title" className='app__page-course'>{item.title}</a>
      <p>{item.course}</p>
      
      <div className='app__page-review'>

      <div className='app__page-likes-comments'>
      <a src={item.src} alt="keep reading" className='app__page-like'><span><BsHeartFill/></span> {item.likes}</a>
      <a src={item.src} alt="keep reading" className='app__page-comment'><span><FaCommentDots/></span> {item.comments}</a>
      </div>

      <div><a src={item.src} className="app__page-date" alt="date">{item.date}</a></div>

      </div>
    </motion.div>
    ))}
    
    </div>
    
    </div>
    '
    </div>
  )
}

export default Pages;
