import Image from 'next/image';

export default function ProfileImage() {
  return (
    <Image
      width={200}
      height={200}
      className="rounded-full border-4 border-orange-500"
      src="/assets/profile_image.jpg"
      alt=""
    />
  );
}
