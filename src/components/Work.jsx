import React from 'react';


import imgFigaro from '../imgProjects/figaro.png';
import imgMeufilho from '../imgProjects/appmeufilho.png'
import imgFinancas from '../imgProjects/imgFinancas.png';
import imgImc from '../imgProjects/imgImc.png';
import imgCSRN from '../imgProjects/csrn.jpg';
import imgLP from '../imgProjects/lpevento.png';
import imgNotes from '../imgProjects/notes.png';

const Work = () => {
  return (
    <div name='projetos' className='w-full md:h-screen text-gray-300 bg-[#06050c]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div data-aos="fade-right" data-aos-delay="500" data-aos-easing="linear"
              data-aos-duration="1000" className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2 text-gray-300 border-blue-500'>Projetos recentes:</p>
                <p className='py-5'>Transformando ideias em resultados.</p>
            </div>
            {/*container*/}
            <div data-aos="zoom-in" data-aos-easing="linear"
                data-aos-duration="1000" className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/*grid items*/}
                <div style={{backgroundImage: `url(${imgFigaro})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-sm font-bold text-white tracking-wider'>
                            Landing Page - Barbearia
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-300 font-bold text-lg bg-blue-500'>Visitar site</button>
                            </a>                            
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${imgMeufilho})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-sm font-bold text-white tracking-wider'>
                            App nutrição infantil
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-300 font-bold text-lg bg-blue-500'>Visitar site</button>
                            </a>                           
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${imgCSRN})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-sm font-bold text-white tracking-wider'>
                            Site empresarial
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-300 font-bold text-lg bg-blue-500'>Visitar site</button>
                            </a>                           
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${imgImc})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-sm font-bold text-white tracking-wider'>
                            App de cálculo de IMC
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-300 font-bold text-lg bg-blue-500'>Visitar site</button>
                            </a>                           
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${imgLP})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-sm font-bold text-white tracking-wider'>
                            Landing Page para evento
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-300 font-bold text-lg bg-blue-500'>Visitar site</button>
                            </a>                           
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${imgNotes})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-sm font-bold text-white tracking-wider'>
                            App para gerenciamento de links
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg px-4 py-3 m-2 text-gray-300 font-bold text-lg bg-blue-500'>Visitar site</button>
                            </a>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work;