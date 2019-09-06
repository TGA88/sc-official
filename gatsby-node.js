/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    console.log(`app ==> ${path.resolve(__dirname, 'src')}`)
    console.log(`com ==> ${path.resolve(__dirname, 'src/components')}`)
    actions.setWebpackConfig({
        resolve: {
          alias: {
            "feature": path.resolve(__dirname, 'src/components'),
            "app": path.resolve(__dirname, 'src'),
          }
        }
      })
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /plyr/,
              use: loaders.null(),
            },
          ],
        }
      })
    }
  }