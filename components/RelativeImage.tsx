import Image, { ImageProps } from 'next/image';
import { shimmer, toBase64 } from '../utils/utils';

export const RelativeImage = ({ ...props }: ImageProps) => {
  return (
    <div className="image-cont rounded-img">
      <Image
        {...props}
        layout="fill"
        className="image"
        quality={100}
        alt="image"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(0, 0))}`}
      />
    </div>
  );
};
