let data = {
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


//ボタンと検索キー
let but = document.querySelector('#kensaku');
but.addEventListener('click',tenki);

function tenki(){
  let i = document.querySelector('input[name="where"]');
  let toshi = i.value;
  console.log('都市名:'+toshi);
}


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

b.textContent = '緯度: '+data.coord.lon;
a.insertAdjacentElement('beforeend',b)
c.textContent = '経度: '+data.coord.lat;
a.insertAdjacentElement('beforeend',c);
d.textContent = '天気: '+data.weather[0].description;
a.insertAdjacentElement('beforeend',d);
let gz = document.createElement('img');
gz.setAttribute('src','kumo.png');
let mt = document.createElement('p');
mt.insertAdjacentElement('beforeend', gz);
d.insertAdjacentElement('beforeend',mt);
e.textContent = "最低気温: "+data.main.temp_min;
a.insertAdjacentElement('beforeend',e);
f.textContent = "最高気温: "+data.main.temp_max;
a.insertAdjacentElement('beforeend',f);
g.textContent = "湿度: "+data.main.humidity;
a.insertAdjacentElement('beforeend',g);
h.textContent = "風速: "+data.wind.speed;
a.insertAdjacentElement('beforeend',h);
i.textContent = "風向: "+data.wind.deg;
a.insertAdjacentElement('beforeend',i);
j.textContent = "都市名: "+data.name;
a.insertAdjacentElement('beforeend',j);
