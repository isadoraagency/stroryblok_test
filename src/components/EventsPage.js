import React, { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import EventItem from "./EventItem";
import Pagination from "./Pagination";
import SidebarFilter from "./SidebarFilter";
import {storyblokEditable} from "@storyblok/react";
import Breadcrumbs from "./flexible/Breadcrumbs";

const EventsPage = ({blok, full_slug}) => {
  const [page, setPage] = useState(1);
  const [locationFilter, setLocationFilter] = useState("");

  const { events, totalPages } = useEvents(page, locationFilter);

  return (
    <div className="events-page" {...storyblokEditable(blok)}>
      <div className="hero-small module hero-flexible">
        <div className="hero-small__bg"></div>
        <div className="ia-container">
          {/*<Breadcrumbs fullSlug={full_slug}></Breadcrumbs>*/}
          <h1 className="text--white">{blok.title}</h1>
          <div className="content-entry text--white">
            <p>{blok.text}</p>
          </div>
        </div>

      </div>


      <div className="ia-container">
        <div className="resources-list resources-grid ia-row">
          {events.length ? (
            events.map((event) => <div className="ia-col-md-4 ia-col-sm-6 ia-col"><EventItem key={event.uuid} event={event.content}/></div> )
              ) : (
              <p>No events found.</p>
          )}
        </div>

        <Pagination page={page} totalPages={totalPages} setPage={setPage}/>

        <SidebarFilter setLocationFilter={setLocationFilter}/>
      </div>
    </div>
  );
};

export default EventsPage;
