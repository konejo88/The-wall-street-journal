export function onenews (author,title,description,urlToImage,content,publishedAt) {
    return`
    <div class='peoples'>
          <p>${author}</p>
          <h2>${title}</h2>    
          <p>${description}</p>
          <img src="${urlToImage}" alt="">
          <p>${content }</p>
          <p>${publishedAt }</p>
          </div>
    `
    
}