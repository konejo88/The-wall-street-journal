import { navigation } from "./navigation.js"
import { onenews } from "./oneNews.js";
const nav=document.querySelector(".navigation");
 nav.innerHTML = navigation()
const newsUrl='https://newsapi.org/v2/everything?domains=wsj.com&apiKey=663d966ad10749a2abb4bdf47081498a'
const queryNews=new XMLHttpRequest()
queryNews.open('GET',newsUrl)
queryNews.responseType='json'
queryNews.onload=function () {
        const  vorld=document.querySelector('.vorld')
        const dataNews1=queryNews.response.articles
        console.log(dataNews1);
        for (let index = 23; index < 47; index++) {
        const element = dataNews1[index];
        vorld.innerHTML+=onenews(element.author,element.title,element.description,element.urlToImage,element.content,element.publishedAt)
        }
    
}
queryNews.send()