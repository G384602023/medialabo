// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
let k = document.querySelector('span#kaisu');
let a = document.querySelector('span#answer'); 
let str = document.querySelector('p#result');
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let but = document.querySelector('#kaito');
but.addEventListener('click',hantei);



// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  
  let i = document.querySelector('input[name="yosou"]');
  let yosou = i.value;
  let yoso = Math.floor(yosou); 

  kaisu = kaisu + 1;
  // console.log(kaisu+'回目の予想:'+yoso);
  // if((kaisu >= 4)){
  //   console.log('答えは'+kotae+'でした.すでにゲームは終わっています.');
  // }else if(kotae === yoso){
  //   console.log('正解です.おめでとう!');
  // }else{
  //   if(kaisu === 3){
  //     console.log('まちがい.残念でした答えは'+kotae+'です.');
  //   }else if(kaisu<3 && kotae>yoso){
  //     console.log('まちがい.答えはもっと大きいですよ.');
  //   }else if(kaisu<3 && kotae<yoso){
  //     console.log('まちがい.答えはもっと小さいですよ.');
  //   }
  // }
  k.textContent = kaisu;
  a.textContent = yoso;
  if((kaisu >= 4)){
    str.textContent = '答えは'+kotae+'でした.すでにゲームは終わっています.';
  }else if(kotae === yoso){
    str.textContent = '正解です.おめでとう!';
  }else{
    if(kaisu === 3){
      str.textContent = 'まちがい.残念でした答えは'+kotae+'です.';
    }else if(kaisu<3 && kotae>yoso){
      str.textContent = 'まちがい.答えはもっと大きいですよ.';
    }else if(kaisu<3 && kotae<yoso){
      str.textContent = 'まちがい.答えはもっと小さいですよ.';
    }
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

}