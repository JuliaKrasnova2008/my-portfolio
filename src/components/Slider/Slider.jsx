import React, { Children, cloneElement, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Slider.css'

export default function Slider({ children }) {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const PAGE__WIDTH = 800


    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE__WIDTH
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE__WIDTH
            const maxOffset = -(PAGE__WIDTH * (pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        minWidth: `${PAGE__WIDTH}px`,
                        maxWidth: `${PAGE__WIDTH}px`,
                        height: '100%',
                    },
                })
            })
        )
    }, [])

    return (
        <div className='main-container'>
            <FaChevronLeft className='arrow' onClick={handleLeftArrowClick}
                style={{
                    marginRight: '30',
                    opacity: '0.4',
                    height: '2em',
                }}
            />
            <div className='window'>
                <div className='all-pages-container'
                    style={{
                        transform: `translateX( ${offset}px)`,
                    }}

                >{children}</div>
            </div>
            <FaChevronRight className='arrow' onClick={handleRightArrowClick}
                style={{
                    marginLeft: '30',
                    opacity: '0.4',
                    height: '2em',
                }}
            />

        </div>
    )
}
