import { Profile } from "../_types/profile";
import { handleNotionError } from "./notionErrorHandler";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getProfile(): Promise<Profile|null> {
  try {
    const databaseId = "faa80a0a-571e-436f-b481-cc3d5566f5db";
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 1,
    });
    
    const profile = response.results[0].properties;
    return profile;

  } catch (error: unknown) {
    handleNotionError(error);

    return null;
  }
}