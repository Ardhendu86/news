const weeklyItems = [
  '/assets/img/news/weeklyNews2.jpg',
  '/assets/img/news/weeklyNews1.jpg',
  '/assets/img/news/weeklyNews3.jpg',
  '/assets/img/news/weeklyNews1.jpg'
];

export default function WeeklyNewsSection() {
  return (
    <div className="weekly-news-area pt-50">
      <div className="container">
        <div className="weekly-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle mb-30">
                <h3>Weekly Top News</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="weekly-news-active dot-style d-flex dot-style">
                {weeklyItems.map((img, idx) => (
                  <div className={`weekly-single ${idx === 1 ? 'active' : ''}`} key={idx}>
                    <div className="weekly-img">
                      <img src={img} alt={`weekly ${idx + 1}`} />
                    </div>
                    <div className="weekly-caption">
                      <span className="color1">Strike</span>
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
