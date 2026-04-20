import PageChrome from '@/components/PageChrome';

const tabs = [
  { label: 'All', active: true },
  { label: 'Lifestyle' },
  { label: 'Travel' },
  { label: 'Fashion' },
  { label: 'Sports' },
  { label: 'Technology' }
];

const cards = ['/assets/img/news/whatNews1.jpg', '/assets/img/news/whatNews2.jpg', '/assets/img/news/whatNews3.jpg', '/assets/img/news/whatNews4.jpg'];

export default function CategoriPage() {
  return (
    <PageChrome>
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
                        {tabs.map((tab) => (
                          <a
                            key={tab.label}
                            className={`nav-item nav-link ${tab.active ? 'active' : ''}`}
                            href={`#${tab.label.toLowerCase()}`}
                            role="button"
                            data-toggle="tab"
                          >
                            {tab.label}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                {tabs.map((tab, index) => (
                  <div key={tab.label} className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} id={tab.label.toLowerCase()}>
                    <div className="whats-news-caption">
                      <div className="row">
                        {cards.map((card, cardIndex) => (
                          <div className="col-lg-6 col-md-6" key={`${tab.label}-${cardIndex}`}>
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src={card} alt={`${tab.label} ${cardIndex + 1}`} />
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
                  </div>
                ))}
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
    </PageChrome>
  );
}
