interface SocialMediaData {
  link: string;
  username: string;
}

export interface Props {
  name: string;
  feedback: string;
  photoSrc: string;
  socialMediaData: SocialMediaData;
  id?: string;
  isToTruncate?: boolean;
  activeShowMoreButton?: boolean;
}
