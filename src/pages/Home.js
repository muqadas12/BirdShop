import React from "react"


function Home() {
  return (
   <div>
  <div className="loader_bg">
    <div className="loader"><img src="images/loading.gif" alt="#" /></div>
  </div>
  {/* end loader */}
  {/* header */}
  <header id="home">
    {/* header inner */}
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
            <div className="full">
              <div className="center-desk">
                <div className="logo"> <a href="index.html"><img style={{width:'90px'}} src="images/logo2.png" alt="#" /><span style={{fontWeight:'bold', color:'lightgreen',fontStyle:'italic'}}>Birds Shop</span></a> </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <div className="menu-area">
              <div className="limit-box">
                <nav className="main-menu">
                  <ul className="menu-area-main">
                    <li className="active"><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#birds">Birds</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end header inner */}
  </header>
  {/* end header */}
  <section className="slider_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="full">
            <h1><strong className="cur">Famous</strong><br />Birds of  World</h1>
            <p>Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.</p>
            <div className="button_section"><a className="main_bt" href="#">Buy Now</a></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="full text_align_center">
            <img style={{marginLeft:'140px'}} src="images/s4.png" alt="#" /> 
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about */}
  <div id="about" className="about layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="img-responsive" src="images/cage.jpg" alt="#" />
        </div>
        <div className="col-md-6">
          <div className="heading margin_top_30">
            <h2>About our shop</h2>
          </div>
          <div className="full margin_top_20">
            <p>Our shop is located in islamabad which contain different types of birds of diferent countries.These birds are attractive and their sound give peace of mind.These are availiable at very normal price.Anyone can afford to buy.</p>
          </div>
          <div className="full margin_top_30">
            <a className="main_bt" href="#Page1">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end about */}
  {/* section */}
  <div id="birds" className="sectionh">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="heading full text_align_center">
            <h2 className="white_font full text_align_center">Our Birds</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 margin_top_30">
          <div className="full fr">
            <img className="img-responsive" src="images/b31.jpg" alt="#" />
          </div>
          <div className="full text_align_center">
            <h3 className="white_font">Psittacidae<br /><strong className="theme_blue">Famous Bird</strong></h3>
          </div>   
        </div>
        <div className="col-md-4 margin_top_30">
          <div className="full fr">
            <img className="img-responsive" src="images/b444.jpg" alt="#" />
          </div>
          <div className="full text_align_center">
            <h3 className="white_font">Horned Lark<br /><strong className="theme_blue">Famous Bird</strong></h3>
          </div>
        </div>
        <div className="col-md-4 margin_top_30">
          <div className="full fr">
            <img className="img-responsive" src="images/b55.jpg" alt="#" />
          </div>
          <div className="full text_align_center">
            <h3 className="white_font">Turkey<br /><strong className="theme_blue">Fresh Fruit</strong></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end section */}
  {/* section */}
  <div className="section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="full main_heading_1">
            <h2 style={{color:'lightgreen'}}>Famous Bird</h2>
            <p>The national bird of Pakistan is Chukar partridge. They are commonly known as Chakor and it is a Eurasian upland game bird in the pheasant family Phasianidae. Pakistan‘s national bird, Chukar partridge has middle size like 32-35cm range. The Chukar partridge cannot fly in a long distance. It is mostly related and similar to its western equivalent; the round shape Red-legged Partridge is considered as the national bird of Pakistan. </p>
          </div>   
          <div className="full margin_top_30">
            <a className="main_btnn" href="#">Read More</a>
          </div>
        </div>
        <div className="col-md-6 margin_top_30 padding_right_0">
          <div className="full">
            <img style={{marginLeft:"-30px"}} src="images/c9.png" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end section */}
  {/* section */}
  <div id="blog" className="sectionh">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="heading full text_align_center">
            <h2 className="white_font full text_align_center">Our Blog</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 margin_top_30">
          <div className="full" style={{overflow: 'hidden'}}>
            <div className="full bl">
              <img className="img-responsive" src="images/bc1.jpg" alt="#" />
            </div>
            <div className="full blog_blue text_align_center">
              <h5 className="white_font">Post by Muqaddas Shaaban 27/01/2021</h5>
              <p>Living up to its name, this species is an unconventional wanderer that’s always on the move in search of fruit throughout North America and Eurasia. Unlike other songbirds, it is not territorial and has no true song of its own.</p>
            </div> 
          </div>  
        </div>
        <div className="col-md-4 margin_top_30">
          <div className="full" style={{overflow: 'hidden'}}>
            <div className="full bl">
              <img className="img-responsive" src="images/bb.jpg" alt="#" />
            </div> 
            <div className="full blog_blue text_align_center">
              <h5 className="white_font">Post by Muqaddas Shaaban 27/01/2021</h5>
              <p>Also known as the grey-crowned crane, the African crowned crane stands tall and noble, decked out with an imperial-looking dress uniform that begins with his spiky, golden crest, poofy black forehead, and white cheeks.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 margin_top_30">
          <div className="full" style={{overflow: 'hidden'}}>
            <div className="full bl">
              <img className="img-responsive" src="images/bcv.jpg" alt="#" />
            </div> 
            <div className="full blog_blue text_align_center">
              <h5 className="white_font">Post by Muqaddas Shaaban 27/01/2021</h5>
              <p>With his emerald green throat, yellow crown, blue beak, maroon-brown plumage, and long, billowing flank plumes of yellow and white, the male makes a spectacular sight.

              These birds may be beautiful, but they do lack a certain… finesse.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end section */}
  {/* section */}
  <div id="contact" className="section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 padding_left_0">
          <div className="full">
            <img className="float-left" src="images/cc1.jpg" alt="#" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="heading">
            <h2>Request a <strong className="theme_blue">Call Back</strong></h2>
          </div>
          <div className="full margin_top_20">
            <form>
              <div className="row">
                <div className="col-sm-12">
                  <input className="form-control" placeholder="Your Name" type="text" required />
                </div>
                <div className="col-sm-12">
                  <input className="form-control" placeholder="Email" type="Email" required />
                </div>
                <div className="col-sm-12">
                  <input className="form-control" placeholder="Phone" type="text" required />
                </div>
                <div className="col-sm-12">
                  <textarea className="form-control textarea" placeholder="Message" defaultValue={""} />
                </div>
              </div>
              <button className="main_bt">Send</button>
            </form>
          </div>   
        </div>
      </div>
    </div>
  </div>
  {/* end section */}
  {/* footer */}
  <footer>
    <div className="footer layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3 style={{marginLeft:'-30px'}}>Contact Us</h3>
            <p>Bahria Town islamabad<br /><br />(+91) 097 494 2310<br /><br />muq@gmail.com</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3 style={{marginLeft:'-150px'}}>Pages</h3>
            <p>
              <a href="#home">Home</a><br />
              <a href="#about">About Us</a><br />
              <a href="#birds">Birds</a><br />
              <a href="#blog">Blog</a><br />
              <a href="#contact">Contact Us</a>
            </p></div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Recent Post</h3>
            <p><span><img src="images/bccc.jpg" /></span><span>Bohemian Waxwing</span></p>
            <p className="margin_top_20"><span><img src="images/bcvv.jpg" /></span><span>Greater Bird of Paradise</span></p>
            <p className="margin_top_20"><span><img src="images/b1313.jpg" /></span><span>African Crowned Crane</span></p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3>Newsletter</h3>
            <p>
            </p><form>
              <input type="text" name="email" placeholder="Enter Your Email" /> 
              <button>Subscribe</button>
            </form>
            <p />
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <p>Copyright 2021 All Right Reserved </p>
      </div>
    </div>
  </footer>
</div>

  );
}

export default Home;
