const videos = [
  'CicQIuG8hBo',
  'rIz00N40bag',
  'CONfhrASy44',
  'lq6fL2ROWf8',
  '0VxlQlacWV4'
];

export default function YoutubeSection() {
  return (
    <div className="youtube-area video-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="video-items-active">
              {videos.map((id) => (
                <div className="video-items text-center" key={id}>
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`youtube-${id}`}
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testmonial-nav text-center">
                {videos.map((id) => (
                  <div className="single-video" key={`nav-${id}`}>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`youtube-nav-${id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="video-intro">
                      <h4>Welcome To The Best Model Winner Contest</h4>
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
