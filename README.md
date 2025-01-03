# Angular Learning Path

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

initial setup:

```bash
nvm install (or nvm use if you already have the version installed)
npm install
cp db.json.dist db.json
```

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Chapter 1

- base component `sailors-list` to show the list of Sailors
- service `sailor.service.ts`

### Chapter 2

- `login` component, reactive form
- `fake-auth.service.ts`
- angular router with guard protection
- inject-based dependency injection with `inject()`
- pass data to component with `@Input`

### Chapter 3

- `add-sailor` component, reactive form validation
- delete sailor
- event emitter with `@Output()`
- signals `update()`

### Chapter 4

- `sailor-detail` and `sailor-comments` components
- use of `ActivatedRoute` service
- deferred loading with `@defer`
- angular signal inputs: `input()` and `effect()`

### Chapter 5

- filter sailors
- template driven form
- edit sailor

### Chapter 6

- json-server, http requests
- reusable `resource.service.ts` to manage any resource with signal
- `rxjs` for crud actions
- server side filter with `toObservable`
