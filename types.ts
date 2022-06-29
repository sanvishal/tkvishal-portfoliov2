export type Project = {
  name: string;
  image: string;
  description?: string;
  links?: ProjectLink[];
  accentColor?: string;
  about?: string[];
  images?: { link: string; alt?: string }[];
};

export enum LinkType {
  'GITHUB' = 'GITHUB',
  'WEBSITE' = 'WEBSITE',
  'BLOG' = 'BLOG',
  'TWITTER' = 'TWITTER',
  'LINKEDIN' = 'LINKEDIN',
  'DRIBBBLE' = 'DRIBBBLE',
  'WHATSAPP' = 'WHATSAPP',
  'MAIL' = 'MAIL',
}

export type ProjectLink = {
  name?: string;
  type: LinkType;
  href: string;
};
