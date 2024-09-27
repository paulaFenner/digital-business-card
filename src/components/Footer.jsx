import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://mastodon.social/@paulaf" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-mastodon"></i>
        </a>
        <a href="https://www.instagram.com/chez.paula/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://github.com/paulaFenner" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-github"></i>
        </a>
      </div>
    </footer>
  );
}
