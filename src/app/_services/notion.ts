import {
  APIErrorCode,
  ClientErrorCode,
  isNotionClientError,
} from "@notionhq/client";
import { Root } from "../_types/profile";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getProfile(): Promise<Root|null> {
  try {
    const databaseId = "faa80a0a-571e-436f-b481-cc3d5566f5db";
    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: 1,
    });
    
    const profile = response.results[0].properties;
    return profile;

  } catch (error: unknown) {
    if (isNotionClientError(error)) {
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          console.log(error.code);
          break;
        case APIErrorCode.ObjectNotFound:
          console.log(error.code);
          break;
        case APIErrorCode.Unauthorized:
          console.log(error.code);
          break;
        default:
          console.log(error.code);
      }
    }

    return null;
  }
}