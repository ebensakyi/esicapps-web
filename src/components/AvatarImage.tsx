import { AWS_S3_PROFILE_IMAGES_URL } from '@/config';
import Image from 'next/image';

interface AvatarImageProps {
  imagePath?: string;
  defaultImagePath: string;
  alt: string;
  height: number;
  width: number;
}

const AvatarImage: React.FC<AvatarImageProps> = ({
  imagePath,
  defaultImagePath,
  alt,
  height,
  width,
}) => {
  const src = imagePath ? `${AWS_S3_PROFILE_IMAGES_URL}${imagePath}` : defaultImagePath;
  

  return <Image src={src} alt={alt} height={height} width={width} />;
};

export default AvatarImage;
