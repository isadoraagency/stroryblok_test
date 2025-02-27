import { useStoryblok, StoryblokComponent } from "@storyblok/react";

function App() {
  const version = process.env.REACT_APP_STORYBLOK_VERSION || "published";
  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: version});
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} full_slug={story.full_slug}/>;
}

export default App;