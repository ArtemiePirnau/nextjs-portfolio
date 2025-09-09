export interface ItemProps {
  id: number;
  img: string;
  link: string;
  title: string;
}
export interface ProjectsProps {
  projectsHTML: ItemProps[];
  projectsReact: ItemProps[];
  projectsJS: ItemProps[];
  latestProjects: ItemProps[];
}
export interface SkillsProps {
  text: string;
  num: string;
  width: string;
  color: string;
}
