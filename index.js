function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  const div = document.querySelector('div#grand-node')
  let current = div
  while(current.children[0] !== undefined){
    current = current.children[0]
  }
    return current
}

function increaseRankBy(n){
  const li = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < li.length ; i++) {
    li[i].textContent = parseInt(li[i].textContent, 10) + n
  }
  return li
}