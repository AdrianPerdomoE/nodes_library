import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.tsx"),
            name: "nodes_library",

            fileName: "index",
        },
        rollupOptions: {
            external: ["react"],
        },
    },
});