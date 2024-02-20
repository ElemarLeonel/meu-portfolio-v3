export interface Root {
  github: Github
  years_of_experience: YearsOfExperience
  image_history: ImageHistory
  history: History
  linkedin: Linkedin
  instagram: Instagram
  subtitle_projects: SubtitleProjects
  projects_developed: ProjectsDeveloped
  curriculum: Curriculum
  certifications_carried_out: CertificationsCarriedOut
  phone: Phone
  name: Name
}

export interface Github {
  id: string
  type: string
  rich_text: any[]
}

export interface YearsOfExperience {
  id: string
  type: string
  number: number
}

export interface ImageHistory {
  id: string
  type: string
  files: File[]
}

export interface File {
  name: string
  type: string
  file: File2
}

export interface File2 {
  url: string
  expiry_time: string
}

export interface History {
  id: string
  type: string
  rich_text: RichText[]
}

export interface RichText {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

export interface Text {
  content: string
  link: any
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Linkedin {
  id: string
  type: string
  rich_text: any[]
}

export interface Instagram {
  id: string
  type: string
  rich_text: any[]
}

export interface SubtitleProjects {
  id: string
  type: string
  rich_text: any[]
}

export interface ProjectsDeveloped {
  id: string
  type: string
  number: any
}

export interface Curriculum {
  id: string
  type: string
  files: File3[]
}

export interface File3 {
  name: string
  type: string
  file: File4
}

export interface File4 {
  url: string
  expiry_time: string
}

export interface CertificationsCarriedOut {
  id: string
  type: string
  number: any
}

export interface Phone {
  id: string
  type: string
  rich_text: RichText2[]
}

export interface RichText2 {
  type: string
  text: Text2
  annotations: Annotations2
  plain_text: number
  href: any
}

export interface Text2 {
  content: number
  link: any
}

export interface Annotations2 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Name {
  id: string
  type: string
  title: Title[]
}

export interface Title {
  type: string
  text: Text3
  annotations: Annotations3
  plain_text: string
  href: any
}

export interface Text3 {
  content: string
  link: any
}

export interface Annotations3 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}