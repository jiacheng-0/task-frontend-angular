# TaskFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.9.

## Next steps 

If you want, the next steps could be:

- Adding update task functionality (PUT) fully in the UI.

- Adding better UI/UX, e.g., task completion animations or notifications.

- Persisting data in a real database instead of H2.

- Adding unit tests for backend and frontend.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## GPT helpers

- main https://chatgpt.com/c/68ce4b35-8d00-832a-9c09-20e1508e146a
- Mock service in testing https://chatgpt.com/c/68ce8667-98b0-8327-9ab8-c736131749c1

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

To run the tests only once (without watch mode), use:

```bash
ng test --watch=false
```

To run tests for a specific file, use:
```bash 
ng test --watch=false --include src/app/components/task-list/task-list.component.spec.ts
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
