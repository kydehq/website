# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run qa`              | Run the full QA suite (build, spell, html, links)|
| `npm run qa:spell`        | Spell-check `.astro` files only                  |
| `npm run qa:html`         | Validate built HTML in `./dist/` only            |
| `npm run qa:links`        | Check `./dist/` for broken links only            |

## ✅ Quality Assurance

Every push and pull request runs the [QA workflow](.github/workflows/qa.yml) on GitHub Actions. You can run the same checks locally with `npm run qa` (driven by [`scripts/qa.sh`](scripts/qa.sh)).

The suite covers four checks:

| Check               | Tool                                              | What it catches                                                                              |
| :------------------ | :------------------------------------------------ | :------------------------------------------------------------------------------------------- |
| **Build**           | `astro build`                                     | Compile errors, broken imports, invalid frontmatter, type errors                             |
| **Spell check**     | [`cspell`](https://cspell.org)                    | Typos in page and component content. Domain dictionary lives in [`cspell.json`](cspell.json) |
| **HTML validation** | [`html-validate`](https://html-validate.org)      | Invalid markup, React-style attributes (e.g. `className`), unescaped entities, broken refs   |
| **Broken links**    | [`lychee`](https://lychee.cli.rs)                 | Dead internal links and 404s on outbound URLs across the built site                          |

### Local setup

`cspell` and `html-validate` are installed automatically with `npm install`. `lychee` is a Rust binary and must be installed separately for the link check to run locally:

```sh
# macOS
brew install lychee

# Linux / cargo
cargo install lychee
```

If `lychee` is missing, the local script skips the link check with a warning instead of failing — CI always runs it.

### Useful flags

```sh
npm run qa -- --skip-build   # reuse an existing ./dist
npm run qa -- --skip-links   # skip lychee even if installed
```

### Adding new domain words

When `cspell` flags a legitimate product name, abbreviation, or technical term, add it to the `words` array in [`cspell.json`](cspell.json) — keep the list sorted and lowercase where appropriate. If the flag is a real typo, fix the source instead.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
