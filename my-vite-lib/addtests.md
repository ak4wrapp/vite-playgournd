To set up testing for `Button.tsx`, you need to add dependencies for React Testing Library and Jest. Here are the steps:

1. **Install Testing Dependencies**:
   Add the following dependencies to your `package.json`:
   ```json
   "devDependencies": {
     "@testing-library/react": "^14.0.0",
     "@testing-library/jest-dom": "^6.0.0",
     "jest": "^30.0.0",
     "babel-jest": "^30.0.0"
   }
   ```

2. **Add Jest Configuration**:
   Create a `jest.config.js` file with the following content:
   ```js
   module.exports = {
     testEnvironment: "jsdom",
     transform: {
       "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
     },
     moduleNameMapper: {
       "\\.(css|less)$": "identity-obj-proxy"
     }
   };
   ```

3. **Add Babel Configuration**:
   Create a `.babelrc` file with the following content:
   ```json
   {
     "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
   }
   ```

4. **Add Test Scripts**:
   Update the `scripts` section in your `package.json` to include:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

5. **Install Dependencies**:
   Run `npm install` to install the new dependencies.

After these changes, you can create a test file `Button.test.tsx` and run the tests using `npm run test`.