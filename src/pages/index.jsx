import theme from '../styles/theme';
import ProfileImage from '../components/ProfileImage';

const Style = () => (
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
      max-width: 425px;
    }
    .disclaimer {
      font-size: 1rem;
      text-align: center;
      max-width: 425px;
    }
    .repo-link {
      font-size: inherit;
      color: ${theme.color.secondary};
    }
  `}</style>
);

export default () => (
  <>
    <div className="container">
      <ProfileImage />
      <h1 className="name">Nicolai Mølgaard Christensen</h1>
      <h2 className="heading">
        Software developer with 4+ years of professional experience, mainly
        working with JavaScript and React. Helping companies create scalable
        applications for web and mobile.
      </h2>
      <p className="disclaimer">
        This website is WIP and more is to come soon. It is also&nbsp;
        <a
          className="repo-link"
          href="https://github.com/nmchr7/nicolaic-website"
        >
          open source
        </a>
      </p>
    </div>
    <Style />
  </>
);
