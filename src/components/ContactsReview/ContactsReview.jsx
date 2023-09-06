import React from 'react'
import './ContactsReview.css'

export default function ContactsReview() {
    return (
        <div className='contacts-review'>
            <h3 className='section__title'>CONTACTS</h3>

            <h4 className='review__heading'>Location</h4>
            <p className='review__subtitle'>Moscow, Russia</p>

            <h4 className='review__heading'>Telegram / WhatsApp</h4>
            <a className='review__subtitle review__subtitle_link' href="tel:+79315828252">+7 (931) 582-82-52</a>

            <h4 className='review__heading'>Email</h4>
            <a className='review__subtitle review__subtitle_link' href='mailto:ul1ya2008@bk.ru' target="_blank">ul1ya2008@bk.ru</a>
        </div>
    )
}
