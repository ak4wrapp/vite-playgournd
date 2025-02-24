# Issues I Faced

1. **TypeScript Configuration Issue**

   - I created `tsconfig.lib.json` and updated the build command, but Vite was still deleting `.d.ts` files.
   - Solution: I had to provide `tsconfig.lib.json` in Vite `dts()`.

   ```ts
   dts({
      tsconfigPath: "./tsconfig.lib.json",
    }),
   ```

2. **NPM Pack Issue**

   - `npm pack` is including everything.
   - Solution: Must provide `files[]` in `package.json`.

   ```json
   "files": [
        "dist"
   ]
   ```

3. **Dist output Issue**

   - index.es.d.ts and index.umd.js created but not index.d.ts

   - Solution: I had to add the following to `package.json`:

   ```json
   "main": "./dist/index.umd.js",
   "module": "./dist/index.es.js",
   "types": "./dist/index.d.ts"
   ```

4. _(Add your third issue here)_
