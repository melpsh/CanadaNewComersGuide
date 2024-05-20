import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import './Accordion.css'



const Accordion = () => {
    const [open, setOpen]= useState(null);

    const handleAccordion = (id)=>{
        setOpen(open===id ? null:id);
    }

  return (
    <div>
        {data.map(item=> (
            <AccordionItem key={item.id} title={item.title} id={item.id} onOpen={handleAccordion} open={open} >
                {item.desc}
            </AccordionItem>
        ))}
        {/* <AccordionItem title='My Title' id={4} onOpen={handleAccordion} open={open}>
            <p>in ye description motefavete</p>
            <a href='#'>inja click konid</a>
        </AccordionItem> */}
    </div>
  )
}

export default Accordion


const AccordionItem = ({title, id, onOpen, open, children}) => {
    const isOpen= open===id? true:false;
    return (
        <div className={`accordion-item ${isOpen ? 'accordion__expanded':''}`}>
            <div className='accordion-item__header' onClick={()=> onOpen(id)}>
                {title}
                <ChevronDownIcon style={{width:'1.2rem', transition:'all 0.2s', rotate: isOpen? '180deg':'0deg'}}/>
            </div>
            <div className='accordion-item__content'>
                {children}
            </div>
        </div>
    )
}