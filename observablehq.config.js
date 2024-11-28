// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "df.id.au",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],
  pages: [
    {
      name: 'Spare time projects',
      open: false,
      pages: [
        {name: 'CalendarArc', path: 'https://angrytongan.github.io/calendararc' },
        {name: 'The Erg Arcade!', path: 'https://ergarcade.com' },
      ],
    },
    {
      name: 'Recreation',
      open: false,
      pages: [
        { name: 'The gym', path: '/recreation/the-gym' },
        { name: 'Year of the Engine - year 1', path: '/recreation/yoe-year1-review/' },
        { name: 'Year of the Engine - year 2', path: '/recreation/yoe-year2-review/' },
      ],
    },
    {
      name: 'Resume',
      path: '/resume',
    },
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: `
    <link rel="icon" href="observable.png" type="image/png" sizes="32x32">
    <script data-goatcounter="https://angrytongan.goatcounter.com/count" src="/components/count.js"></script>
    <script src="/components/analytics.js"></script>
  `,

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: "dashboard", // try "light", "dark", "slate", etc.
  header: '<a href="/"><img src="/images/head.jpeg" alt="me" style="height: 2rem; border-radius: 50%" /></a><a href="/">df.id.au</a>', // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  toc: true, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  output: "docs", // path to the output root for build
  search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // cleanUrls: true, // drop .html from URLs
};
