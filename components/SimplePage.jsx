import PageChrome from '@/components/PageChrome';

export default function SimplePage({ title, description, children }) {
  return (
    <PageChrome>
      <section className="about-area2 gray-bg pt-60 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-tittle text-center mb-40">
                <h3>{title}</h3>
              </div>
              <p className="text-center">{description}</p>
              {children}
            </div>
          </div>
        </div>
      </section>
    </PageChrome>
  );
}
