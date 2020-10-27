function check() {
  // 表示されているすべてのメモを取得している（ビュー7行目”post”）
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
     if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    // メモをクリックした場合に実行する処理を定義している
    post.addEventListener("click", () => {
       // どのメモをクリックしたのか、カスタムデータを利用して取得している
      const postId = post.getAttribute("data-id");
      // Ajaxに必要なオブジェクト（XMLHttpRequest）を生成している
      const XHR = new XMLHttpRequest();
      //どのようなリクエストをするのか詳細指定（openでリクエストを初期化）
      XHR.open("GET", `/posts/${postId}`, true);
      //JSONでレスポンス返すよう依頼
      XHR.responseType = "json";
      // sendでリクエストを送信する
      XHR.send();
      // レスポンスを受け取った時の処理を記述する
      XHR.onload = () => {
        // レスポンスの HTTP ステータスを解析し、該当するエラーメッセージをアラートで表示するようにしている
        if (XHR.status != 200){
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
        //return nullによって、JavaScriptの処理から抜け出す（処理の終了）
          return null;
        }
        //レスポンスの受信が成功した時に呼び出すイベントハンドラー
        // レスポンスされたデータを変数itemに代入している
        const item = XHR.response.post;
        if (item.checked === true) {
          // 既読状態であれば、灰色に変わるcssを適用するためのカスタムデータを追加している
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          // 未読状態であれば、カスタムデータを削除している
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
setInterval(check, 1000);