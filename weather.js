let data = {//検索ができるようになったら、dataを削除する
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

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

//jsを使って結果を表示する
let r = document.querySelector('div#result');
let x = document.createElement('ul');
let y = document.createElement('li');
let z = 1;
y.textContent = '世界の天気(検索結果'+z+'件)';
r.insertAdjacentElement('beforeend',x);
x.insertAdjacentElement('beforeend',y);

let a = document.createElement('ul');
let b = document.createElement('li');
let c = document.createElement('li');
let d = document.createElement('li');
let e = document.createElement('li');
let f = document.createElement('li');
let g = document.createElement('li');
let h = document.createElement('li');
let i = document.createElement('li');
let j = document.createElement('li');

r.insertAdjacentElement('beforeend',a);

a.insertAdjacentElement('beforeend',b)
a.insertAdjacentElement('beforeend',c);
a.insertAdjacentElement('beforeend',d);

a.insertAdjacentElement('beforeend',e);
a.insertAdjacentElement('beforeend',f);
a.insertAdjacentElement('beforeend',g);
a.insertAdjacentElement('beforeend',h);
a.insertAdjacentElement('beforeend',i);
a.insertAdjacentElement('beforeend',j);

//print(data);

function print(data){
  b.textContent = '緯度: '+data.coord.lon;
  c.textContent = '経度: '+data.coord.lat;
  d.textContent = '天気: '+data.weather[0].description;
  let gz = document.createElement('img');
  gz.setAttribute('src','kumo.png');//写真が表示されない
  let mt = document.createElement('p');
  mt.insertAdjacentElement('beforeend', gz);
  d.insertAdjacentElement('beforeend',mt);
  e.textContent = "最低気温: "+data.main.temp_min;
  f.textContent = "最高気温: "+data.main.temp_max;
  g.textContent = "湿度: "+data.main.humidity;
  h.textContent = "風速: "+data.wind.speed;
  i.textContent = "風向: "+data.wind.deg;
  j.textContent = "都市名: "+data.name;
}



let bet = document.querySelector('#sendRequest');
bet.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {

  let i = document.querySelector('input[name="where"]');
  let toshi = i.value;
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


