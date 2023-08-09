import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [emptyValues, setEmptyValues] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const handleChange = (e) => {
    let newProp = form;
    setValidEmail(true);
    newProp[e.target.name] = e.target.value;
    setForm({ ...newProp });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emptyValues = Object.values(form).some(obj => obj == "");
    setEmptyValues(emptyValues);

    let validEmail = form.email.toLowerCase().match(/[a-z0-9]+@[a-z]+\.com(\.br)*/);
    setValidEmail(validEmail);

    if (!emptyValues && validEmail) {
      e.currentTarget.submit();      
    }
    
  }; 

  return (
    <div data-aos="zoom-in-up" data-aos-delay="500" data-aos-easing="linear"
    data-aos-duration="1000" name='contato' className='w-full md:h-screen bg-[#06050c] flex justify-center items-center p-4 bg-[url(./assets/star.svg)] bg-cover mt-12'>
      <form onSubmit={(e) => (handleSubmit(e))} method='POST' action="https://getform.io/f/1abd8888-5a54-4edb-aad5-b151d32d4c9b" className='flex flex-col max-w-[600px] w-full'>
        <div pb-8>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300'>Contato</p>
          <p className='text-gray-100 py-4'>Estou pronto para ouvir você! Utilize o formulário abaixo para entrar em contato.</p>
        </div>

        <input className='p-2 bg-[#ffedff] rounded-md outline-none placeholder-gray-400' type="text" placeholder='Nome completo' name='name' onChange={(e) => handleChange(e)} />
        {emptyValues && form.name == "" ? <span className='text-red-500'>O campo nome precisa ser preenchido</span> : ""}

        <input className='my-4 p-2 bg-[##ffedff] rounded-md outline-none placeholder-gray-400' type="email" placeholder='Email' name='email' onChange={(e) => handleChange(e)} />
        {emptyValues && form.email == "" ? <span className='text-red-500 mb-[18px]'>O campo email precisa ser preenchido</span> : ""}
        {!validEmail && form.email !== "" ? <span className='text-red-500 mb-[18px]'>Email inválido!</span> : ""}

        <textarea className='bg-[#ffedff] p-2 rounded-md outline-none placeholder-gray-400' name="message" rows="10" placeholder='Menssagem' onChange={(e) => handleChange(e)}></textarea>
        {emptyValues && form.message == "" ? <span className='text-red-500'>O campo de menssagem deve conter um texto</span> : ""}

        <button type='submit' className='text-white border-[1px] hover:bg-blue-500 hover:border-blue-500 px-4 py-2 my-8 mx-auto flex items-center rounded-md'>Enviar agora</button>
      </form>
    </div>
  )
}

export default Contact;