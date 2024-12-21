# apps

Apps has two child applications:
1. header 
> Built with Vite + Vue JS, css with [tailwindcss](https://tailwindcss.com/docs/installation) and [daisyui](https://daisyui.com/components/navbar/)
2. trending
> Built with Vite + React

# host

Host app is the server app([Vite](https://vite.dev/guide/)) containing the outputs of the above two decoupled applications.

## Usage

To develop and build the children applications:
```bash
npm install 
npm run build 
```
```bash
npm run dev
```
In the host app:
```bash
npm install 
npm run dev 
```

Note: to generate output css in header app:
```bash
npx tailwindcss -i ./src/assets/input.css -o ./public/output.css --watch
```

## Contributing

Inspired by [Setup a Micro-Frontend architecture in 15min with Vite!](https://dev.to/mairouche/setup-a-micro-frontend-architecture-in-15min-with-vite-4pbg).

## License

[MIT](https://choosealicense.com/licenses/mit/)