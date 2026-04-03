export interface NewsItem {
  date: string;
  title: string;
  content: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  links?: Array<{
    text: string;
    url: string;
  }>;
}

export interface TeamMember {
  name: string;
  title: string;
  link: string;
}

export interface Team {
  pi: TeamMember;
  currentMembers: TeamMember[];
  alumni: TeamMember[];
}
