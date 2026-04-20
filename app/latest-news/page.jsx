import PageChrome from '@/components/PageChrome';

export default function LatestNewsPage() {
  return (
    <PageChrome>
      <div className="youtube-area">
        <div className="container">
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
            <div className="col-12">
              <div className="video-items-active">
                {['CicQIuG8hBo', 'rIz00N40bag', 'CONfhrASy44', 'lq6fL2ROWf8', '0VxlQlacWV4'].map((videoId) => (
                  <div className="video-items text-center" key={videoId}>
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={videoId}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="video-info">
            <div className="row">
              <div className="col-lg-6">
                <div className="video-caption">
                  <div className="top-caption">
                    <span className="color1">Politics</span>
                  </div>
                  <div className="bottom-caption">
                    <h2>Welcome To The Best Model Winner Contest At Look of the year</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testmonial-nav text-center">
                  {['CicQIuG8hBo', 'rIz00N40bag', 'CONfhrASy44', 'lq6fL2ROWf8', '0VxlQlacWV4'].map((videoId) => (
                    <div className="single-video" key={`${videoId}-thumb`}>
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`${videoId}-thumb`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="video-intro">
                        <h4>Welcotme To The Best Model Winner Contest</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area">
        <div className="container">
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
              <div className="about-right mb-90">
                <div className="about-img">
                  <img src="/assets/img/trending/trending_top.jpg" alt="trending" />
                </div>
                <div className="section-tittle mb-30 pt-30">
                  <h3>Here come the moms in space</h3>
                </div>
                <div className="about-prea">
                  <p className="about-pera1 mb-25">Moms are like buttons. Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen from birth to school lunch.</p>
                  <p className="about-pera1 mb-25">Moms are elegant, smart, beautiful, kind, and the kind of people who carry the whole world and still remember everyone&apos;s lunch.</p>
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
      </div>
    </PageChrome>
  );
}
