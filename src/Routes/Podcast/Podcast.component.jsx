import React from "react";
import Title from "../../Components/UI/Title/Title.component";
import "./Podcast.styles.css";
import logo from "../../Assets/faujitalks.png";
export default function Podcast() {
  return (
    <div className="podcast__page">
      <div>
        {/* <Title>FAUJI TALKS</Title> */}
        <h1 className="podcast__title">FAUJI ⚔️ TALKS</h1>
        <img className="podcast__logo" src={logo} alt="FAUJI TALKS Logo" />

        <div className="podcast__iconContainer">
          <a href="https://www.youtube.com/watch?v=KoTZ-io-Grs" target="_blank">
            <img src="https://img.icons8.com/color/48/null/youtube-play.png" />
          </a>
          <a href="https://www.instagram.com/paaniwalamajor/" target="_blank">
            <img src="https://img.icons8.com/bubbles/50/null/instagram-new--v2.png" />
          </a>
          <a href="https://twitter.com/paniwalamajor" target="_blank">
            <img src="https://img.icons8.com/fluency/48/null/twitter.png" />
          </a>
        </div>
        <article className="podcast__description">
          <p>
            Fauji Talks is a podcast platform that was founded by Lt Cdr Bijay
            Nair and Pranay Dwivedi in 2020. Our podcast features stories of
            incredible valor, grit, and determination of the unsung heroes of
            the Indian Armed Forces. Our new logo embodies the spirit of the
            brave Indian Armed Forces with an anchor representing the unwavering
            strength of the navy, the garud embodying the fearless courage of
            the air force, and the cross swords signifying the unbreakable
            readiness of the army for any challenge that comes their way. Our
            tagline, 'Swadharme nidhanam shreya,' taken from the Bhagavad Gita,
            is a way of life for our soldiers, meaning there is no greater glory
            than to die doing one's duty. In Season 2, we bring you the
            incredible journey of these selfless soldiers who make sacrifices
            every day to keep us safe. Join us as we pay tribute to their
            dedication and share their stories that will leave you in awe. We
            are honored to share these stories with you, so join us on this
            incredible journey .
          </p>
        </article>

        <div className="podcast__video__card">
          <div className="podcast__card">
            <img
              src="https://i.ytimg.com/vi/3EgS7tAUaBs/maxresdefault.jpg"
              alt="marcos"
            />
            <h2>Ex Marcos rates combat scenes from movies</h2>

            <a href="https://youtu.be/3EgS7tAUaBs" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
          <div className="podcast__card">
            <img
              src="http://i3.ytimg.com/vi/339IGQvTWys/hqdefault.jpg"
              alt="Maj abhay sapru"
            />
            <h2>Ex SF Operators s' Kashmir Adventures</h2>
            <a
              href="https://www.youtube.com/watch?v=339IGQvTWys"
              target="_blank"
            >
              <button>Watch Now</button>
            </a>
          </div>
          <div className="podcast__card">
            <img
              src="https://i.ytimg.com/vi/KE-NCju-qZ4/maxresdefault.jpg"
              alt="Maj abhay sapru"
            />
            <h2>Capt albert louis 9 Para SF Ghost operator</h2>
            <a href="https://youtu.be/KE-NCju-qZ4" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
          <div className="podcast__card">
            <img
              src="https://i.ytimg.com/vi/a2nmYiRpxms/sddefault.jpg"
              alt="IPS SP VAID"
            />
            <h2>TOP COP SP VAID , Former DGP JK POLICE</h2>
            <a href="https://youtu.be/a2nmYiRpxms" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
