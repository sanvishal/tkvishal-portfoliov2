import { Box, IconButton } from '@chakra-ui/react';
import { LinkType } from '../../types';
import { LinkIcon } from '../LinkIcon';

const IconColors: Record<LinkType, string> = {
  [LinkType.GITHUB]: '#171515',
  [LinkType.DRIBBBLE]: '#ea4c89',
  [LinkType.LINKEDIN]: '#0077b5',
  [LinkType.WHATSAPP]: '#25D366',
  [LinkType.MAIL]: '#EA4335',
  [LinkType.TWITTER]: '#00acee',
  [LinkType.WEBSITE]: '#EA4335',
  [LinkType.BLOG]: '#3466f6',
};

export const SocialIcon = ({
  type,
  link,
  isMobile = false,
}: {
  type: LinkType;
  link: string;
  isMobile?: boolean;
}) => {
  const iconColor = IconColors[type];
  const bgColor = `${iconColor}20`;

  return (
    <IconButton
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={type}
      className="icon-btn"
      cursor="pointer"
      icon={
        <LinkIcon
          type={type}
          style={{ width: isMobile ? '20px' : '16px', height: isMobile ? '20px' : '16px' }}
          // color="var(--chakra-colors-socialIconColor)"
        />
      }
      transition="all 0.4s ease-in-out"
      isRound
      bg="transparent"
      color="socialIconColor"
      _hover={{
        background: type !== LinkType.GITHUB ? bgColor : 'socialIconBgColor',
        color: type !== LinkType.GITHUB ? iconColor : 'socialIconColor',
      }}
      _focus={{
        background: type !== LinkType.GITHUB ? bgColor : 'socialIconBgColor',
        color: type !== LinkType.GITHUB ? iconColor : 'socialIconColor',
      }}
      size={isMobile ? 'lg' : 'md'}
    ></IconButton>
  );
};
