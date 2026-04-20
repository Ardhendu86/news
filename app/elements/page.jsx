import PageChrome from '@/components/PageChrome';

const buttonStyles = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link', 'disable'];

export default function ElementsPage() {
  return (
    <PageChrome>
      <section className="sample-text-area">
        <div className="container box_1170">
          <h3 className="text-heading">Text Sample</h3>
          <p className="sample-text">Every avid independent filmmaker has <b>Bold</b> about making that <i>Italic</i> interest documentary, or short film to show off their creative prowess. This page keeps the template&apos;s UI kit content simple and readable.</p>
        </div>
      </section>
      <section className="button-area">
        <div className="container box_1170 border-top-generic">
          <h3 className="text-heading">Sample Buttons</h3>
          <div className="button-group-area">
            {buttonStyles.map((style) => (
              <a href="#" className={`genric-btn ${style}`} key={style}>{style}</a>
            ))}
          </div>
          <div className="button-group-area mt-10">
            {buttonStyles.map((style) => (
              <a href="#" className={`genric-btn ${style}-border`} key={`${style}-border`}>{style}</a>
            ))}
          </div>
        </div>
      </section>
    </PageChrome>
  );
}