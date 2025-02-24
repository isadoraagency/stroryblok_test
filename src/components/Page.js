import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok, i) => (
          <StoryblokComponent blok={blok} index={i} key={blok._uid} />
        ))
      : null}
  </main>
);
 
export default Page;