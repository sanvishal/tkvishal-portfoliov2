import { Text } from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';

export const FancyLink = ({ children, ...props }: LinkProps & { children: any }) => {
  return (
    <Link {...props} passHref>
      <a target="_blank" rel="noopener noreferrer" className="fancy">
        <Text as="span">{children}</Text>
      </a>
    </Link>
  );
};
