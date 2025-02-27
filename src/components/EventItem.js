import React from "react";
import { storyblokEditable } from "@storyblok/react";
import {Link} from "react-router-dom";
const EventItem = ({ event }) => {
  return (
    <div className="resources-item" {...storyblokEditable}>
      <Link href={event.full_slug}><span
        className="hidden">{event.title}</span></Link>
      <div className="resources-item__image">
        <div className="visible"
             style={event.image.filename && ({backgroundImage: `url(${event.image.filename})`})}></div>
      </div>
      <h3 className="fz-5 ">{event.title}</h3>
      <div className="content-entry ">
        <p className="p2">{new Date(event.start_date).toLocaleDateString()} -{" "}
          {new Date(event.end_date).toLocaleDateString()}

        </p>
      </div>
      <div className="resources-item__categories">
        <span className="tag">📍{event.location}</span>
      </div>
    </div>
  );
};

export default EventItem;
