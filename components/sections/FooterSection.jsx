import Link from 'next/link';

import NewsletterForm from '@/components/NewsletterForm';

export default function FooterSection() {
  return (
    <footer>
      <div className="footer-area footer-padding fix">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12">
              <div className="single-footer-caption">
                <div className="footer-logo">
                  <Link href="/"><img src="/assets/img/logo/logo2_footer.png" alt="footer logo" /></Link>
                </div>
                <div className="footer-tittle">
                  <div className="footer-pera">
                    <p>Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames lectus tempor da blandit gravida sodales.</p>
                  </div>
                </div>
                <div className="footer-social">
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fab fa-instagram" /></a>
                  <a href="#"><i className="fab fa-pinterest-p" /></a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mt-60">
                <div className="footer-tittle">
                  <h4>Newsletter</h4>
                  <p>Heaven fruitful doesn&apos;t over les idays appear creeping</p>
                  <NewsletterForm />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
              <div className="single-footer-caption mb-50 mt-60">
                <div className="footer-tittle">
                  <h4>Instagram Feed</h4>
                </div>
                <div className="instagram-gellay">
                  <ul className="insta-feed">
                    {[1, 2, 3, 4, 5, 6].map((id) => (
                      <li key={id}>
                        <a href="#"><img src={`/assets/img/post/instra${id}.jpg`} alt={`insta ${id}`} /></a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="footer-border">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="footer-copy-right">
                  <p>Copyright {new Date().getFullYear()} All rights reserved.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-menu f-right">
                  <ul>
                    <li><Link href="#">Terms of use</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
