import theme from '../styles/theme';
import ProfileBadge from '../components/ProfileImage';

export default () => (
  <div>
    <ProfileBadge imgSrc="assets/profile_image.jpg" />
    <h1>Nicolai Mølgaard Christensen</h1>
    <h2>
      Hi there! I&apos;m a software developer specializing in Frontend
      technologies. My current focus is on React, NextJS and more
    </h2>
    <p>
      This website is work-in-progres and more is to come very soon. It is
      also&nbsp;
      <a href="https://github.com/nmchr7/nicolaic-website">open source</a>
    </p>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
      }
      h1 {
        margin-top: 15px;
      }
      h2 {
        text-align: center;
        max-width: 380px;
      }
      p {
        font-size: 1rem;
        text-align: center;
        max-width: 380px;
      }
      a {
        font-size: inherit;
        color: ${theme.color.secondary};
      }
    `}</style>
  </div>
);
