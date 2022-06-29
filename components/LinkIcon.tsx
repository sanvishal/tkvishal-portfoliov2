import { IconBaseProps } from 'react-icons';

import { FiDribbble, FiGithub, FiGlobe, FiLink, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import { LinkType } from '../types';

export const LinkIcon = ({ type, ...props }: { type: LinkType } & IconBaseProps) => {
  switch (type) {
    case LinkType.GITHUB:
      return <FiGithub {...props} />;
    case LinkType.WEBSITE:
      return <FiGlobe {...props} />;
    case LinkType.BLOG:
      return <SiHashnode {...props} />;
    case LinkType.TWITTER:
      return <FiTwitter {...props} />;
    case LinkType.LINKEDIN:
      return <FiLinkedin {...props} />;
    case LinkType.WHATSAPP:
      return <FaWhatsapp {...props} />;
    case LinkType.DRIBBBLE:
      return <FiDribbble {...props} />;
    default:
      return <FiLink {...props} />;
  }
};
