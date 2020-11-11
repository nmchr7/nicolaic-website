import theme from '../styles/theme';

export default function ProfileImage() {
  return (
    <>
      <img className="profile_image" src="assets/profile_image.jpg" alt="" />
      <style jsx>{`
        .profile_image {
          width: 200px;
          height: 200px;
          border: 5px solid ${theme.color.primary};
          border-radius: 100px;
        }
      `}</style>
    </>
  );
}
