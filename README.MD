### Installation instructions

Install node(for reference:https://nodejs.org/en/)

```sh
$ cd Articles
$ npm install
$ npm start
```

visit http://localhost:3000/

### Architecture details

main.js - It is root component for the application.
header.js - This component is responsible for fetching section names.
articleList.js - This component will collect articles from the file.
article_listitem.js - It will filter data based on the section name selection.
articleDetail.js - This component responsible for sending metadata for each article.
