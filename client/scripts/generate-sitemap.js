import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://topcarehospital.com' });

const pages = [
  '/', 
  '/about',
  '/services',
  '/facilities',
  '/contact'
];

pages.forEach((page) => {
  sitemap.write({ url: page, changefreq: 'monthly', priority: 1.0 });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
});
