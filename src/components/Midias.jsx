// Importando Dependencias
import React from "react";

// Importando Styles
import { MediaStyle } from '../styles/MediaStyles'

const Medias = () => {
  return (
    <MediaStyle>
      <div className="card">

        {/* Instagram */}
        <a href="https://www.instagram.com/__grustno_n1__/" className="socialContainer containerOne">
          ins
        </a>

        {/* Facebook */}
        <a href="https://www.youtube.com/@bonnapubg" className="socialContainer containerTwo">
          Yt
        </a>

        {/* LinkedIn */}
        <a href="https://mail.google.com/mail/u/0/?ogbl#inbox" className="socialContainer containerThree">
         gmail
        </a>

        {/* Youtube */}
        <a href="https://t.me/GreenParadiseHomes_bot" className="socialContainer containerFour">
         Tg bot
        </a>
      </div>
    </MediaStyle>
  );
};



export default Medias;
