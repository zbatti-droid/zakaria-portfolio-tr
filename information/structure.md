# Project structure

```text
app/
  (root)/
    blogs/                 Technical notes and individual articles
    contact/               Contact page
    contributions/         Public project contributions
    experience/            Experience list and detail pages
    projects/              Project list and dedicated detail pages
    resume/                CV download page
    skills/                Skills page
  api/                     Contact and GitHub metadata endpoints
  favicon.ico              Personal portrait favicon
  globals.css              Global styles and theme variables
components/                Shared UI and page components
config/                    Projects, experience, education, skills, and links
content/blogs/             Markdown articles
public/                    Personal images, CV, and project previews
lib/                       Shared utilities and content helpers
providers/                 App-level providers
```

## Project details

Project IDs and outbound URLs are maintained in `config/projects.ts`. Every configured project has an internal route at `/projects/{id}`.
