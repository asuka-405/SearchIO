import weaviate from "weaviate-ts-client"
// import { schemaConfig } from "./schema.js"

export const CLIENT = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
})

// await CLIENT.schema.classCreator().withClass(schemaConfig).do()
