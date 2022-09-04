import { Box, IconButton, Tooltip } from '@chakra-ui/react';
import { IconColors } from '../../data';
import { LinkType } from '../../types';
import { LinkIcon } from '../LinkIcon';

export const SocialIcon = ({
  type,
  link,
  isMobile = false,
  onHover,
}: {
  type: LinkType;
  link: string;
  isMobile?: boolean;
  onHover: () => void;
}) => {
  const iconColor = IconColors[type];
  const bgColor = `${iconColor}20`;

  return (
    <Tooltip label={type.toLowerCase()} placement="left" openDelay={800}>
      <IconButton
        as="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={type}
        className="icon-btn"
        cursor="pointer"
        onMouseEnter={onHover}
        icon={
          <LinkIcon
            type={type}
            style={{ width: isMobile ? '20px' : '16px', height: isMobile ? '20px' : '16px' }}
            // color="var(--chakra-colors-socialIconColor)"
          />
        }
        transition="all 0.4s ease-in-out"
        borderRadius={10}
        bg="transparent"
        color="commonIconColor"
        opacity="0.8"
        _hover={{
          opacity: 1,
          background: type !== LinkType.GITHUB ? bgColor : 'commonIconBgColor',
          color: type !== LinkType.GITHUB ? iconColor : 'commonIconColor',
        }}
        _focus={{
          opacity: 1,
          background: type !== LinkType.GITHUB ? bgColor : 'commonIconBgColor',
          color: type !== LinkType.GITHUB ? iconColor : 'commonIconColor',
        }}
        size={isMobile ? 'lg' : 'md'}
      ></IconButton>
    </Tooltip>
  );
};
