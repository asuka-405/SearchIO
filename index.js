import { CLIENT } from "./applySchema.js"
import { readFileSync, saveImageAll, writeFileSync } from "./utils.js"

// const schemaRes = await CLIENT.schema.getter().do()

// saveImageAll("./images")

const TEST = Buffer.from(readFileSync("./test.jpg")).toString("base64")

const RES_IMAGE = await CLIENT.graphql
  .get()
  .withClassName("ScreenShots")
  .withFields(["image"])
  .withNearImage({ image: TEST })
  .withLimit(10)
  .do()

// Write results to filesystem
const screenshots = RES_IMAGE.data.Get.ScreenShots
for (let i = 0; i < screenshots.length; i++) {
  const image = screenshots[i].image
  writeFileSync(`./result_${i}.jpg`, image, "base64")
}
