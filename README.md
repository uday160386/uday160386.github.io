# uday160386.github.io

Personal site of Uday BKV — custom Jekyll theme, no theme gem.

## Run locally
```
bundle install
bundle exec jekyll serve
```

## Where things live
| What | Where |
|---|---|
| Write-ups | `_aiengineering/`, `_greensoftware/`, `_posts/` |
| Short notes | `_notes/` (front matter `color: warm` or `cool`) |
| Projects | `_projects/` (`header.teaser` for the card image, optional `repo:` URL) |
| Learning page | `_data/learning.yml` |
| Home "Published elsewhere" / "Downloads" | `_data/external_posts.yml`, `_data/files.yml` |
| Nav, author, socials | `_config.yml` |
| Design | `assets/css/site.css` (tokens at the top), `_layouts/`, `_includes/` |

Any post can set `dek:` in front matter to control the standfirst under its title.
