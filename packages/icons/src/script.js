import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const svgDir = path.resolve(__dirname, "./assets");
const outputFile = path.resolve(__dirname, "./types.ts");

// Type header
const typeHeader = `import type { FunctionComponent, SVGProps } from "react";
export type SvgComponentType = FunctionComponent<SVGProps<SVGSVGElement>>;

`;

// Read all SVG files
const files = fs.readdirSync(svgDir).filter((file) => file.endsWith(".svg"));

// Helper to make PascalCase variable names
const toPascalCase = (str) =>
  str
    .replace(/[-_](.)/g, (_, g) => g.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase());

// Generate imports
const imports = files.map((file) => {
  const baseName = path.basename(file, ".svg");
  const varName = toPascalCase(baseName);
  return `import ${varName}Import from "./components/${varName}";`;
});

// Generate exports
const iconExports = files.map((file) => {
  const baseName = path.basename(file, ".svg");
  const varName = toPascalCase(baseName);
  return `  ${varName}: ${varName}Import as SvgComponentType,`;
});

// Build output
const output = `${typeHeader}
${imports.join("\n")}

export const IconObj = {
${iconExports.join("\n")}
};

export type IconKeys = keyof typeof IconObj;
`;

// Write file
fs.writeFileSync(outputFile, output, "utf8");
console.log(`✅ types.ts generated successfully.`);
