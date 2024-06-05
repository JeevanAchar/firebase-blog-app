import React, { useState } from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import faqsJson from "./faq.json";

const Faqs = () => {
    const [selected, setSelected] = useState(false);

    const handleSelected = (index) => {
        if (selected === index) {
            return setSelected(false);
        }
        setSelected(index);
    }
    return (
        <section className="w-full h-full">
            <div className='md:w-3/5 mx-auto px-6 my-3'>
                <h2 className='sm:text-5xl font-semibold text-stone-900 text-center underline my-4'>FAQ's</h2>
                <div>
                    {
                        faqsJson.map((faq, index) => {
                            return (
                                <div className="bg-white min-h-16 shadow-lg py-3 px-7 rounded-lg my-3" key={index} onClick={() => { handleSelected(index) }}>
                                    <div className="flex justify-between items-center my-4">
                                        <div className="flex items-center font-semibold text-stone-800">
                                            <span className="w-7 sm:text-2xl text-xl">
                                                <IoIosHelpCircleOutline />
                                            </span>
                                            <p>{faq.question}</p>
                                        </div>
                                        {selected === index ? <FaChevronUp className='sm:text-2xl text-xl text-stone-900 font-normal cursor-pointer' /> : <FaAngleDown className='sm:text-2xl text-xl text-stone-900 cursor-pointer font-normal' />}
                                    </div>
                                    <div className='sm:text-base text-sm text-zinc-600 font-semibold px-7'>
                                        <small className={selected === index ? "block" : "hidden"}>{faq.answer}</small>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Faqs;