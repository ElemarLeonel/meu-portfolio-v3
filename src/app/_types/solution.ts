export interface Solution {
  icon: Icon,
  description: Description
  active: Active
  name: Name
}

export interface Description {
  id: string
  type: string
  rich_text: any[]
}

export interface Active {
  id: string
  type: string
  checkbox: boolean
}

export interface Name {
  id: string
  type: string
  title: any[]
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
