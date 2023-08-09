import React from 'react';
import SITES from '../assets/design-do-site.png';
import SISTEMAS from '../assets/sistema-operacional.png';
import TECNOLOGIA from '../assets/tecnologia.png';
import PARCERIA from '../assets/confiar-em.png';
import RESULTADO from '../assets/resultado.png';
import HORAS from '../assets/24-horas.png';
import EXPANSAO from '../assets/expansao.png';
import CREDIBILIDADE from '../assets/distintivo.png';

const Skills = () => {
    return (
        <div name='tecnologias' className='sm:my-4 sm:mt-20 w-full h-screen bg-[#06050c] text-gray-300'>
            {/*container*/}
            <div className='max-w-[1000px] mx-auto my-8 p-4 flex flex-col justify-center w-full h-full mt-[480px]'>
                <div data-aos="fade-right" data-aos-delay="300" data-aos-easing="linear"
                    data-aos-duration="500">
                    <p className='text-2xl sm:text-3xl font-bold inline border-b-2 border-blue-500'>O Que Oferecemos:</p>
                    <p className='py-5'>Guiados pela Inovação Digital, estamos prontos para desbravar um amanhã online notável em parceria com você. Permita-nos ser a força que alimenta sua presença na web.</p>
                </div>

                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="700" className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4 mt-12'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-10 mx-auto' src={SITES} alt="SITES icon" />
                        <p className='my-4'>Sites Personalizados</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-10 mx-auto' src={SISTEMAS} alt="SISTEMAS icon" />
                        <p className='my-4'> Sistemas Web Sob Medida</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-10 mx-auto' src={TECNOLOGIA} alt="TECNOLOGIA icon" />
                        <p className='my-4'> Tecnologia de Ponta</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-10 mx-auto' src={PARCERIA} alt="PARCERIA icon" />
                        <p className='my-4'> Parceria e Colaboração</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-10 mx-auto' src={RESULTADO} alt="RESULTADO icon" />
                        <p className='my-4'>Resultados Mensuráveis</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-10 mx-auto' src={HORAS} alt="HORAS icon" />
                        <p className='my-4'>Acesso Global 24/7</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-10 mx-auto' src={EXPANSAO} alt="EXPANSAO icon" />
                        <p className='my-4'> Expansão da Marca</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-10 mx-auto' src={CREDIBILIDADE} alt="CREDIBILIDADE icon" />
                        <p className='my-4'>Maior Credibilidade</p>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-8'>
                    <button data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="1000"
                        className='text-white group font-bold px-5 py-4 text-2xl sm:px-6 sm:py-4 mt-4 mb-56 flex items-center hover:bg-green-500 hover:text-[#ccd6f6] rounded-md shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
                        <a href="https://wa.me/5511998069652" target='_blank' smooth={true} duration={500}>
                            Entre em contato agora
                        </a>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Skills;