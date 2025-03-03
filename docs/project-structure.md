```md
# 🗄️ Project Structure  

The core of the application resides in the `src` directory, structured as follows:

```sh
src
|
+-- app               # Application-level setup
|   +-- app.tsx       # Main application component
|   +-- provider.tsx  # Global providers (context, theme, etc.)
|   +-- router.tsx    # Application routing configuration
|
+-- assets            # Static assets (images, fonts, etc.)
|
+-- components        # Reusable UI components
|
+-- config            # Global configuration and environment variables
|
+-- services          # Modular services for maintainability
|
+-- hooks             # Custom hooks for reusable logic
|
+-- context           # Centralized context for global state
|
+-- types             # Shared TypeScript types
|
+-- utils             # Utility functions used throughout the app
```

For scalability, the `features` folder should hold the majority of the application logic, with each feature having its own folder. This way, feature-specific code remains separated, avoiding the mixing of shared components and making maintenance easier. Features should include only the necessary folders to keep them self-contained and organized.

```sh
src/features/feature-name
|
+-- assets      # Static resources for the feature
|
+-- components  # Feature-specific UI components
|
+-- context     # Feature-specific context management
|
+-- hooks       # Feature-specific custom hooks
|
+-- types       # TypeScript types for the feature
|
+-- utils       # Utility functions specific to the feature
```

For shared API calls across features, centralizing them in an `api` directory is preferred to maintain a DRY (Don't Repeat Yourself) codebase.

**Important Notes:**
- Avoid using barrel files (`index.ts`) to re-export modules as it can interfere with tree-shaking in Vite and negatively impact performance.
- Import files directly to optimize for better performance.
- Ensure features are modular by composing them at the application level instead of allowing imports across features.
- Use ESLint to restrict cross-feature imports.

```js
'import/no-restricted-paths': [
    'error',
    {
        zones: [
            {
                target: './src/features/users',
                from: './src/features',
                except: ['./users'],
            },
        ],
    },
],
S