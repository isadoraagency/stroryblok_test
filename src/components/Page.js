import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
const Page = ({blok, full_slug }) => {

  return (
    <main {...storyblokEditable(blok)}>
      {blok.body
        ? blok.body.map((blok, i) => (
          <StoryblokComponent blok={blok} index={i} key={blok._uid} full_slug={full_slug} />
        ))
        : null}
    </main>
  )
};

export default Page;