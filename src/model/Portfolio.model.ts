export interface Profile {

  id: number;

  name: string;

  title: string;

  resumeUrl: string;

  logoText: string;

}


export interface HeroStat {

  id: number;

  icon: string;

  value: string;

  label: string;

  sortOrder: number;

}


export interface Skill {

  id: number;

  name: string;

}


export interface SkillCategory {

  id: number;

  title: string;

  icon: string;

  sortOrder: number;

  skills: Skill[];

}


export interface Project {

  id: number;

  title: string;

  description: string;

  icon: string;

  sortOrder: number;

  tags: string[];

}


/*
 * Optional.
 *
 * This interface is required only if you
 * still use /api/portfolio somewhere.
 */
export interface PortfolioResponse {

  profile: Profile;

  heroStats: HeroStat[];

  skillCategories: SkillCategory[];

  projects: Project[];

}