# hmr-lazy-routes
Issue demo repo


Issue with HMR propogation, component is rendered through index.js -> app.js, but loadable(Page) components "parent" is routes.js, not app.js where from it was rendered.

### Screenshot
![issueImage](https://raw.githubusercontent.com/l3v1k/hmr-lazy-routes/master/issue-screenshot.png)
