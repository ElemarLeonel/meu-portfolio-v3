export interface Tech {
  description: Description
  active: Active
  icon: Icon
  name: Name
  order: Order
}

export interface Description {
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

export interface Active {
  id: string
  type: string
  checkbox: boolean
}

export interface Order{
  id: string,
  type: string,
  number: number
}

export interface Icon {
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

export interface Name {
  id: string
  type: string
  title: Title[]
}

export interface Title {
  type: string
  text: Text2
  annotations: Annotations2
  plain_text: string
  href: any
}

export interface Text2 {
  content: string
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
