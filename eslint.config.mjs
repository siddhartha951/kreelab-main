import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disables the unused variables rule
      "@typescript-eslint/no-explicit-any": "off", // Allows the use of 'any' type
      "@typescript-eslint/no-unused-expressions": "off", // Disables the unused expressions rule
      "react-hooks/exhaustive-deps": "off", // Disables exhaustive dependencies for React hooks
    },
  },
];

export default eslintConfig;
