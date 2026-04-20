import Link from 'next/link';

import ContactForm from '@/components/ContactForm';
import PageChrome from '@/components/PageChrome';

const comments = [
  {
    name: 'Emilly Blunt',
    date: 'December 4, 2017 at 3:12 pm',
    image: '/assets/img/comment/comment_1.png'
  },
  {
    name: 'Emilly Blunt',
    date: 'December 4, 2017 at 3:12 pm',
    image: '/assets/img/comment/comment_2.png'
  }
];

export default function SingleBlogPage() {
  return (
    <PageChrome>
      <section className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post">
                <div className="feature-img">
                  <img className="img-fluid" src="/assets/img/blog/single_blog_1.png" alt="feature" />
                </div>
                <div className="blog_details">
                  <h2>Second divided from form fish beast made every of seas all gathered us saying he our</h2>
                  <ul className="blog-info-link mt-3 mb-4">
                    <li><a href="#"><i className="fa fa-user" /> Travel, Lifestyle</a></li>
                    <li><a href="#"><i className="fa fa-comments" /> 03 Comments</a></li>
                  </ul>
                  <p className="excert">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price.</p>
                  <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price.</p>
                  <div className="quote-wrapper">
                    <div className="quotes">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price.</div>
                  </div>
                </div>
              </div>
              <div className="navigation-top">
                <div className="d-sm-flex justify-content-between text-center">
                  <p className="like-info"><span className="align-middle"><i className="fa fa-heart" /></span> Lily and 4 people like this</p>
                  <ul className="social-icons">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fab fa-behance" /></a></li>
                  </ul>
                </div>
                <div className="navigation-area">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                      <div className="thumb"><a href="#"><img className="img-fluid" src="/assets/img/post/preview.png" alt="previous" /></a></div>
                      <div className="arrow"><a href="#"><span className="lnr text-white ti-arrow-left" /></a></div>
                      <div className="detials">
                        <p>Prev Post</p>
                        <a href="#"><h4>Space The Final Frontier</h4></a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                      <div className="detials">
                        <p>Next Post</p>
                        <a href="#"><h4>Telescopes 101</h4></a>
                      </div>
                      <div className="arrow"><a href="#"><span className="lnr text-white ti-arrow-right" /></a></div>
                      <div className="thumb"><a href="#"><img className="img-fluid" src="/assets/img/post/next.png" alt="next" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-author">
                <div className="media align-items-center">
                  <img src="/assets/img/blog/author.png" alt="author" />
                  <div className="media-body">
                    <Link href="#"><h4>Harvard milan</h4></Link>
                    <p>Second divided from form fish beast made. Every of seas all gathered use saying you&apos;re, he our dominion twon Second divided from.</p>
                  </div>
                </div>
              </div>
              <div className="comments-area">
                <h4>05 Comments</h4>
                {comments.map((comment) => (
                  <div className="comment-list" key={comment.name + comment.image}>
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb"><img src={comment.image} alt={comment.name} /></div>
                        <div className="desc">
                          <p className="comment">Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass.</p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5><a href="#">{comment.name}</a></h5>
                              <p className="date">{comment.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="comment-form">
                <h4>Leave a Reply</h4>
                <ContactForm className="form-contact contact_form" buttonLabel="Post Comment" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageChrome>
  );
}