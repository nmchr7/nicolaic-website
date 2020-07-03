import theme from '../styles/theme';
import ProfileBadge from '../components/ProfileImage';

export default () => (
  <div className="container">
    <ProfileBadge imgSrc="assets/profile_image.jpg" />
    <h1 className="name">Nicolai Mølgaard Christensen</h1>
    <h2 className="heading">
      Hi there! I&apos;m a software developer specializing in frontend
      technologies. My current focus is on React, NextJS and more
    </h2>
    <p className="disclaimer">
      This website is WIP and more is to come very soon. It is also&nbsp;
      <a
        className="repo-link"
        href="https://github.com/nmchr7/nicolaic-website"
      >
        open source
      </a>
    </p>
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
      }
      .name {
        margin-top: 15px;
      }
      .heading {
        text-align: center;
        max-width: 380px;
      }
      .disclaimer {
        font-size: 1rem;
        text-align: center;
        max-width: 380px;
      }
      .repo-link {
        font-size: inherit;
        color: ${theme.color.secondary};
      }
    `}</style>
  </div>
);
