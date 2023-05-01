import React from 'react';
import AOS from 'aos';
AOS.init();


const About = () => {
  
  return (
    <div name='sobre' className='w-full h-screen bg-[#06050c] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Sobre mim</p>
              </div> 
              <div></div>
            </div> 

              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p> Sou um desenvolvedor apaixonado por criar interfaces de usuário atraentes e interativas.</p>
                </div>
                <div>
                  <p>
                  Com experiência em HTML, CSS e JavaScript. Minha abordagem é baseada na colaboração com os usuários finais e o entendimento de suas necessidades para entregar soluções que sejam acessíveis e fáceis de usar. Trabalho com as mais recentes tecnologias, como React, Styled Components, Tailwind, etc, para garantir que minhas soluções sejam escaláveis e eficientes. <br /> Além disso, estou sempre procurando aprender novas tecnologias e metodologias para aprimorar minhas habilidades e entregar as melhores soluções para meus clientes.
                  </p>
                </div>
              </div>  

            </div>
        </div>
    
  )
}

export default About;