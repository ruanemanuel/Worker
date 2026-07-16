import React, { ReactElement } from 'react'

const Welcome = (): ReactElement => {
  return (
    <div className='flex flex-col p-6'>
        <h1 className="text-5xl font-semibold">Bem-vindo ao Onix</h1>
        <br />
        <br />
        <br />
        <p>
            Nesse dashboard, você consegue acessar vários materiais 
            gratuitos para lhe guiar nessa área da Programação.
        </p>
    </div>
  )
}

export default Welcome