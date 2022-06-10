import { Text } from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';

export const FancyLink = ({ children, ...props }: LinkProps & { children: any }) => {
  return (
    <Link {...props} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <Text
          as="span"
          // textDecor="underline"
          // textUnderlineOffset="3px"
          // transition="all 0.2s ease-in-out"
          // _hover={{
          //   textUnderlineOffset: '1px',
          // }}
          // textDecorationColor="linkUnderLineColor"
        >
          {children}
        </Text>
      </a>
    </Link>
  );
};
