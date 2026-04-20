import PageChrome from '@/components/PageChrome';

export default function AboutPage() {
  return (
    <PageChrome>
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
                  <img src="/assets/img/post/about_heor.jpg" alt="about hero" />
                </div>
                <div className="section-tittle mb-30 pt-30">
                  <h3>About Us</h3>
                </div>
                <div className="about-prea">
                  <p className="about-pera1 mb-25">Moms are like buttons. Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen from birth to school lunch.</p>
                  <p className="about-pera1 mb-25">My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable, elegant, smart, beautiful, and kind.</p>
                  <p className="about-pera1 mb-25">The refractor telescope uses a convex lens to focus the light on the eyepiece. The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus the image that you eventually see.</p>
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
