// Importando Dependencias
import React from 'react'

// Importando Styles
import { LoadingStyle, Loader } from '../styles/LoadingStyle'


const Loading = () => {
    return (
        <>
        <LoadingStyle>
            {/* Página de carregamento */}
            <Loader>
                <div className='light'></div>
                <div className='black_overlay'></div>
            </Loader>
        </LoadingStyle>
        </>
    )
}

export default Loading