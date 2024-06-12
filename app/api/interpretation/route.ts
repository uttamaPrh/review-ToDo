import client from "@/lib/appwrite_client";
import { Databases, ID, Query } from "appwrite";

const database = new Databases(client);
// creat
async function getInterpretation(data: { term: string; desc: string }) {
  try {
    const response = await database.createDocument(
      process.env.NEXT_PUBLIB_APPWRITE__DATABASE_ID as string,
      "Title",
      ID.unique(),
      data,
    );
    return response;
  } catch (error) {
    console.error('Errors = ' , error);
    throw new Error('Error while creating document');
  }
}

// fetch

// async function fetchInterpretation() {
//   try {
//     const response = await database.createDocument(
//       process.env.NEXT_PUBLIB_APPWRITE__DATABASE_ID as string,
//       "Title",
//       [Query.orderDesc('$createdAt')]
//     );
//     return
//   } catch (error) {
//     console.error("Errors = ", error);
//     throw new Error("Error while creating document");
//   }
// }
