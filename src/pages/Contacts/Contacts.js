import React from 'react';

import Header from '../../components/Header/Header';

import './Contacts.scss';

export default function Contacts() {
  return (
    <div className="app">
      <Header />
      <div className="contacts">
        <h3 className="contacts__title">Telegram</h3>
        <a href="https://t.me/CastielFire" className="contacts__text">CastielFire</a>
        <h3 className="contacts__title">Email</h3>
        <span className="contacts__text">bogdanthecas@gmail.com</span>
        <h3 className="contacts__title">GitHub</h3>
        <a href='https://github.com/Casonyx' className="contacts__text">Casonyx</a>
      </div>
    </div>
  )
}
