import React from 'react';
import AOS from 'aos';
AOS.init();


const About = () => {
  
  return (
    <div name='sobre' className='w-full h-screen bg-[#06050c] text-gray-300 bg-[url(./assets/star.svg)] bg-cover sm:my-4 my-40'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div data-aos="fade-right" data-aos-delay="300" data-aos-easing="linear"
              data-aos-duration="500" className='sm:text-right pb-8 pl-4 mt-24'>
                <p className='text-2xl sm:text-3xl font-bold inline border-b-2 border-blue-500'>Navegando Rumo ao Sucesso:</p>
              </div> 
              <div></div>
            </div> 

              <div data-aos="flip-down" data-aos-delay="300" data-aos-easing="linear"
               data-aos-duration="500" className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-1xl font-bold'>
                  <p> No mundo contemporâneo em constante transformação, a presença online deixou de ser uma opção para empresas e negócios - tornou-se uma necessidade premente. A interconexão global e a acessibilidade instantânea à informação moldaram um ambiente onde estar conectado ao mundo digital através de um sistema ou site é essencial para sobreviver e prosperar.</p>
                  <p className='text-blue-400'>Estar conectado ao mundo digital não é mais uma opção, mas sim uma necessidade vital para empresas e negócios que buscam prosperar em um cenário comercial em rápida mudança. Um sistema eficiente ou um site bem projetado não apenas oferece uma vitrine digital, mas também atua como uma ferramenta estratégica para construir relacionamentos, impulsionar o crescimento e posicionar sua marca para o sucesso duradouro.</p>
                </div>
                <div>
                  <p>
                  <strong className='text-blue-500'>1. Alcance Ampliado e Visibilidade Sem Fronteiras:</strong> <br />
                  Um site ou sistema online abre as portas para um mercado global. Com um simples clique, sua empresa pode ser descoberta por clientes em qualquer lugar do mundo; <br />
                  <strong className='text-blue-500'>2. Primeiras Impressões Duradouras:</strong> <br />
                  Seu site é muitas vezes o primeiro ponto de contato entre sua marca e seus clientes em potencial. Um design atraente e intuitivo, combinado com conteúdo relevante e de alta qualidade, cria uma primeira impressão positiva e duradoura. <br />
                  <strong className='text-blue-500'>3. Fortalecimento da Marca e Engajamento do Cliente:</strong> <br />
                  A presença digital permite que você conte a história da sua marca, destaque seus valores e se conecte emocionalmente com seu público. Além disso, interações através de mídias sociais, comentários e feedback fornecem oportunidades valiosas para envolver seus clientes de maneira significativa.
                  </p>
                </div>
              </div>  

            </div>
        </div>
    
  )
}

export default About;