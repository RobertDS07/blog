interface SocialMediaData {
  link: string;
  username: string;
}

interface Props {
  name: string;
  feedback: string;
  photoSrc: string;
  socialMediaData: SocialMediaData;
}

export default Props;
