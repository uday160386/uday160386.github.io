source 'https://rubygems.org'

# Modern Jekyll 4.x directly, not the `github-pages` gem. `github-pages`
# pins exact old versions of every plugin (including a jekyll-feed build
# that calls Ruby's `tainted?`, removed in Ruby 3.2 — that's the exact
# "undefined method 'tainted?' for nil" error) to match GitHub's legacy
# branch-based Pages builder. Since this site deploys via GitHub Actions
# (.github/workflows/pages.yml) instead of that legacy builder, none of
# that pinning is actually needed — Actions builds with whatever Gemfile
# is checked in, not GitHub's own copy. Modern jekyll + modern plugin
# versions have no Ruby 3.2 compatibility issues at all.
gem 'jekyll', '~> 4.3'

group :jekyll_plugins do
  # Every plugin _config.yml's `plugins:` list actually asks for, so
  # `jekyll build`/`serve` don't fail looking for one that's configured
  # but never installed.
  gem 'jekyll-paginate'
  gem 'jekyll-sitemap'
  gem 'jekyll-gist'
  gem 'jekyll-feed'
  gem 'jekyll-redirect-from'
  gem 'jekyll-mentions'
  gem 'jemoji'
  # Ruby removed webrick from the standard library in 3.0 — `jekyll serve`
  # needs it added back explicitly as a real dependency.
  gem 'webrick', '~> 1.8'
end
