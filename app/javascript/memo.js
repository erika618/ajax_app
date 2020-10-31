function memo() {
 const submit = document.getElementById("submit");
 submit.addEventListener("click", (e) => {
   const formData = new FormData(document.getElementById("form"));
   //FormDataとは、フォームに入力された値を取得できるオブジェクト
   const XHR = new XMLHttpRequest();
   XHR.open("POST", "/posts", true);
   //trueは非同期通信のオンオフ
   XHR.responseType = "json";
   XHR.send(formData);
   //入力された情報をコントローラに託すね
   XHR.onload = () => {
     if (XHR.status != 200) {
       alert(`Error ${XHR.status}: ${XHR.statusText}`);
       return null;
     }
     const item = XHR.response.post;
     //レスポンスとして返却されたメモのレコードデータを取得
     const list = document.getElementById("list");
     //描画する親要素のlistの要素を取得
     const formText = document.getElementById("content");
     //2投稿目以降、34行目にあるように入力フォームをリセットしたいので変数に定義
     const HTML = `
       <div class="post" data-id=${item.id}>
         <div class="post-date">
           投稿日時：${item.created_at}
         </div>
         <div class="post-content">
         ${item.content}
         </div>
       </div>`;
     list.insertAdjacentHTML("afterend", HTML);
     //listという要素に対して変数HTMLを第一引数の指定の場所に追加
     formText.value = "";
   };
   e.preventDefault();
   //処理の重複を防ぐ（今回はこの全体がsubmitを押した時に行われる非同期通信でのアクションのため）
 });
}
window.addEventListener("load", memo);