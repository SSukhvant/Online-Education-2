import React from 'react';
import { motion } from 'framer-motion';
import './Service.scss';
import { Images } from '../../constants';

const Services = [
  {
    imageURL : `${Images.Engineering}`,
    title : 'Online Education',
    color : '#f1e3fc'
  },
  {
    imageURL : `${Images.accounting}`,
    title : 'Online Education',
    color : '#e3fcfa'
  },
  {
    imageURL : `${Images.Creative}`,
    title : 'Online Education',
    color : '#fcf0e3'
  },
  {
    imageURL : `${Images.Design}`,
    title : 'Online Education',
    color : '#fceee3'
  },
  {
    imageURL : `${Images.Physics}`,
    title : 'Online Education',
    color : '#f3fce3'
  },
  {
    imageURL : `${Images.chemistry}`,
    title : 'Online Education',
    color : '#e3f3fc'
  }
]

const Service = () => {
  return (
    <div className='app__service'>
      <motion.div
      whileInView={{ y: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
       className='app__services'>
      {Services.map((item) => (
        <div className='app__service-item' style={{backgroundColor: `${item.color}`}}>
        <img src={item.imageURL} alt="Service"/>
        <h4>{item.title}</h4>
        </div>
      ))}
      </motion.div>
    </div>
  )
}

export default Service;
