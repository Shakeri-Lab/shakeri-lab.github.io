export interface NewsItem {
  date: string;
  title: string;
  content: string;
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