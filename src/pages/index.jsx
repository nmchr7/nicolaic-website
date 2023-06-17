import ProfileImage from '../components/ProfileImage';

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center flex-col h-screen bg-slate-900">
      <ProfileImage />
      <h1 className="mt-4 text-xl font-semibold text-orange-500">
        Nicolai Mølgaard Christensen
      </h1>
      <h2 className="text-center mt-2 max-w-md text-orange-500">
        Software developer with 5+ years of professional experience, mainly
        working with JavaScript and React. Helping companies create scalable
        applications for web and mobile.
      </h2>
      <p className="text-center mt-4 text-sm text-orange-500">
        This website is WIP and more is to come soon. It is also&nbsp;
        <a
          className="text-blue-400"
          href="https://github.com/nmchr7/nicolaic-website"
        >
          open source
        </a>
      </p>
    </div>
  );
}
