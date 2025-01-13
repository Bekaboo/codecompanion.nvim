import { defineConfig } from "vitepress";

const version = process.env.CC_VERSION.toString().split("\n")[0].trim();

const siteUrl = "https://codecompanion.olimorris.dev";
const title = version ? version : "Main";
const otherTitle = version ? "Main" : version;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CodeCompanion.nvim",
  description: "AI-powered coding, seamlessly in Neovim",
  sitemap: { hostname: siteUrl },
  themeConfig: {
    nav: [
      {
        text: version,
        items: [
          {
            text: "Changelog",
            link: "https://github.com/olimorris/codecompanion.nvim/blob/main/CHANGELOG.md",
          },
          {
            text: "Contributing",
            link: "https://github.com/olimorris/codecompanion.nvim/blob/main/.github/contributing.md",
          },
        ],
      },
    ],

    sidebar: [
      { text: "Introduction", link: "/" },
      { text: "Installation", link: "installation" },
      { text: "Getting Started", link: "getting-started" },
      {
        text: "Configuration",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/configuration/introduction" },
          { text: "Adapters", link: "/configuration/adapters" },
          { text: "Chat Buffer", link: "/configuration/chat-buffer" },
          { text: "Inline Assistant", link: "/configuration/inline-assistant" },
          { text: "Action Palette", link: "/configuration/action-palette" },
          { text: "Prompt Library", link: "/configuration/prompt-library" },
          { text: "System Prompt", link: "/configuration/system-prompt" },
          { text: "Others", link: "/configuration/others" },
        ],
      },
      {
        text: "Usage",
        collapsed: false,
        items: [
          { text: "General", link: "/usage/general" },
          { text: "Action Palette", link: "/usage/action-palette" },
          { text: "Adapters", link: "/usage/adapters" },
          {
            text: "Chat Buffer",
            link: "/usage/chat-buffer",
            collapsed: true,
            items: [
              { text: "Agents/Tools", link: "/usage/chat-buffer/agents" },
              {
                text: "Slash Commands",
                link: "/usage/chat-buffer/slash-commands",
              },
              { text: "Variables", link: "/usage/chat-buffer/variables" },
            ],
          },
          { text: "Commands", link: "/usage/commands" },
          { text: "Events", link: "/usage/events" },
          { text: "Inline Assistant", link: "/usage/inline-assistant" },
          { text: "Workflows", link: "/usage/workflows" },
          { text: "Miscellaneous", link: "/usage/misc" },
        ],
      },
      {
        text: "Extending the Plugin",
        collapsed: true,
        items: [
          { text: "Creating Adapters", link: "/extending/adapters" },
          { text: "Creating Prompts", link: "/extending/prompts" },
          { text: "Creating Tools", link: "/extending/tools" },
        ],
      },
    ],

    editLink: {
      pattern:
        "https://github.com/olimorris/codecompanion.nvim/edit/main/doc/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Oli Morris",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/olimorris/codecompanion.nvim",
      },
    ],

    search: { provider: "local" },
  },
});
