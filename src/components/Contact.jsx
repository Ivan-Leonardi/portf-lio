import React from 'react';

const Contact = () => {
  return (
    <div name='contato' className='w-full md:h-screen bg-[#06050c] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/1abd8888-5a54-4edb-aad5-b151d32d4c9b" className='flex flex-col max-w-[600px] w-full'>
            <div pb-8>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300'>Contato</p>
                <p className='text-gray-300 py-4'>Estou pronto para ouvir você! Utilize o formulário abaixo para entrar em contato.</p>
            </div>
            <input className='p-2 bg-[#ccd6f6] rounded-md outline-none placeholder-gray-500' type="text" placeholder='Nome completo' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md outline-none placeholder-gray-500' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2 rounded-md outline-none placeholder-gray-500' name="message" rows="10" placeholder='Menssagem'></textarea>
            <button className='text-white border-[1px] hover:bg-blue-500 hover:border-blue-500 px-4 py-2 my-8 mx-auto flex items-center rounded-md'>Enviar agora</button>
        </form>
    </div>
  )
}

export default Contact;