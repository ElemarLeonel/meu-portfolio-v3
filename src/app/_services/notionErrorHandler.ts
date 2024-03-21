import {
  isNotionClientError,
  ClientErrorCode,
  APIErrorCode,
} from "@notionhq/client";

export function handleNotionError(error: unknown) {
  if (isNotionClientError(error)) {
    switch (error.code) {
      case ClientErrorCode.RequestTimeout:
        console.log("RequestTimeout");
      case APIErrorCode.ObjectNotFound:
        console.log("ObjectNotFound");
        break;
      case APIErrorCode.Unauthorized:
        console.log("Unauthorized");
        break;
      default:
        console.log("Unknown error");
    }
  }
}
