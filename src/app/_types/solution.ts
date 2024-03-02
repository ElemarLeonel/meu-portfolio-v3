export interface Solution {
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
