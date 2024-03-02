import { ObjectNotion } from "../_types/objectNotion";
import { Profile } from "../_types/profile";
import { Tech } from "../_types/tech";
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

export async function getSolutions() {
  try {
    const databaseId = "6845709b-a495-43b9-bab5-0f9bd063e0d0";

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "active",
        checkbox: {equals: true},
      }
    });

    const solutions = response.results.map((solution: ObjectNotion) => solution.properties);
    return solutions;

  } catch (error: unknown) {
    handleNotionError(error);

    return null;
  }
}

export async function getTechs() {
  try {
    const databaseId = "c13d4e06-ade5-43a2-8009-88986f8d28bf";

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "active",
        checkbox: {equals: true},
      },
      sorts: [
        {
          property: "order",
          direction: "ascending",
        }
      ]
    });

    const techs = response.results.map((tech: ObjectNotion) => tech.properties);
    return techs;

  } catch (error: unknown) {
    handleNotionError(error);

    return null;
  }
}