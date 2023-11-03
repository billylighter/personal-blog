const settings = {
  name: "theme-goiblas",
  state: {
    frontity: {
      url: "https://wp.blog.admin.selevertov.com",
      site_name : "Selevertov",
      title: "Блог на тему «Wordpress Розробка»",
      description:
        "👋 Вітаю моє ім'я Володимир і я — Wordpress розробник.",
      lang: "ua",
      hero: {
        content:
          "👋 Вітаю моє ім'я Володимир і я — Wordpress розробник.",
        cta: {
          content: "Бажаєте знати більше про мене?",
          link: "/about-me/"
        }
      },
      author: {
        name: "Володимир Селевертов",
        link: "/about-me/"
      }
    }
  },
  packages: [
    {
      name: "frontity-goiblas-blog",
      state: {
        theme: {
          menu: [
            ["Блог", "/"],
            ["Проекти", "/projects/"],
            ["Про мене", "/about-me/"],
            ["Зв'язок", "/contact-me/"]
          ]
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://wp.blog.admin.selevertov.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "goiblas-disqus-comments"
  ]
};

export default settings;
