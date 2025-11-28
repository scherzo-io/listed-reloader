module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/new/nextjs-site/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/33e52_e188f245._.js",
  "build/chunks/[root-of-the-server]__e4ecc5a9._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/new/nextjs-site/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];