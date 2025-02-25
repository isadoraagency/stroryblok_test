'use client'
import {renderRichText, storyblokEditable} from "@storyblok/react";
import {Link} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import ReactPlayer from "react-player";

const Hero = ({blok, index=1, full_slug}) => {
  let btnUrl = "", btnTitle= "";
  if( blok.button.linktype == 'email'){
    btnUrl = 'mailto:'+blok.button.url;
    btnTitle = blok.button.url;
  }else if(blok.button.linktype == 'story'){
    btnUrl = blok.button.cached_url;
    btnTitle = blok.button.title;
  }else if(blok.button.linktype == 'url'){
    btnUrl = blok.button.url;
    btnTitle = blok.button.title;
  }
;
  return (
    <>
      <div className={`hero-small module hero-flexible hero-flexible--${blok.hero_type} ${blok.hero_type == 'image' && blok.image_right.filename ? '-full' : ''}`}
           id={`module-${index}`} {...storyblokEditable}>
        {
          blok.image?.filename && <div className="hero-small__bg" style={{backgroundImage: `url(${blok.image.filename})`}}></div>
        }
        <div className="text--white">TEST CHANGEKK</div>
        <div className={`ia-container  ${blok.hero_type != 'text' ? 'd-flex' : ''}`}>
          {blok.hero_type !== 'text' ? (
            <div className="hero-flexible__left">
              {blok.show_breadcrumbs && <Breadcrumbs fullSlug={full_slug} />}
              {blok.Title && <h1 className="text--white">{blok.Title} </h1>}
              {blok.description && (
                <div
                  className="content-entry text--white"
                  dangerouslySetInnerHTML={{ __html: renderRichText(blok.description) }}
                />
              )}
              {btnUrl && (
                <Link
                  to={btnUrl}
                  target={blok.button.target ? '_blank' : '_self'}
                  className="ia-btn ia-btn--white"
                >
                  <i className="icon-logo-icon"></i>
                  {blok.button?.title && blok.button.title}
                  {blok.button?.email && blok.button.email}
                </Link>
              )}
            </div>
          ) : (
            <>
              {blok.show_breadcrumbs && <Breadcrumbs fullSlug={full_slug} />}
              {blok.Title && <h1 className="text--white">{blok.Title}</h1>}

              {blok.description && (
                <div
                  className="content-entry text--white"
                  dangerouslySetInnerHTML={{ __html: renderRichText(blok.description) }}
                />
              )}
              {btnUrl && (
                <Link
                  to={btnUrl}
                  target={blok.button.target ? '_blank' : '_self'}
                  className="ia-btn ia-btn--white"
                >
                  <i className="icon-logo-icon"></i>
                  {btnTitle}

                </Link>
              )}
            </>
          )}


          {blok.hero_type != 'text' && (
            <div className="hero-flexible__right">
              {
                blok.image_right?.filename && blok.hero_type == "image" && (
                  <>
                  <svg width="452" height="452" viewBox="0 0 452 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="226.378" cy="225.622" r="224.622" transform="rotate(-180 226.378 225.622)"
                            stroke={`url(#paint0_linear_484_5667${blok.index})`} strokeWidth="2"/>
                    <circle cx="226.378" cy="265.845" r="184.399" transform="rotate(-180 226.378 265.845)"
                            stroke={`url(#paint1_linear_484_5667${blok.index})`} strokeWidth="2"/>
                    <circle cx="226.378" cy="308.776" r="141.468" transform="rotate(-180 226.378 308.776)"
                            stroke={`url(#paint2_linear_484_5667${blok.index})`} strokeWidth="2"/>
                    <defs>
                      <linearGradient id={`paint0_linear_484_5667${blok.index}`} x1="226.378" y1="7.62939e-05"
                                      x2="226.378" y2="451.244" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#072C90" stopOpacity="0"/>
                        <stop offset="0.5" stopColor="#0E47D2"/>
                        <stop offset="1" stopColor="#05298A" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id={`paint1_linear_484_5667${blok.index}`} x1="226.378" y1="80.4458"
                                      x2="226.378" y2="451.244" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#072C90" stopOpacity="0"/>
                        <stop offset="0.5" stopColor="#0E47D2"/>
                        <stop offset="1" stopColor="#05298A" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id={`paint2_linear_484_5667${blok.index}`} x1="226.378" y1="166.308"
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
                    <div className="hero-flexible__right-in">
                      <div className="testimonial__video">
                        { blok.video.filename &&
                          (
                            <>
                              <a href="#" className="icon-mute"><span className="hidden">Sound</span> <em><i
                                className="icon-sound-on"></i></em></a>
                              <ReactPlayer url={blok.video.filename}></ReactPlayer>
                              <a href="#" className="ia-btn ia-btn__media" data-reverse="Pause"><span>Play</span>
                                <em><i className="icon-play"></i></em></a>
                            </>
                          )
                        }
                        {
                          blok.video_placeholder.filename &&
                          <div className={`video-placeholder ${ !blok.video.filename && 'no-video'}`}
                               style={{backgroundImage:  `url(${blok.video_placeholder.filename})` }}></div>
                        }
                      </div>
                    </div>
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

