import fs from "fs"
import { CLIENT } from "./applySchema.js"

export async function saveImageAll(path) {
  const FILES = readdirSync(path)

  for (let i = 0; i < FILES.length; i++) {
    const FILE = FILES[i]

    // if (isDir(FILE)) continue

    const PATH = `./images/${FILE}`
    await saveImage(PATH)
  }
}

async function saveImage(path) {
  const IMAGE = readFileSync(path)
  const IMAGE_B64 = Buffer.from(IMAGE).toString("base64")

  try {
    await CLIENT.data
      .creator()
      .withClassName("ScreenShots")
      .withProperties({
        image: IMAGE_B64,
        text: "matrix meme",
      })
      .do()
  } catch (e) {
    console.log(e)
  }
}

export function readFileSync(path) {
  return fs.readFileSync(path)
}
export function writeFileSync(path, data, encoding) {
  fs.writeFileSync(path, data, encoding)
}
function isDir(item) {
  return fs.lstatSync(item).isDirectory()
  // what is lstatSync?
  // lstatSync is a function that returns an object with information about the file
}
function readdirSync(path) {
  return fs.readdirSync(path)
}
