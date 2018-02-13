function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}
function deepestChild(){
  var child = document.getElementById("grand-node").querySelectorAll("div");
  var deep;
  for(let i = 0; i < child.length-1; i++){
    deep = child[i].querySelector("div");
  }
  return deep;
}
function increaseRankBy(n){
  var rank = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i = 0; i < rank.length; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML);
  }
}