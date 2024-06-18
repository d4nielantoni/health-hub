import React from 'react'

const UserForm2 = () => {
  return (
    <div className='user-form2'>
      <div className="form-control2">
        <label htmlFor="tel">Telefone:</label>
        <input type='tel' name='telefone' id='telefone' required/>
      </div>
      <div className="form-control2">
        <label htmlFor="text">CEP:</label>
        <input type='text' name='cep' id='cep' required/>
      </div>
      <div className="form-control2">
        <label htmlFor="text">Cidade:</label>
        <input type='text' name='cidade' id='cidade' required/>
      </div>
      <div className="form-control2">
        <label htmlFor="text">Estado:</label>
        <input type='text' name='estado' id='estado' required/>
      </div>
      <div className="form-control2">
        <label htmlFor="text">Endereço:</label>
        <input type='text' name='endereco' id='endereco' required/>
      </div>
    </div>
  )
}

export default UserForm2
