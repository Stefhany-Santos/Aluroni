import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // Atualizei isso para apontar para o plugin certo
import pluginReact from "eslint-plugin-react";
import parserTypescript from "@typescript-eslint/parser"; // Adiciona o parser do TypeScript

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: parserTypescript,  // Define o parser correto para arquivos TypeScript
      globals: globals.browser
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Desativa a regra de importar React no JSX
      "quotes": ["error", "double"],     // Para usar aspas duplas
      "semi": ["error", "always"],       // Para exigir ponto e vírgula
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
