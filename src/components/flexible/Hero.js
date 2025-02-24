import {renderRichText, storyblokEditable} from "@storyblok/react";
import {Link} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const Hero = ({blok, index}) => {

  return (
    <>
      <div className={`hero-small module hero-flexible fadeIn wow hero-flexible--${blok.hero_type} ${blok.hero_type == 'image' && blok.image_right.filename ? '-full' : ''}`}
           id={`module-${index}`} {...storyblokEditable}>
        {
          blok.image?.filename && <div className="hero-small__bg" style={{backgroundImage: `url(${blok.image.filename})`}}></div>
        }

        <div className={`ia-container  ${blok.hero_type != 'text' && 'd-flex'}`}>
          {blok.hero_type != 'text' ? '<div className="hero-flexible__left">' : ''}
          <Breadcrumbs fullSlug={blok.full_slug}></Breadcrumbs>
          <h1 className="text--white">{blok.title}</h1>
          <div className="content-entry text--white"
               dangerouslySetInnerHTML={{__html: renderRichText(blok.description)}}/>
          <Link to={blok.button.link}
             target={ blok.button.target ? '_blank' : '_self'}
             className="ia-btn ia-btn--white"><i className="icon-logo-icon"></i>{blok.button.title}</Link>
          {blok.hero_type != 'text' ? '</div>' : ''}
          {blok.hero_type != 'text' && (
            <div className="hero-flexible__right">
              {
                blok.image_right.filename && blok.hero_type == "image" && (
                  <>
                  <svg width="452" height="452" viewBox="0 0 452 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="226.378" cy="225.622" r="224.622" transform="rotate(-180 226.378 225.622)"
                            stroke={`url(#paint0_linear_484_5667${blok.index})`} strokeWidth="2"/>
                    <circle cx="226.378" cy="265.845" r="184.399" transform="rotate(-180 226.378 265.845)"
                            stroke={`url(#paint1_linear_484_5667)`} strokeWidth="2"/>
                    <circle cx="226.378" cy="308.776" r="141.468" transform="rotate(-180 226.378 308.776)"
                            stroke="url(#paint2_linear_484_5667<?php echo $args['index']; ?>)" strokeWidth="2"/>
                    <defs>
                      <linearGradient id="paint0_linear_484_5667<?php echo $args['index']; ?>" x1="226.378" y1="7.62939e-05"
                                      x2="226.378" y2="451.244" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#072C90" stopOpacity="0"/>
                        <stop offset="0.5" stopColor="#0E47D2"/>
                        <stop offset="1" stopColor="#05298A" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_484_5667<?php echo $args['index']; ?>" x1="226.378" y1="80.4458"
                                      x2="226.378" y2="451.244" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#072C90" stopOpacity="0"/>
                        <stop offset="0.5" stopColor="#0E47D2"/>
                        <stop offset="1" stopColor="#05298A" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_484_5667<?php echo $args['index']; ?>" x1="226.378" y1="166.308"
                                      x2="226.378" y2="451.244" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#072C90" stopOpacity="0"/>
                        <stop offset="0.5" stopColor="#0E47D2"/>
                        <stop offset="1" stopColor="#05298A" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="hero-flexible__right-in">
                    <div className="hero-flexible__image" style={{backgroundImage : `url(${blok.image_right.filename})`}}></div>
                  </div>
                </>
                )
              }
              {
                blok.hero_type = 'video' && (
                  <>
                    <svg width="452" height="452" viewBox="0 0 452 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="226.378" cy="225.622" r="224.622" transform="rotate(-180 226.378 225.622)"
                              stroke={`url(#paint0_linear_484_5667${blok.index})`} strokeWidth="2"/>
                      <circle cx="226.378" cy="265.845" r="184.399" transform="rotate(-180 226.378 265.845)"
                              stroke={`url(#paint1_linear_484_5667${blok.index})`} strokeWidth="2"/>
                      <circle cx="226.378" cy="308.776" r="141.468" transform="rotate(-180 226.378 308.776)"
                              stroke={`url(#paint2_linear_484_5667${blok.index})`} strokeWidth="2"/>
                      <defs>
                        <linearGradient id={`paint0_linear_484_5667${blok.index}`} x1="226.378"
                                        y1="7.62939e-05" x2="226.378" y2="451.244" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#072C90" stopOpacity="0"/>
                          <stop offset="0.5" stopColor="#0E47D2"/>
                          <stop offset="1" stopColor="#05298A" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id={`paint1_linear_484_5667${blok.index}`} x1="226.378"
                                        y1="80.4458" x2="226.378" y2="451.244" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#072C90" stopOpacity="0"/>
                          <stop offset="0.5" stopColor="#0E47D2"/>
                          <stop offset="1" stopColor="#05298A" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id={`paint2_linear_484_5667${blok.index}`} x1="226.378"
                                        y1="166.308" x2="226.378" y2="451.244" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#072C90" stopOpacity="0"/>
                          <stop offset="0.5" stopColor="#0E47D2"/>
                          <stop offset="1" stopColor="#05298A" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </>
                )
              }


            </div>
          )}
        </div>

      </div>
    </>
  );
}
export default Hero;

