import Link from 'next/link';

export default function HeaderSection() {
  return (
    <header>
      <div className="header-area">
        <div className="main-header">
          <div className="header-top black-bg d-none d-md-block">
            <div className="container">
              <div className="col-xl-12">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="header-info-left">
                    <ul>
                      <li><img src="/assets/img/icon/header_icon1.png" alt="weather" />34ºc, Sunny</li>
                      <li><img src="/assets/img/icon/header_icon1.png" alt="calendar" />Tuesday, 18th June, 2019</li>
                    </ul>
                  </div>
                  <div className="header-info-right">
                    <ul className="header-social">
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-instagram" /></a></li>
                      <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-mid d-none d-md-block">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="logo">
                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="header-banner f-right">
                    <img src="/assets/img/hero/header_card.jpg" alt="header card" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
                  <div className="sticky-logo">
                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="sticky logo" /></Link>
                  </div>
                  <div className="main-menu d-none d-md-block">
                    <nav>
                      <ul id="navigation">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/categori">Category</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/latest-news">Latest News</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li>
                          <a href="#">Pages</a>
                          <ul className="submenu">
                            <li><Link href="/elements">Element</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/single-blog">Blog Details</Link></li>
                            <li><Link href="/details">Categori Details</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4">
                  <div className="header-right-btn f-right d-none d-lg-block">
                    <i className="fas fa-search special-tag" />
                    <div className="search-box">
                      <form action="#">
                        <input type="text" placeholder="Search" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-md-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
