import { CLIENT } from "./applySchema.js"
import { readFileSync, saveImageAll, writeFileSync } from "./utils.js"

// const schemaRes = await CLIENT.schema.getter().do()

saveImageAll("./images")

const TEST = Buffer.from(readFileSync("./test.png")).toString("base64")

const RES_IMAGE = await CLIENT.graphql
  .get()
  .withClassName("ScreenShots")
  .withFields(["image"])
  .withNearImage({ image: TEST })
  .withLimit(1)
  .do()

// // Write result to filesystem
const RESULT = RES_IMAGE.data.Get.ScreenShots[0].image
writeFileSync("./result.jpg", RESULT, "base64")
