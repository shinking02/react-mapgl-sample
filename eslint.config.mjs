/**
 * [TODO] eslint-plugin-tailwindcss will be added when tailwindcssv4 is supported
 * https://github.com/francoismassart/eslint-plugin-tailwindcss/pull/385
 */

import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            "react/function-component-definition": [
                "error",
                {
                    namedComponents: "arrow-function",
                    unnamedComponents: "arrow-function",
                },
            ],
            "react/hook-use-state": "error",
            "react/jsx-fragments": "error",
            "react/react-in-jsx-scope": "off",
            "react/self-closing-comp": "error",
            "react/jsx-curly-brace-presence": "error",
            "object-shorthand": "error",
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "no-console": ["warn", { allow: ["warn", "error"] }],
        },
    },
    eslintConfigPrettier,
];

export default eslintConfig;
