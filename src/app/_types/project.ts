export interface Project {
  link_github: LinkGithub
  link_project: LinkProject
  active: Active
  techs: Techs
  description: Description
  image: Image
  title: Title
}

export interface LinkGithub {
  id: string
  type: string
  rich_text: any[]
}

export interface LinkProject {
  id: string
  type: string
  rich_text: any[]
}

export interface Active {
  id: string
  type: string
  checkbox: boolean
}

export interface Techs {
  id: string
  type: string
  multi_select: any[]
}

export interface Description {
  id: string
  type: string
  rich_text: any[]
}

export interface Image {
  id: string
  type: string
  files: any[]
}

export interface Title {
  id: string
  type: string
  title: any[]
}
