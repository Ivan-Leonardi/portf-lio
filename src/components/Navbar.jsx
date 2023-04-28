import React, { useState } from 'react';
import Logo from '../assets/react.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#06050c] text-gray-300'>
            <div>
                <img src={Logo} alt="Logo do site" style={{ width: '50px' }} />
            </div>

            {/*menu*/}
            <ul className='hidden md:flex'>
                <li className='hover:text-gray-400'>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-gray-400'>
                    <Link to='sobre' smooth={true} duration={500}>
                        Sobre
                    </Link>
                </li>
                <li className='hover:text-gray-400'>
                    <Link to='tecnologias' smooth={true} duration={500}>
                        Tecnologias
                    </Link>
                </li>
                <li className='hover:text-gray-400'>
                    <Link to='projetos' smooth={true} duration={500}>
                        Projetos
                    </Link>
                </li>
                <li className='hover:text-gray-400'>
                    <Link to='contato' smooth={true} duration={500}>
                        Contato
                    </Link>
                </li>
            </ul>


            {/*hamburger*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
            </div>

            {/*mobile menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#06050c] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl hover:text-gray-400'>
                    <Link onClick={handleClick}  to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-3xl hover:text-gray-400'>
                    <Link onClick={handleClick} to='sobre' smooth={true} duration={500}>
                        Sobre
                    </Link>
                </li>
                <li className='py-6 text-3xl hover:text-gray-400'>
                    <Link onClick={handleClick} to='tecnologias' smooth={true} duration={500}>
                        Tecnologias
                    </Link>
                </li>
                <li className='py-6 text-3xl hover:text-gray-400'>
                    <Link onClick={handleClick} to='projetos' smooth={true} duration={500}>
                        Projetos
                    </Link>
                </li>
                <li className='py-6 text-3xl hover:text-gray-400'>
                    <Link onClick={handleClick} to='contato' smooth={true} duration={500}>
                        Contato
                    </Link>
                </li>
            </ul>

            {/*social icons*/}
            <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/devleonardi" target='_blank'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-md'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Ivan-Leonardi" target='_blank'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3b4666] rounded-md'>
                        <Link to='contato' className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30} />
                        </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1cc25c] rounded-md'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://wa.me/5511998069652" target='_blank'>
                            Whatsapp <FaWhatsapp size={30} />
                        </a>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Navbar;