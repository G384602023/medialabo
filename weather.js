////////// 課題3-2 ここからプログラムを書こう
//コンソールへの表示
// console.log("緯度: "+data.coord.lon);
// console.log("経度: "+data.coord.lat);
// console.log("天気: "+data.weather[0].description);
// console.log("最低気温: "+data.main.temp_min);
// console.log("最高気温: "+data.main.temp_max); 
// console.log("湿度: "+data.main.humidity); 
// console.log("風速: "+data.wind.speed);
// console.log("風向: "+data.wind.deg);
// console.log("都市名: "+data.name);


//検索する要素の選択

//jsを使って結果を表示する
let r = document.querySelector('div#result');

let xy = document.createElement('div');
r.insertAdjacentElement('beforeend',xy);
let x = document.createElement('ul');
let y = document.createElement('li');
let count = 0;
xy.insertAdjacentElement('beforeend',x);
y.textContent = '世界の天気(検索結果'+count+'件)';
r.insertAdjacentElement('beforeend',x)
x.insertAdjacentElement('beforeend',y);

let a = document.createElement('ul');
r.insertAdjacentElement('beforeend',a);

function print(data){
  y.remove();
  if(count==1){
    let rm = document.querySelectorAll('li');
    for(let n of rm){
      n.remove();
    }
    count = 0;
  }
  count = count + 1;
  let y1 = document.createElement('li');
  x.insertAdjacentElement('beforeend',y1);
  y1.textContent = '世界の天気(検索結果'+count+'件)';
  let cs = document.querySelector('#ido');
  if(cs.checked){
    let b = document.createElement('li');
    a.insertAdjacentElement('beforeend',b);
    b.textContent = '緯度: '+data.coord.lon;
  }
  let cs1 = document.querySelector('#keido');
  if(cs1.checked){
    let c = document.createElement('li');
    a.insertAdjacentElement('beforeend',c);
    c.textContent = '経度: '+data.coord.lat;
  }
  let cs2 = document.querySelector('#tenki');
  if(cs2.checked){
    let d = document.createElement('li');
    a.insertAdjacentElement('beforeend',d);
    d.textContent = '天気: '+data.weather[0].description;
    let gz = document.createElement('img');
    if(data.weather[0].description=='曇りがち'){
      gz.setAttribute('src','halfkumo.png');//ここしか表示されない,1回目の検索結果の削除の方法
    }else if(data.weather[0].description=='晴天'){
      gz.setAttribute('src','kaisei.png');
    }else if(data.weather[0].description=='厚い雲'){
      gz.setAttribute('src','kumo.png');
    }else if(data.weather[0].description=='雲'){
      gz.setAttribute('src','kumori.png');
    }else if(data.weather[0].description=='小雨'){
      gz.setAttribute('src','kosame.png');
    }else if(data.weather[0].description=='霧'){
      gz.setAttribute('src','kiri.png');
    }
    let mt = document.createElement('p');
    mt.insertAdjacentElement('beforeend', gz);
    d.insertAdjacentElement('beforeend',mt);
  }
  let cs3 = document.querySelector('#min');
  if(cs3.checked){
    let e = document.createElement('li');
    a.insertAdjacentElement('beforeend',e);
    e.textContent = "最低気温: "+data.main.temp_min;
  }
  let cs4 = document.querySelector('#max');
  if(cs4.checked){
    let f = document.createElement('li');
    a.insertAdjacentElement('beforeend',f);
    f.textContent = "最高気温: "+data.main.temp_max;
  }
  let cs5 = document.querySelector('#situdo');
  if(cs5.checked){
    let g = document.createElement('li');
    a.insertAdjacentElement('beforeend',g);
    g.textContent = "湿度: "+data.main.humidity;
  }
  let cs6 = document.querySelector('#husoku');
  if(cs6.checked){
    let h = document.createElement('li');
    a.insertAdjacentElement('beforeend',h);
    h.textContent = "風速: "+data.wind.speed;
  }
  let cs7 = document.querySelector('#kazamuki');
  if(cs7.checked){
    let i = document.createElement('li');
    a.insertAdjacentElement('beforeend',i);
    i.textContent = "風向: "+data.wind.deg;
  }
  let cs8 = document.querySelector('#toshimei');
  if(cs8.checked){
    let j = document.createElement('li');
    a.insertAdjacentElement('beforeend',j);
    j.textContent = "都市名: "+data.name;
  }
  
}

let bet = document.querySelector('#sendRequest');
bet.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {

  let i = document.querySelector('select#kuni');
  let idx = i.selectedIndex;
  let os = i.querySelectorAll('option');
  let o = os.item(idx);
  let toshi = o.getAttribute('value');
  let toid = Math.floor(toshi);

	// URL を設定
  //1.検索キーのうち都市コードを取得する
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+toid+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;
  //count = count + 1;
	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  //天気を表示
  print(data);
	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}


