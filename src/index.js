import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './assets/scss/main.scss';
import App from "./App";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Grid from "./components/Grid";
import Feature from "./components/Feature";

import EventPage from "./components/Event/EventPage";
import CheckboxField from "./components/form/CheckboxField";
import RadioField from "./components/form/RadioField";
import SelectField from "./components/form/SelectField";
import InputField from "./components/form/InputField";
import Form from "./components/form/Form";
import Hero from "./components/flexible/Hero";

storyblokInit({
  accessToken: "2OBal2fCBCeYqEVNfgWmqgtt",
  use: [apiPlugin],
  components: {
    CheckboxField: CheckboxField,
    RadioField: RadioField,
    SelectField: SelectField,
    InputField: InputField,
    form: Form,
    event: EventPage,
    page: Page,
    hero: Hero,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },

  apiOptions: {
    // for spaces located in the US or China:
    // region: "us" or "cn", // you need to specify the region
    region: 'us'
  }
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
