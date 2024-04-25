import { ObjectNotion } from "../_types/objectNotion";
import { Profile } from "../_types/profile";
import { handleNotionError } from "./notionErrorHandler";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getProfile(): Promise<Profile | null> {
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
        checkbox: { equals: true },
      },
    });

    const solutions = response.results.map(
      (solution: ObjectNotion) => solution.properties
    );
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
        checkbox: { equals: true },
      },
      sorts: [
        {
          property: "order",
          direction: "ascending",
        },
      ],
    });

    const techs = response.results.map((tech: ObjectNotion) => tech.properties);
    return techs;
  } catch (error: unknown) {
    handleNotionError(error);

    return null;
  }
}

export async function getProjects() {
  try {
    const databaseId = "47d359ce-afbc-48fa-8873-68da29d3a682";

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "active",
        checkbox: { equals: true },
      },
    });

    const projects = response.results.map(
      (project: ObjectNotion) => project.properties
    );

    return projects;
  } catch (error: unknown) {
    handleNotionError(error);

    return null;
  }
}

export async function getPostsHome(): Promise<ObjectNotion[] | null> {
  try {
    const databaseId = "eb004556-aa8c-4cd9-af72-a4d2b77d035b";

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          { property: "active", checkbox: { equals: true } },
          { property: "show_in_home", checkbox: { equals: true } },
        ],
      },
      sorts: [
        {
          property: "published_date",
          direction: "descending",
        },
      ],
    });

    const posts = response.results.map((post: ObjectNotion) => post.properties);
    console.log(posts);

    return posts;
  } catch (error: unknown) {
    handleNotionError(error);

    return null;
  }
}

export async function getPostsBlog(): Promise<ObjectNotion[] | null> {
  try {
    const databaseId = "eb004556-aa8c-4cd9-af72-a4d2b77d035b";

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: { property: "active", checkbox: { equals: true } },
      sorts: [
        {
          property: "published_date",
          direction: "descending",
        },
      ],
    });

    const posts = response.results.map((post: ObjectNotion) => post.properties);

    return posts;
  } catch (error: unknown) {
    handleNotionError(error);

    return null;
  }
}
