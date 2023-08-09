import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div name='home' className='w-full h-screen bg-[#06050c] content-section'>
            {/*container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full animate-[bounce_2s_ease]'>
                <h1 
                    className='text-3xl sm:text-5xl py-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300'>
                    Estratégias Digitais Vencedoras
                </h1>
                <h2 
                    className='text-1xl sm:text-3xl font-bold py-4 text-[#ccd6f6]'>Amplie sua presença online com nossos serviços de desenvolvimento web de ponta, projetados para resultados excepcionais.
                </h2>                
                <div>
                    <button className='text-white group font-bold px-3 py-3 text-2xl sm:px-6 sm:py-4 mt-4 flex items-center hover:bg-blue-600 hover:text-[#ccd6f6] rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                        <a href="https://wa.me/5511998069652" target='_blank' smooth={true} duration={500}>
                            Quero contratar agora
                        </a>

                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home;