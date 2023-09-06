import React from 'react'
import cv from '../../Krasnova.pdf'


export default function CV() {
    return (
        <iframe
            className='cv__page'
            src={cv}
            style={{ width: "100%", height: "100vh" }}
            title="cv"
        >
            не удалось показать документ
        </iframe>
    )
}
