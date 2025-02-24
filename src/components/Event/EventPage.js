import { renderRichText, storyblokEditable } from "@storyblok/react";
import "./pageEvent.scss";

const EventPage = ({ blok }) => {
  const style = {
    background: `url(${blok.image.filename}) no-repeat center center / cover` || '#333'
  };

  // const Class = blok.Background;
  const startDate = blok.start_date;

  function formatDate(date){
   return new Date(date).toLocaleDateString('us-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return (
    <main  {...storyblokEditable(blok)}>
      <div className="event-hero py-2"
           style={style}>
        <div className="ia-container">
          <h1 className="text--light bg--primary">{blok.title}</h1>
          <div className="content-entry text--light">
            <p>{blok.short_desc}</p>
          </div>
          <div className="event-date text--light p3" >
            {formatDate(blok.start_date)}
            {blok?.end_date && " - " + formatDate(blok.end_date)}
          </div>
        </div>
      </div>
      <div className="ia-container py-3" >
        <div className="content-entry"
             dangerouslySetInnerHTML={{__html: renderRichText(blok.description)}}/>

      </div>
    </main>
  );
};

export default EventPage;