// 指定DOM

var list = document.querySelector('.list')
var sendData = document.querySelector('.send')
var data = JSON.parse(localStorage.getItem('listData')) || [];
// 若這個data有資料的話，就parse出 listData這個key，若沒有資料就回傳空陣列.

// 監聽與更新
sendData.addEventListener('click',addData)
// 若有點擊的話，就去做一個addData的動作
list.addEventListener('click',toggleDone)
// 若有點擊的話，就去做一個刪除的動作
updateList(data);
// 預設就先做一次更新

// 加入列表，並同步更新網頁與 localstorage
function addData(e){
    e.preventDefault();
    var txt = document.querySelector('.text').value;
    var todo = {
        content: txt
    }
    data.push(todo);
    updateList(data);
    localStorage.setItem('listData',JSON.stringify(data));
}

// 更新網頁內容，撈出資料再把它印上去
function updateList(items){
    str='';
    var len = items.length;
    for (var i=0; len>i; i++){
        str += '<li><a href="#" data-index='+i+' >刪除</a> <span>'+items[i].content+'</span></li>';
        list.innerHTML = str;
    }
}

// 刪除代辦事項
function toggleDone(e){
    e.preventDefault();
    if(e.target.nodeName !=='A'){retuen}
    var index=e.target.dataset.index;
    data.splice(index,1);
    localStorage.setItem('listData',JSON.stringify(data));
    updateList(data);
}