import React, {useEffect} from 'react';



function Header() {
  useEffect(()=>{
    let bg = document.getElementById("bg");
    let moon = document.getElementById("moon");
    let mountain = document.getElementById("mountain");
    let interview = document.getElementById("interview");
    // let text = document.getElementById("text");
  
    window.addEventListener('scroll', function(){
      var value = window.scrollY;
  
      bg.style.top = value * 0.5 + 'px';
      moon.style.left = -value * .65 + 'px';
      mountain.style.top = -value * 0.15 + 'px';
      interview.style.top = value * 0.15 + 'px';
      // text.style.top = value * 0.5 + 'px';
  
    })
  }, []);





  return (
   
    <header style={{ position: 'relative', zIndex: '1' }}>
    
      {/* <div> 
        <p><img src="/img/bg.jpg" id="bg" alt="Background"/></p>
      </div> */}
      <section>
        <img src="/img/bg.jpg" id="bg" alt="Background"/>
        <img src="/img/moon.png" id="moon" alt="Moon"/>
        <img src="/img/mountain.png" id="mountain" alt="Mountain"/>
        <img src="/img/interview.png" id="interview" alt="Interview"/>
      </section>
    </header>
    
  );
}

export default Header;