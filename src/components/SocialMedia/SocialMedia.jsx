import React from 'react'
import './SocialMedia.css'
import telegram from '../../images/telegram.svg'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import git from '../../images/gitHub.svg'

export default function SocialMedia() {
    return (
        <div className='social-media__list'>
            <a className='social-media__icon' href="https://t.me/Uliyyyaaa" target="_blank">
                <img className='social-media__icon social-media__icon_telegram' alt="Телеграм" src={telegram} />
            </a>
            <a className='social-media__icon' href="https://instagram.com/uliyyyaaa?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                <img className='social-media__icon social-media__icon_instagram' alt="Инстаграм" src={instagram} />
            </a>
            <a className='social-media__icon' href="https://www.facebook.com/profile.php?id=100045973824238&mibextid=LQQJ4d" target="_blank">
                <img className='social-media__icon social-media__icon_facebook' alt="Фейсбук" src={facebook} />
            </a>
            <a className='social-media__icon' href="https://github.com/JuliaKrasnova2008" target="_blank">
                <img className='social-media__icon social-media__icon_git' alt="Гит" src={git} />
            </a>

        </div>
    )
}
