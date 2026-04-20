const tabs = ['All', 'Lifestyle', 'Travel', 'Fashion', 'Sports', 'Technology'];
const cards = [
  '/assets/img/news/whatNews1.jpg',
  '/assets/img/news/whatNews2.jpg',
  '/assets/img/news/whatNews3.jpg',
  '/assets/img/news/whatNews4.jpg'
];

function TabContent() {
  return (
    <div className="whats-news-caption">
      <div className="row">
        {cards.map((img, idx) => (
          <div className="col-lg-6 col-md-6" key={idx}>
            <div className="single-what-news mb-100">
              <div className="what-img">
                <img src={img} alt={`what news ${idx + 1}`} />
              </div>
              <div className="what-cap">
                <span className="color1">Night party</span>
                <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhatsNewSection() {
  return (
    <section className="whats-news-area pt-50 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row d-flex justify-content-between">
              <div className="col-lg-3 col-md-3">
                <div className="section-tittle mb-30">
                  <h3>Whats New</h3>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="properties__button">
                  <nav>
                    <div className="nav nav-tabs" role="tablist">
                      {tabs.map((tab, idx) => (
                        <a
                          key={tab}
                          className={`nav-item nav-link ${idx === 0 ? 'active' : ''}`}
                          href="#"
                          role="button"
                        >
                          {tab}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <TabContent />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="section-tittle mb-40">
              <h3>Follow Us</h3>
            </div>
            <div className="single-follow mb-45">
              <div className="single-box">
                {['fb', 'tw', 'ins', 'yo'].map((icon) => (
                  <div className="follow-us d-flex align-items-center" key={icon}>
                    <div className="follow-social">
                      <a href="#"><img src={`/assets/img/news/icon-${icon}.png`} alt={icon} /></a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="news-poster d-none d-lg-block">
              <img src="/assets/img/news/news_card.jpg" alt="news card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
