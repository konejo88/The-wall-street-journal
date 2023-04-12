import { navigation } from "./navigation.js"
import { onenews } from "./oneNews.js";
const nav=document.querySelector(".navigation");
nav.innerHTML = navigation()
const newsUrl='https://newsapi.org/v2/everything?domains=wsj.com&apiKey=663d966ad10749a2abb4bdf47081498a'
const queryNews=new XMLHttpRequest()
queryNews.open('GET',newsUrl)
queryNews.responseType='json'
queryNews.onload=function () {
    const mir=document.querySelector('.mir')
    const dataNews=queryNews.response.articles
    console.log(dataNews);
    for (let index = 0; index < 22; index++) {
        const element = dataNews[index];
        console.log(element);
        mir.innerHTML+=onenews(element.author,element.title,element.description,element.urlToImage,element.content,element.publishedAt)
        }
}
queryNews.send()