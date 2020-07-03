import theme from '../styles/theme';

export default ({ imgSrc }) => {
  return (
    <>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 200px;
          border: 10px solid ${theme.color.primary};
          border-radius: 50%;
        }
        img {
          width: 190px;
          height: 190px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};
