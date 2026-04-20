const rightItems = [
  { img: '/assets/img/trending/right1.jpg', color: 'color1', title: 'Concert' },
  { img: '/assets/img/trending/right2.jpg', color: 'color3', title: 'sea beach' },
  { img: '/assets/img/trending/right3.jpg', color: 'color2', title: 'Bike Show' },
  { img: '/assets/img/trending/right4.jpg', color: 'color4', title: 'See beach' },
  { img: '/assets/img/trending/right5.jpg', color: 'color1', title: 'Skeping' }
];

export default function TrendingSection() {
  return (
    <div className="trending-area fix">
      <div className="container">
        <div className="trending-main">
          <div className="row">
            <div className="col-lg-12">
              <div className="trending-tittle">
                <strong>Trending now</strong>
                <div className="trending-animated">
                  <ul id="js-news" className="js-hidden">
                    <li className="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.</li>
                    <li className="news-item">Spondon IT sit amet, consectetur.......</li>
                    <li className="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="trending-top mb-30">
                <div className="trend-top-img">
                  <img src="/assets/img/trending/trending_top.jpg" alt="trending top" />
                  <div className="trend-top-cap">
                    <span>Appetizers</span>
                    <h2><a href="#">Welcome To The Best Model Winner Contest At Look of the year</a></h2>
                  </div>
                </div>
              </div>

              <div className="trending-bottom">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="single-bottom mb-35">
                      <div className="trend-bottom-img mb-30">
                        <img src="/assets/img/trending/trending_bottom1.jpg" alt="lifestyle" />
                      </div>
                      <div className="trend-bottom-cap">
                        <span className="color1">Lifestyle</span>
                        <h4><a href="#">Get the Illusion of Fuller Lashes by Mascng.</a></h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-bottom mb-35">
                      <div className="trend-bottom-img mb-30">
                        <img src="/assets/img/trending/trending_bottom2.jpg" alt="sports" />
                      </div>
                      <div className="trend-bottom-cap">
                        <span className="color2">Sports</span>
                        <h4><a href="#">Get the Illusion of Fuller Lashes by Mascng.</a></h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-bottom mb-35">
                      <div className="trend-bottom-img mb-30">
                        <img src="/assets/img/trending/trending_bottom3.jpg" alt="travel" />
                      </div>
                      <div className="trend-bottom-cap">
                        <span className="color3">Travels</span>
                        <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              {rightItems.map((item, idx) => (
                <div className="trand-right-single d-flex" key={idx}>
                  <div className="trand-right-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="trand-right-cap">
                    <span className={item.color}>{item.title}</span>
                    <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
