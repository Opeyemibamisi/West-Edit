import { ArrowDownRight } from "lucide-react";
import heroImage from "../../West-logo.png";
export default function Hero() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="hero-new" id="top">
      <div className="hero-rail">
        <span>WEST EDIT / 2026</span>
        <span>VIDEO POST-PRODUCTION</span>
      </div>
      <div className="hero-main">
        <div className="hero-title">
          <p className="kicker">STORIES WITH A PULSE</p>
          <h1>
            MAKE
            <br />
            <em>THE CUT</em>
            <br />
            COUNT.
          </h1>
          <p className="hero-description">
            Cinematic editing for wedding films, brand stories and campaigns
            that know where they are going.
          </p>
          <button
            className="circle-cta"
            onClick={() => go("work")}
            aria-label="Explore selected work"
          >
            <ArrowDownRight />
          </button>
        </div>
        <div className="hero-shot">
          <img
            src="https://alephcreativehub.co.za/website-assets/portfolio-mockups/division-heroes/div-hero-04-video.jpg"
            alt="Professional post-production suite"
          />
          <a className="red-panel" href="#work" aria-label="View selected work">
            <img src={heroImage} alt="West Edit mark" />
            <span>
              VIEW
              <br />
              PROJECTS
            </span>
            <ArrowDownRight size={15} />
          </a>
          <span className="shot-label">
            01 — WEST EDIT
            <br />
            SELECTED WORK
          </span>
        </div>
      </div>
      <div className="ticker">
        <span>EDITING</span>
        <i /> <span>COLOR</span>
        <i />
        <span>SOUND</span>
        <i />
        <span>STORY</span>
      </div>
    </section>
  );
}
