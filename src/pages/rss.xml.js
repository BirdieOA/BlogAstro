import rss, { pagesGlobToRssItems } from '@astrojs/rss';


export async function GET(context) {
  return rss({
    title: 'Birdie | Blog',
    description: 'Herramientas para la comunidad',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: '<language>es</language></language>',
  });
}