const articles = [
  '/assets/img/news/recent1.jpg',
  '/assets/img/news/recent2.jpg',
  '/assets/img/news/recent3.jpg',
  '/assets/img/news/recent2.jpg'
];

export default function RecentArticlesSection() {
  return (
    <div className="recent-articles">
      <div className="container">
        <div className="recent-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle mb-30">
                <h3>Recent Articles</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="recent-active dot-style d-flex dot-style">
                {articles.map((img, idx) => (
                  <div className="single-recent mb-100" key={idx}>
                    <div className="what-img">
                      <img src={img} alt={`recent ${idx + 1}`} />
                    </div>
                    <div className="what-cap">
                      <span className="color1">Night party</span>
                      <h4><a href="#">Welcome To The Best Model Winner Contest</a></h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
