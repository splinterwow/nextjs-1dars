'use client'; 

import React, { useRef } from 'react';
import '../app/styles/index.css';

const Home = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hed-main">
      <div className='conta'>
        <header>
          <h1>MNTN</h1>
          <ul>
            <li>Equipment</li>
            <li>About us</li>
            <li>Blog</li>
          </ul>
          <p>Account</p>
        </header>

        <main>
          <div className="mainfollow">
            <p>Follow us</p>
          </div>
          <div className="mainn">
            <p>-----A Hiking guide</p>
            <h1>Be prepared for the <br /> Mountains and beyond!</h1>
            <h2>scroll down</h2>
          </div>

          <div className="pagess">
            <ul>
              <li onClick={() => scrollToSection(section1Ref)}>Start</li> <br />
              <li onClick={() => scrollToSection(section2Ref)}>01</li> <br />
              <li onClick={() => scrollToSection(section3Ref)}>02</li> <br />
              <li>03</li>
            </ul>
            <hr />
          </div>
        </main>

        {/* Bu yerda ref'larni qo'llash */}
        <div className="maintwo" ref={section1Ref}>
          <div className="mainpagess">
            <div className="paragraph">
              <h2>-----GEt Started</h2>
              <h1>What level of hiker <br /> are you?</h1>
              <p>Determining what level of hiker you are can be an important tool when planning future hikes...</p>
              <span> read more- </span>
            </div>
            <img src="https://i.ytimg.com/vi/BirrM-u9xHs/maxresdefault.jpg" alt="" />
          </div>
        </div>

        <div className="mainpagess" ref={section2Ref}>
          <img src="https://i.pinimg.com/originals/a5/1a/cb/a51acbb0407a5a2f4400df65d970897b.jpg" alt="" />
          <div className="paragraph">
            <h2>-----Hiking Essentials</h2>
            <h1>Picking the right <br /> Hiking Gear!</h1>
            <p>The nice thing about beginning hiking is that you don’t really need any special gear...</p>
            <span> read more- </span>
          </div>
        </div>

        <div className="mainpagess" ref={section3Ref}>
          <div className="paragraph">
            <h2>-----where you go is the key</h2>
            <h1>Understand Your  <br /> Map & Timing</h1>
            <p>To start, print out the hiking guide and map...</p>
            <span> read more- </span>
          </div>
          <img src="https://thumbs.dreamstime.com/b/male-hiker-looking-direction-magnetic-compass-mountains-fall-point-view-shot-man-s-hand-watch-bracelet-134178552.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
