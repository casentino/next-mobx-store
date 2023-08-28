module.exports = {
  root: true,
  extends: ["./index.js", "next", "next/core-web-vitals", "plugin:@next/next/recommended"], 
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  settings: {
    next: {
      rootDir: ["apps/*/"]
    },    
    react: {
      version: "detect"
    }
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off"
  } 
}

