export interface SolutionList {
  object: string,
  id: string,
  created_time: string,
  last_edited_time: string,
  created_by: {
    object: string,
    id: string,
  },
  last_edited_by: {
    object: string,
    id: string,
  };
  cover: null,
  icon: null,
  parent: {
    type: string,
    database_id: string,
  },
  archived: boolean,
  properties: Solution,
  url: string,
  public_url: null,
}


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
