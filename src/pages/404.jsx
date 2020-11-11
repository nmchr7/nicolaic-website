import Error from 'next/error';

export default function Error404() {
  return <Error statusCode={404} />;
}
