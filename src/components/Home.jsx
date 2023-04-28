import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import backgroundSection from '../assets/pexels-merlin-lightpainting-11308988.jpg'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#06050c] content-section'>                   
           
            {/*container*/}
            <section  className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-blue-500 sm:text-2xl'>Olá, me chamo</p>
                <h1 className='text-4xl sm:text-5xl font-semibold text-[#ccd6f6]'>Ivan Leonardi</h1>
                <h2 className='text-4xl sm:text-6xl font-bold text-blue-500'>Sou Desenvolvedor Front-end.</h2>
                <p className='text-[#8892b0] pt-4 max-w-[700px]'>Seja bem-vindo ao meu site, onde a criatividade encontra a tecnologia. Venha explorar meu portfólio e descobrir como eu posso ajudar a trazer sua ideia para a vida digital!</p>

                <div>
                    <button
                        className='text-white group border-[1px] px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-400 rounded-md'>
                        <Link to='projetos' smooth={true} duration={500}>
                        Veja meus projetos
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </section>

        </div>
    )
}

export default Home;