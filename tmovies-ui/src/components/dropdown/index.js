import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar';
import "./dropdown.css";
import { useNavigate } from "react-router-dom";

const Dropdown = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const { label, selectedOption, setSelectedOption, options } = props;

    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const handleSelected = (option) => {
        setSelectedOption(option)
        setIsOptionsVisible(false)
    }

    window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

    return (
        <div>
            <Navbar className="navbar" isScrolled={isScrolled} />
        <div className="dropdown">
            <div className="heading">
                Select input Ticket the Movies </div>
            {label && <div className="dropdown-label">{label}</div>}

            <div className="dropdown-component">
                <div className="selected-options-wrapper" onClick={()=>setIsOptionsVisible(!isOptionsVisible)}>
                    <div>{selectedOption}</div>
                    {isOptionsVisible ?
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="6 15 12 9 18 15" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="6 9 12 15 18 9" />
                        </svg> }
                </div>
                {isOptionsVisible && <div className="dropdown-options">
                    {options.length > 0 &&
                        options.map((option) => (
                        <div className="dropdown-option" onClick={() => handleSelected(option)}>{option}</div>))}
                </div>}
            </div>
            </div>
            <Button className="but" onClick={() => navigate("/transaksi")}>Submit</Button>
            <a href="http://localhost:3002/" target="_blank" rel="transaksi"><Button className='but'>Submit</Button></a>
        </div>
    );

    // return (
    //     <div className='dropdown'>
    //         <div>
    //         <label>Select input Ticket the Movies</label>
    //         </div>
    //         <select>
    //             <option>sadads</option>
    //             <option>sadads</option>
    //             <option>sadads</option>
    //             <option>sadads</option>
    //             <option>sadads</option>
    //             <option>sadads</option>
    //         </select>
    //         <button>ok</button>
    //     </div>
    // );
};

export default Dropdown;


