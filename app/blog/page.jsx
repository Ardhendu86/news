import Link from 'next/link';

import PageChrome from '@/components/PageChrome';

const blogPosts = [
  '/assets/img/blog/single_blog_1.png',
  '/assets/img/blog/single_blog_2.png',
  '/assets/img/blog/single_blog_3.png',
  '/assets/img/blog/single_blog_4.png',
  '/assets/img/blog/single_blog_5.png'
];

const categories = [
  ['Resaurant food', '(37)'],
  ['Travel news', '(10)'],
  ['Modern technology', '(03)'],
  ['Product', '(11)'],
  ['Inspiration', '21'],
  ['Health Care (21)', '09']
];

const recentPosts = [
  ['/assets/img/post/post_1.png', 'From life was you fish...', 'January 12, 2019'],
  ['/assets/img/post/post_2.png', 'The Amazing Hubble', '02 Hours ago'],
  ['/assets/img/post/post_3.png', 'Astronomy Or Astrology', '03 Hours ago'],
  ['/assets/img/post/post_4.png', 'Asteroids telescope', '01 Hours ago']
];

const tags = ['project', 'love', 'technology', 'travel', 'restaurant', 'life style', 'design', 'illustration'];

const instaFeeds = [
  '/assets/img/post/post_5.png',
  '/assets/img/post/post_6.png',
  '/assets/img/post/post_7.png',
  '/assets/img/post/post_8.png',
  '/assets/img/post/post_9.png',
  '/assets/img/post/post_10.png'
];

export default function BlogPage() {
  return (
    <PageChrome>
      <section className="blog_area section-padding" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {blogPosts.map((image, index) => (
                  <article className="blog_item" key={image}>
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src={image} alt={`blog ${index + 1}`} />
                      <a href="#" className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>

                    <div className="blog_details">
                      <Link className="d-inline-block" href="/single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>
                        That dominion stars lights dominion divide years for fourth have don&apos;t stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul className="blog-info-link">
                        <li><a href="#"><i className="fa fa-user" /> Travel, Lifestyle</a></li>
                        <li><a href="#"><i className="fa fa-comments" /> 03 Comments</a></li>
                      </ul>
                    </div>
                  </article>
                ))}

                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">1</a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">2</a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <i className="ti-angle-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="blog_right_sidebar" data-aos="fade-left" data-aos-delay="120">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search Keyword" />
                        <div className="input-group-append">
                          <button className="btns" type="button"><i className="ti-search" /></button>
                        </div>
                      </div>
                    </div>
                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">
                      Search
                    </button>
                  </form>
                </aside>

                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Category</h4>
                  <ul className="list cat-list">
                    {categories.map(([name, count]) => (
                      <li key={name}>
                        <a href="#" className="d-flex">
                          <p>{name}</p>
                          <p>{count}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>

                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Recent Post</h3>
                  {recentPosts.map(([image, title, time]) => (
                    <div className="media post_item" key={title}>
                      <img src={image} alt="post" />
                      <div className="media-body">
                        <Link href="/single-blog">
                          <h3>{title}</h3>
                        </Link>
                        <p>{time}</p>
                      </div>
                    </div>
                  ))}
                </aside>

                <aside className="single_sidebar_widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
                  <ul className="list">
                    {tags.map((tag) => (
                      <li key={tag}><a href="#">{tag}</a></li>
                    ))}
                  </ul>
                </aside>

                <aside className="single_sidebar_widget instagram_feeds">
                  <h4 className="widget_title">Instagram Feeds</h4>
                  <ul className="instagram_row flex-wrap">
                    {instaFeeds.map((image, idx) => (
                      <li key={image}>
                        <a href="#">
                          <img className="img-fluid" src={image} alt={`instagram ${idx + 1}`} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>

                <aside className="single_sidebar_widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>
                  <form action="#">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Enter email" required />
                    </div>
                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageChrome>
  );
}
