import React from 'react'

function Home() {
    return (
        <>

{/* <!--START SCROLL TOP BUTTON --> */}
    <a className="scrollToTop" href="#">
      <i className="fa fa-angle-up"></i>      
    </a>
  {/* <!-- END SCROLL TOP BUTTON --> */}

  {/* <!-- Start header  --> */}
  <header id="mu-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="mu-header-area">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="mu-header-top-left">
                  <div className="mu-top-email">
                    <i className="fa fa-envelope"></i>
                    <span>info@markups.io</span>
                  </div>
                  <div className="mu-top-phone">
                    <i className="fa fa-phone"></i>
                    <span>(568) 986 652</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div className="mu-header-top-right">
                  <nav>
                    <ul className="mu-top-social-nav">
                      <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                      <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                      <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                      <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                      <li><a href="#"><span className="fa fa-youtube"></span></a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* <!-- End header  --> */}
  {/* <!-- Start menu --> */}
  <section id="mu-menu">
    <nav className="navbar navbar-default" role="navigation">  
      <div className="container">
        <div className="navbar-header">
          {/* <!-- FOR MOBILE VIEW COLLAPSED BUTTON --> */}
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* <!-- LOGO -->               */}
          {/* <!-- TEXT BASED LOGO --> */}
          <a className="navbar-brand" href="index.html"><i className="fa fa-university"></i><span>Sadaf School</span></a>
          {/* <!-- IMG BASED LOGO  --> */}
          {/* <!-- <a className="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="logo"/></a> --> */}
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul id="top-menu" className="nav navbar-nav navbar-right main-nav">
            <li className="active"><a href="index.html">Home</a></li>            
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Course <span className="fa fa-angle-down"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li><a href="course.html">Course Archive</a></li>                
                <li><a href="course-detail.html">Course Detail</a></li>                
              </ul>
            </li>           
            <li><a href="gallery.html">Gallery</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog <span className="fa fa-angle-down"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li><a href="blog-archive.html">Blog Archive</a></li>                
                <li><a href="blog-single.html">Blog Single</a></li>                
              </ul>
            </li>            
            <li><a href="contact.html">Contact</a></li>
            <li><a href="404.html">404 Page</a></li>               
            <li><a href="#" id="mu-search-icon"><i className="fa fa-search"></i></a></li>
          </ul>                     
        </div>
        {/* <!--/.nav-collapse -->         */}
      </div>     
    </nav>
  </section>
  {/* <!-- End menu -->
  <!-- Start search box --> */}
  <div id="mu-search">
    <div className="mu-search-area">      
      <button className="mu-search-close"><span className="fa fa-close"></span></button>
      <div className="container">
        <div className="row">
          <div className="col-md-12">            
            <form className="mu-search-form">
              <input type="search" placeholder="Type Your Keyword(s) & Hit Enter" />              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End search box -->
  <!-- Start Slider --> */}
  <section id="mu-slider">
    {/* <!-- Start single slider item --> */}
    <div className="mu-slider-single">
      <div className="mu-slider-img">
        <figure>
          <img src="assets/img/slider/1.jpg" alt="img" />
        </figure>
      </div>
      <div className="mu-slider-content">
        <h4>Welcome To Sadaf School</h4>
        <span></span>
        <h2>We Will Help You To Learn</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus recusandae accusamus.</p>
        <a href="#" className="mu-read-more-btn">Read More</a>
      </div>
    </div>
    {/* <!-- Start single slider item -->
    <!-- Start single slider item --> */}
    <div className="mu-slider-single">
      <div className="mu-slider-img">
        <figure>
          <img src="assets/img/slider/2.jpg" alt="img" />
        </figure>
      </div>
      <div className="mu-slider-content">
        <h4>Premiumu Quality Free Template</h4>
        <span></span>
        <h2>Best Education Template Ever</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus recusandae accusamus.</p>
        <a href="#" className="mu-read-more-btn">Read More</a>
      </div>
    </div>
    {/* <!-- Start single slider item -->
    <!-- Start single slider item --> */}
    <div className="mu-slider-single">
      <div className="mu-slider-img">
        <figure>
          <img src="assets/img/slider/3.jpg" alt="img" />
        </figure>
      </div>
      <div className="mu-slider-content">
        <h4>Exclusivly For Education</h4>
        <span></span>
        <h2>Education For Everyone</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus recusandae accusamus.</p>
        <a href="#" className="mu-read-more-btn">Read More</a>
      </div>
    </div>
    {/* <!-- Start single slider item -->     */}
  </section>
  {/* <!-- End Slider -->
  <!-- Start service  --> */}
  <section id="mu-service">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="mu-service-area">
            {/* <!-- Start single service --> */}
            <div className="mu-service-single">
              <span className="fa fa-book"></span>
              <h3>Learn Online</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
            </div>
            {/* <!-- Start single service --> */}
            {/* <!-- Start single service --> */}
            <div className="mu-service-single">
              <span className="fa fa-users"></span>
              <h3>Expert Teachers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
            </div>
            {/* <!-- Start single service -->
            <!-- Start single service --> */}
            <div className="mu-service-single">
              <span className="fa fa-table"></span>
              <h3>Best classNamerooms</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officiis, deleniti dolorem exercitationem praesentium, est!</p>
            </div>
            {/* <!-- Start single service --> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End service  -->

  <!-- Start about us --> */}
  <section id="mu-about-us">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-about-us-area">           
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="mu-about-us-left">
                  {/* <!-- Start Title --> */}
                  <div className="mu-title">
                    <h2>About Us</h2>              
                  </div>
                  {/* <!-- End Title --> */}
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum pariatur fuga eveniet soluta aspernatur rem, nam voluptatibus voluptate voluptates sapiente, inventore. Voluptatem, maiores esse molestiae.</p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Saepe a minima quod iste libero rerum dicta!</li>
                    <li>Voluptas obcaecati, iste porro fugit soluta consequuntur. Veritatis?</li>
                    <li>Ipsam deserunt numquam ad error rem unde, omnis.</li>
                    <li>Repellat assumenda adipisci pariatur ipsam eos similique, explicabo.</li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quaerat harum facilis excepturi et? Mollitia!</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="mu-about-us-right">                            
                <a id="mu-abtus-video" href="https://www.youtube.com/embed/HN3pm9qYAUs" target="mutube-video">
                  <img src="assets/img/about-us.jpg" alt="img" />
                </a>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End about us --> */}

  {/* <!-- Start about us counter --> */}
  <section id="mu-abtus-counter">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-abtus-counter-area">
            <div className="row">
              {/* <!-- Start counter item --> */}
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-abtus-counter-single">
                  <span className="fa fa-book"></span>
                  <h4 className="counter">568</h4>
                  <p>Subjects</p>
                </div>
              </div>
              {/* <!-- End counter item --> */}
              {/* <!-- Start counter item --> */}
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-abtus-counter-single">
                  <span className="fa fa-users"></span>
                  <h4 className="counter">3500</h4>
                  <p>Students</p>
                </div>
              </div>
              {/* <!-- End counter item --> */}
              {/* <!-- Start counter item --> */}
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-abtus-counter-single">
                  <span className="fa fa-flask"></span>
                  <h4 className="counter">65</h4>
                  <p>Modern Lab</p>
                </div>
              </div>
              {/* <!-- End counter item --> */}
              {/* <!-- Start counter item --> */}
              <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="mu-abtus-counter-single no-border">
                  <span className="fa fa-user-secret"></span>
                  <h4 className="counter">250</h4>
                  <p>Teachers</p>
                </div>
              </div>
              {/* <!-- End counter item --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End about us counter --> */}

  {/* <!-- Start features section --> */}
  <section id="mu-features">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="mu-features-area">
            {/* <!-- Start Title --> */}
            <div className="mu-title">
              <h2>Our Features</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa ea maxime mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat sunt animi!</p>
            </div>
            {/* <!-- End Title --> */}
            {/* <!-- Start features content --> */}
            <div className="mu-features-content">
              <div className="row">
                <div className="col-lg-4 col-md-4  col-sm-6">
                  <div className="mu-single-feature">
                    <span className="fa fa-book"></span>
                    <h4>Professional Courses</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="mu-single-feature">
                    <span className="fa fa-users"></span>
                    <h4>Expert Teachers</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="mu-single-feature">
                    <span className="fa fa-laptop"></span>
                    <h4>Online Learning</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="mu-single-feature">
                    <span className="fa fa-microphone"></span>
                    <h4>Audio Lessons</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="mu-single-feature">
                    <span className="fa fa-film"></span>
                    <h4>Video Lessons</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="mu-single-feature">
                    <span className="fa fa-certificate"></span>
                    <h4>Professional Certificate</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End features content --> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* {/* <!-- End features section --> */}

  
  {/* <!-- Start latest course section --> */}
  <section id="mu-latest-courses">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="mu-latest-courses-area">
            {/* <!-- Start Title --> */}
            <div className="mu-title">
              <h2>Latest Courses</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa ea maxime mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat sunt animi!</p>
            </div>
            {/* <!-- End Title --> */}
            {/* <!-- Start latest course content --> */}
            <div id="mu-latest-course-slide" className="mu-latest-courses-content">
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="mu-latest-course-single">
                  <figure className="mu-latest-course-img">
                    <a href="#"><img src="assets/img/courses/1.jpg" alt="img" /></a>
                    <figcaption className="mu-latest-course-imgcaption">
                      <a href="#">Drawing</a>
                      <span><i className="fa fa-clock-o"></i>90Days</span>
                    </figcaption>
                  </figure>
                  <div className="mu-latest-course-single-content">
                    <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                    <div className="mu-latest-course-single-contbottom">
                      <a className="mu-course-details" href="#">Details</a>
                      <span className="mu-course-price" href="#">$165.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="mu-latest-course-single">
                  <figure className="mu-latest-course-img">
                    <a href="#"><img src="assets/img/courses/2.jpg" alt="img" /></a>
                    <figcaption className="mu-latest-course-imgcaption">
                      <a href="#">Engineering </a>
                      <span><i className="fa fa-clock-o"></i>75Days</span>
                    </figcaption>
                  </figure>
                  <div className="mu-latest-course-single-content">
                    <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                    <div className="mu-latest-course-single-contbottom">
                      <a className="mu-course-details" href="#">Details</a>
                      <span className="mu-course-price" href="#">$165.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="mu-latest-course-single">
                  <figure className="mu-latest-course-img">
                    <a href="#"><img src="assets/img/courses/3.jpg" alt="img" /></a>
                    <figcaption className="mu-latest-course-imgcaption">
                      <a href="#">Academic</a>
                      <span><i className="fa fa-clock-o"></i>45Days</span>
                    </figcaption>
                  </figure>
                  <div className="mu-latest-course-single-content">
                    <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                    <div className="mu-latest-course-single-contbottom">
                      <a className="mu-course-details" href="#">Details</a>
                      <span className="mu-course-price" href="#">$165.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="mu-latest-course-single">
                  <figure className="mu-latest-course-img">
                    <a href="#"><img src="assets/img/courses/1.jpg" alt="img" /></a>
                    <figcaption className="mu-latest-course-imgcaption">
                      <a href="#">Drawing</a>
                      <span><i className="fa fa-clock-o"></i>90Days</span>
                    </figcaption>
                  </figure>
                  <div className="mu-latest-course-single-content">
                    <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                    <div className="mu-latest-course-single-contbottom">
                      <a className="mu-course-details" href="#">Details</a>
                      <span className="mu-course-price" href="#">$165.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="mu-latest-course-single">
                  <figure className="mu-latest-course-img">
                    <a href="#"><img src="assets/img/courses/1.jpg" alt="img" /></a>
                    <figcaption className="mu-latest-course-imgcaption">
                      <a href="#">Drawing</a>
                      <span><i className="fa fa-clock-o"></i>90Days</span>
                    </figcaption>
                  </figure>
                  <div className="mu-latest-course-single-content">
                    <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                    <div className="mu-latest-course-single-contbottom">
                      <a className="mu-course-details" href="#">Details</a>
                      <span className="mu-course-price" href="#">$165.00</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="mu-latest-course-single">
                  <figure className="mu-latest-course-img">
                    <a href="#"><img src="assets/img/courses/3.jpg" alt="img" /></a>
                    <figcaption className="mu-latest-course-imgcaption">
                      <a href="#">Academic</a>
                      <span><i className="fa fa-clock-o"></i>45Days</span>
                    </figcaption>
                  </figure>
                  <div className="mu-latest-course-single-content">
                    <h4><a href="#">Lorem ipsum dolor sit amet.</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod nisi quisquam modi dolore, dicta obcaecati architecto quidem ullam quia.</p>
                    <div className="mu-latest-course-single-contbottom">
                      <a className="mu-course-details" href="#">Details</a>
                      <span className="mu-course-price" href="#">$165.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* // <!-- End latest course content --> */}
          </div>
        </div>
      </div>
    
    
  </section>
{/* //   <!-- End latest course section --> */}

  {/* <!-- Start our teacher --> */}
  <section id="mu-our-teacher">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-our-teacher-area">
            {/* <!-- begain title --> */}
            <div className="mu-title">
              <h2>Our Teachers</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repudiandae, suscipit repellat minus molestiae ea.</p>
            </div>
            {/* <!-- end title --> */}
            {/* <!-- begain our teacher content --> */}
            <div className="mu-our-teacher-content">
              <div className="row">
                <div className="col-lg-3 col-md-3  col-sm-6">
                  <div className="mu-our-teacher-single">
                    <figure className="mu-our-teacher-img">
                      <img src="assets/img/teachers/teacher-01.png" alt="teacher img" />
                      <div className="mu-our-teacher-social">
                        <a href="#"><span className="fa fa-facebook"></span></a>
                        <a href="#"><span className="fa fa-twitter"></span></a>
                        <a href="#"><span className="fa fa-linkedin"></span></a>
                        <a href="#"><span className="fa fa-google-plus"></span></a>
                      </div>
                    </figure>                    
                    <div className="mu-ourteacher-single-content">
                      <h4>Brian Dean</h4>
                      <span>Math Teacher</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quod pariatur recusandae odio dignissimos. Eligendi.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3  col-sm-6">
                  <div className="mu-our-teacher-single">
                    <figure className="mu-our-teacher-img">
                      <img src="assets/img/teachers/teacher-01.png" alt="teacher img" />
                      <div className="mu-our-teacher-social">
                        <a href="#"><span className="fa fa-facebook"></span></a>
                        <a href="#"><span className="fa fa-twitter"></span></a>
                        <a href="#"><span className="fa fa-linkedin"></span></a>
                        <a href="#"><span className="fa fa-google-plus"></span></a>
                      </div>
                    </figure>                    
                    <div className="mu-ourteacher-single-content">
                      <h4>Brian Dean</h4>
                      <span>Math Teacher</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quod pariatur recusandae odio dignissimos. Eligendi.</p>
                    </div>
                  </div>
                </div>
                
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="mu-our-teacher-single">
                    <figure className="mu-our-teacher-img">
                      <img src="assets/img/teachers/teacher-03.png" alt="teacher img" />
                      <div className="mu-our-teacher-social">
                        <a href="#"><span className="fa fa-facebook"></span></a>
                        <a href="#"><span className="fa fa-twitter"></span></a>
                        <a href="#"><span className="fa fa-linkedin"></span></a>
                        <a href="#"><span className="fa fa-google-plus"></span></a>
                      </div>
                    </figure>                    
                    <div className="mu-ourteacher-single-content">
                      <h4>Rebeca Michel</h4>
                      <span>English Teacher</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quod pariatur recusandae odio dignissimos. Eligendi.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="mu-our-teacher-single">
                    <figure className="mu-our-teacher-img">
                      <img src="assets/img/teachers/teacher-03.png" alt="teacher img" />
                      <div className="mu-our-teacher-social">
                        <a href="#"><span className="fa fa-facebook"></span></a>
                        <a href="#"><span className="fa fa-twitter"></span></a>
                        <a href="#"><span className="fa fa-linkedin"></span></a>
                        <a href="#"><span className="fa fa-google-plus"></span></a>
                      </div>
                    </figure>                    
                    <div className="mu-ourteacher-single-content">
                      <h4>Rebeca Michel</h4>
                      <span>English Teacher</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quod pariatur recusandae odio dignissimos. Eligendi.</p>
                    </div>
                  </div>
                </div>
               
            </div> 
            {/* <!-- End our teacher content -->            */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End our teacher --> */}

  {/* <!-- Start testimonial --> */}
  <section id="mu-testimonial">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-testimonial-area">
            <div id="mu-testimonial-slide" className="mu-testimonial-content">
              {/* <!-- start testimonial single item --> */}
              <div className="mu-testimonial-item">
                <div className="mu-testimonial-quote">
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.</p>
                  </blockquote>
                </div>
                <div className="mu-testimonial-img">
                  <img src="assets/img/testimonial-1.png" alt="img" />
                </div>
                <div className="mu-testimonial-info">
                  <h4>John Doe</h4>
                  <span>Happy Student</span>
                </div>
              </div>
              {/* <!-- end testimonial single item -->
              <!-- start testimonial single item --> */}
              <div className="mu-testimonial-item">
                <div className="mu-testimonial-quote">
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.</p>
                  </blockquote>
                </div>
                <div className="mu-testimonial-img">
                  <img src="assets/img/testimonial-3.png" alt="img" />
                </div>
                <div className="mu-testimonial-info">
                  <h4>Rebaca Michel</h4>
                  <span>Happy Parent</span>
                </div>
              </div>
              {/* <!-- end testimonial single item -->
              <!-- start testimonial single item --> */}
              <div className="mu-testimonial-item">
                <div className="mu-testimonial-quote">
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.</p>
                  </blockquote>
                </div>
                <div className="mu-testimonial-img">
                  <img src="assets/img/testimonial-2.png" alt="img" />
                </div>
                <div className="mu-testimonial-info">
                  <h4>Stev Smith</h4>
                  <span>Happy Student</span>
                </div>
              </div>
              {/* <!-- end testimonial single item --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End testimonial -->

  <!-- Start from blog --> */}
  <section id="mu-from-blog">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-from-blog-area">
            {/* <!-- start title --> */}
            <div className="mu-title">
              <h2>From Blog</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum vitae quae vero ut natus. Dolore!</p>
            </div>
            {/* <!-- end title -->  
            <!-- start from blog content   --> */}
            <div className="mu-from-blog-content">
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <article className="mu-blog-single-item">
                    <figure className="mu-blog-single-img">
                      <a href="#"><img src="assets/img/blog/blog-1.jpg" alt="img" /></a>
                      <figcaption className="mu-blog-caption">
                        <h3><a href="#">Lorem ipsum dolor sit amet.</a></h3>
                      </figcaption>                      
                    </figure>
                    <div className="mu-blog-meta">
                      <a href="#">By Admin</a>
                      <a href="#">02 June 2016</a>
                      <span><i className="fa fa-comments-o"></i>87</span>
                    </div>
                    <div className="mu-blog-description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum non voluptatum eum repellendus quod aliquid. Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.</p>
                      <a className="mu-read-more-btn" href="#">Read More</a>
                    </div>
                  </article>
                </div>
                <div className="col-md-4 col-sm-4">
                  <article className="mu-blog-single-item">
                    <figure className="mu-blog-single-img">
                      <a href="#"><img src="assets/img/blog/blog-2.jpg" alt="img" /></a>
                      <figcaption className="mu-blog-caption">
                        <h3><a href="#">Lorem ipsum dolor sit amet.</a></h3>
                      </figcaption>                      
                    </figure>
                    <div className="mu-blog-meta">
                      <a href="#">By Admin</a>
                      <a href="#">02 June 2016</a>
                      <span><i className="fa fa-comments-o"></i>87</span>
                    </div>
                    <div className="mu-blog-description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum non voluptatum eum repellendus quod aliquid. Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.</p>
                      <a className="mu-read-more-btn" href="#">Read More</a>
                    </div>
                  </article>
                </div>
                <div className="col-md-4 col-sm-4">
                  <article className="mu-blog-single-item">
                    <figure className="mu-blog-single-img">
                      <a href="#"><img src="assets/img/blog/blog-3.jpg" alt="img" /></a>
                      <figcaption className="mu-blog-caption">
                        <h3><a href="#">Lorem ipsum dolor sit amet.</a></h3>
                      </figcaption>                      
                    </figure>
                    <div className="mu-blog-meta">
                      <a href="#">By Admin</a>
                      <a href="#">02 June 2016</a>
                      <span><i className="fa fa-comments-o"></i>87</span>
                    </div>
                    <div className="mu-blog-description">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ipsum non voluptatum eum repellendus quod aliquid. Vitae, dolorum voluptate quis repudiandae eos molestiae dolores enim.</p>
                      <a className="mu-read-more-btn" href="#">Read More</a>
                    </div>
                  </article>
                </div>
              </div>
            </div>     
            {/* <!-- end from blog content   -->    */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End from blog --> */}

  {/* <!-- Start footer --> */}
  <footer id="mu-footer">
    {/* <!-- start footer top --> */}
    <div className="mu-footer-top">
      <div className="container">
        <div className="mu-footer-top-area">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>Information</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="">Features</a></li>
                  <li><a href="">Course</a></li>
                  <li><a href="">Event</a></li>
                  <li><a href="">Sitemap</a></li>
                  <li><a href="">Term Of Use</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>Student Help</h4>
                <ul>
                  <li><a href="">Get Started</a></li>
                  <li><a href="#">My Questions</a></li>
                  <li><a href="">Download Files</a></li>
                  <li><a href="">Latest Course</a></li>
                  <li><a href="">Academic News</a></li>                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>News letter</h4>
                <p>Get latest update, news & academic offers</p>
                <form className="mu-subscribe-form">
                  <input type="email" placeholder="Type your Email" />
                  <button className="mu-subscribe-btn" type="submit">Subscribe!</button>
                </form>               
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>Contact</h4>
                <address>
                  <p>P.O. Box 320, Ross, California 9495, USA</p>
                  <p>Phone: (415) 453-1568 </p>
                  <p>Website: www.markups.io</p>
                  <p>Email: info@markups.io</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- end footer top -->
    <!-- start footer bottom --> */}
    <div className="mu-footer-bottom">
      <div className="container">
        <div className="mu-footer-bottom-area">
          <p>&copy; All Right Reserved. Designed by <a href="http://www.markups.io/" rel="nofollow">MarkUps.io</a></p>
        </div>
      </div>
    </div>
    {/* <!-- end footer bottom --> */}
  </footer>
  {/* <!-- End footer --> */}
            
        </>
    )
}

export default Home
