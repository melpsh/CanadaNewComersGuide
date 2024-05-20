import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import './Accordion.css'

const data =[
    {
        id:1,
        title:'Step 1: Determine Eligibility',
        desc: `Before applying, make sure you meet the basic eligibility requirements. Generally, you must be:       A resident of the province or territory.
        Legally entitled to reside in Canada.`
    },
    {
        id:2,
        title:'Step 2: Gather Required Documents',
        desc: `You'll need to present various documents to prove your identity, residency, and legal status in Canada. These documents typically include:

        Proof of Identity (one or more of the following):
        Passport
        Birth certificate
        Permanent resident card

        Proof of Residency (one or more of the following):
        Utility bill
        Rental agreement or lease
        Bank statement

        Proof of Legal Status:
        Visa
        Work permit
        Study permit
        Permanent resident card`
    },
    {
        id:3,
        title:'Step 3: Research Provincial/Territorial Requirement',
        desc: `Each province and territory in Canada has its own process and specific requirements for issuing ID cards. Here are links to the ID card information for each province and territory:

        Ontario: Ontario Photo Card
        British Columbia: BC Services Card
        Alberta: Alberta ID Card
        Quebec: Health Insurance Card (also used as ID)
        Other provinces and territories: Visit their respective government websites.`
    },
    {
        id:4,
        title:'Step 4: Visit a Service Location',
        desc: `Go to a service location such as a ServiceOntario center, ICBC office, Alberta Registry Agent, or SAAQ office. Some provinces/territories might also offer online applications for certain parts of the process. Check if an appointment is necessary.`
    },
    {
        id:5,
        title:'Step 5: Complete the Application',
        desc: `At the service center, you will need to:

        Fill out an application form (available at the service center or online on the provincial/territorial website).
        Provide the required documents.
        Answer any questions from the staff to verify your identity and residency.`
    },
    {
        id:6,
        title:'Step 6: Pay the Fees',
        desc: `There are fees associated with obtaining a provincial or territorial ID card. The fees vary by province/territory and can range from $20 to $40. Ensure you have the means to pay these fees (cash, debit, or credit card).`
    },
    {
        id:7,
        title:'Step 7: Get Your Photo Taken',
        desc: `The service center will take your photo for the ID card. Make sure to follow any guidelines regarding appearance (e.g., no hats or sunglasses).`
    },
    {
        id:8,
        title:'Step 8: Receive Your ID',
        desc: `Temporary ID: In some provinces/territories, you may receive a temporary paper ID card that you can use until your permanent card arrives.
        Permanent ID: Your permanent ID card will typically be mailed to you within a few weeks.`
    }
]

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