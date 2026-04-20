const items = [
  { img: '/assets/img/news/weekly2News1.jpg', tag: 'Corporate' },
  { img: '/assets/img/news/weekly2News2.jpg', tag: 'Event night' },
  { img: '/assets/img/news/weekly2News3.jpg', tag: 'Corporate' },
  { img: '/assets/img/news/weekly2News4.jpg', tag: 'Event time' },
  { img: '/assets/img/news/weekly2News4.jpg', tag: 'Corporate' }
];

export default function Weekly2NewsSection() {
  return (
    <div className="weekly2-news-area weekly2-pading gray-bg">
      <div className="container">
        <div className="weekly2-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle mb-30">
                <h3>Weekly Top News</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="weekly2-news-active dot-style d-flex dot-style">
                {items.map((item, idx) => (
                  <div className="weekly2-single" key={idx}>
                    <div className="weekly2-img">
                      <img src={item.img} alt={`weekly2 ${idx + 1}`} />
                    </div>
                    <div className="weekly2-caption">
                      <span className="color1">{item.tag}</span>
                      <p>25 Jan 2020</p>
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
