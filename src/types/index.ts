export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};