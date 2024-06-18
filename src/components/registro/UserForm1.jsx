import React from 'react'

const UserForm = () => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome completo:</label>
        <input type='text' name='name' id='name' required/>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input type='email' name='email' id='email' required/>
      </div>
      <div className="form-control">
        <label htmlFor="password">Senha:</label>
        <input type='password' name='password' id='senha' required/>
      </div>
      <div className="form-control">
        <label htmlFor="password">Confirmar senha:</label>
        <input type='password' name='password' id='senha' required/>
      </div>
    </div>
  )
}

export default UserForm
