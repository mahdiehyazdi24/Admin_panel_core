import axios from "axios";
import path from "node:path";
import { Buffer } from "node:buffer";
// import fs from "fs";
import { generateApi } from "swagger-typescript-api";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.SWAGGER_USERNAME;
const password = process.env.SWAGGER_PASSWORD;
const swaggerUrl = process.env.SWAGGER_URL;
const outputBasePath = path.resolve(process.cwd(), "./services/swagger");

async function fetchSwaggerJson() {
  const encodedAuth = Buffer.from(`${username}:${password}`).toString("base64");
  const response = await axios.get(swaggerUrl, {
    headers: {
      Authorization: `Basic ${encodedAuth}`,
    },
  });
  return response.data;
}

// function getNextVersionDir(basePath) {
//   if (!fs.existsSync(basePath)) {
//     fs.mkdirSync(basePath, { recursive: true });
//   }

//   const existingVersions = fs
//     .readdirSync(basePath)
//     .filter((dir) => dir.startsWith("version-"))
//     .map((dir) => parseInt(dir.replace("version-", ""), 10))
//     .filter((num) => !isNaN(num))
//     .sort((a, b) => a - b);

//   const nextVersion = existingVersions.length > 0 ? Math.max(...existingVersions) + 1 : 1;
//   return path.join(basePath, `version-${nextVersion}`);
// }

async function generateClient() {
  const swaggerSchema = await fetchSwaggerJson();
  // const versionDir = getNextVersionDir(outputBasePath);

  // fs.mkdirSync(versionDir, { recursive: true });

  console.log(`Generating API client in: ${outputBasePath}`);

  await generateApi({
    spec: swaggerSchema,
    output: outputBasePath,
    modular: true,
    extractEnums: true,
    httpClientType: "axios",
    unwrapResponseData: true,
    templates: "./services/code-generator/templates/modular",
  });

  console.log("API client generation complete.");
}

generateClient();
