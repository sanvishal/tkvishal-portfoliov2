import { Box, chakra, BoxProps } from '@chakra-ui/react';
import NextImage, { ImageProps, ImageLoaderProps } from 'next/image';
import { shimmer, toBase64 } from '../utils/utils';

const ChakraNextUnwrappedImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'quality', 'placeholder', 'blurDataURL', 'loader'].includes(
      prop
    ),
});

const myLoader = (resolverProps: ImageLoaderProps): string => {
  return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
};

export const ChakraNextImage = ({
  showBlur = true,
  ...props
}: ImageProps & { showBlur?: boolean } & BoxProps) => {
  const { src, alt, width, quality, height, ...rest } = props;
  return (
    <Box pos="relative" className="group" {...rest} width={width} height={height}>
      <ChakraNextUnwrappedImage
        w="auto"
        h="auto"
        loader={myLoader}
        width={width}
        quality={quality}
        height={height}
        placeholder={showBlur ? 'blur' : 'empty'}
        blurDataURL={showBlur ? `data:image/svg+xml;base64,${toBase64(shimmer(0, 0))}` : undefined}
        src={src}
        alt={alt}
        transition="all 0.2s"
      />
    </Box>
  );
};
