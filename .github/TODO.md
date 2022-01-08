### TODO
> Things that need to be done or fixed.
---
> *TODOs for post 1.0.0 version.*

#### Features

- [ ] Create more pages and a simple but dynamic navigation bar. [^](../src/pages/index.tsx#L7)

#### Improvements
- [x] `1.0.1` Add `<meta/>` tags and [schemas](https://schema.org) for better Search Engine Optimization (SEO).

- [ ] Import dynamically the social media icons based on the socials.json file to get the paths or file names without needing to manually go and add a new switch statement. [^](../src/components/SocialIcon.tsx#L6)

- [ ] Use [Next.js' `<Image/>` tag](https://nextjs.org/docs/basic-features/image-optimization) instead of CSS for the background image to better performance and automatic resizing and optimization. [^](../src/styles/globals.scss#L17)

- [ ] Find a better way to do the background squares without duplicating code. [^¹](../src/components/Background.tsx#L3) [^²](../src/styles/modules/background.module.scss#L3)

#### Development
- [ ] Install and configure [Stylelint](https://stylelint.io/) with Prettier for a better and consistent styling experience.

---

#### Miscellaneous
- [ ] Improve the [README file](./README.md).

- [ ] Create a contribution and issues files *if necessary*.
