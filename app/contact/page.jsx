import ContactForm from '@/components/ContactForm';
import PageChrome from '@/components/PageChrome';

export default function ContactPage() {
  return (
    <PageChrome>
      <section className="contact-section">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            <iframe
              title="AZNews location"
              src="https://www.google.com/maps?q=-31.197,150.744&z=9&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <ContactForm className="form-contact contact_form" />
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-home" /></span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-tablet" /></span>
                <div className="media-body">
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon"><i className="ti-email" /></span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageChrome>
  );
}
