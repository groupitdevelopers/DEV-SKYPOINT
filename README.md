## 🚀 Quick start

1.  **Setup**

    Download Node. https://nodejs.org/en/download/

    ```shell
    
    npm config set legacy-peer-deps true
    
    # install npm
    npm install
    sudo npm install -g gatsby-cli
    npm run build
    ```

2.  **Start developing.**

    Navigate into SKYPOINT directory and start it up.

    ```shell
    cd SKYPOINT/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    SKYPOINT is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. 
    Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

    Open the SKYPOINT directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

4.  **.env File for Prismic Variable**

    GATSBY_PRISMIC_REPO_NAME = [Repository Name]
    PRISMIC_ACCESS_TOKEN = [Token]
    PRISMIC_CUSTOM_TYPES_API_TOKEN = [Token]

    ENABLE_GATSBY_REFRESH_ENDPOINT = true

    // Refresh api connection [local]
    // curl -X POST http://localhost:8000/__refresh