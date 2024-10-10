import React from 'react';

export default function Header() {
  return (
    <header>
      <img className="profile-image" src="/paula-profile-2.jpg" alt="" />
      <section className="info">
        <div className="personal">
          <h1>Paula Fenner</h1>
          <h3>Frontend Developer</h3>
          <a className="website-url" href="http://" target="_blank" rel="noopener noreferrer">
            paulafenner.website
          </a>
        </div>
        <div className="contact">
          <a className="mail-btn button" href="mailto:fenner.paula@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope"></i>Email
          </a>
          <a className="linkedin-btn button" href="https://www.linkedin.com/in/paula-fenner-6b926043" target="_blank">
            <i className="fa-brands fa-linkedin"></i>LinkedIn
          </a>
        </div>
      </section>
    </header>
  );
}
