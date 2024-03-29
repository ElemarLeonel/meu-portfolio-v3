export interface ObjectNotion {
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
  properties: Object,
  url: string,
  public_url: null,
}