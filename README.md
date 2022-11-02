# Prosperity Website v2

This is a rewrite of the original [Prosperity website](https://prosperitymc.net)
in Solid.js. Among other features, this rewrite is focused on overall better UI
and UX.

[Development Deployment](https://prosperity-website-v2-carbonghost.vercel.app)

## Planned Features

- [ ] Fancy landing page.
- [ ] More art and graphics.
- [ ] Project gallery page.
- [ ] Markdown-based wiki pages.
- [ ] Page showing server news.
- [ ] Move to another hosting service.

### Maybe

- [ ] SSR.
- [ ] Contact form.
- [ ] Integration with Grafna stats.
- [ ] Something to do with 3D...

## Development

If you wish to run this project locally, follow these instructions:

1. Download Node and npm from [here]().
2. Clone the repository.
3. Open the repository directory in your terminal and run `npm i`.
4. Start the development server with `npm run dev`.
5. Open http://localhost:7200.

Code style is enforced by the `.prettierrc` file, if you're using Visual Studio
code then it will have been automatically suggested when you open the project.
In addition to this the Headwind extension can be used to automatically sort
Tailwind classes.

Build the project with `npm run build`. The site will be optimized and compiled
to the `/dist` directory.
