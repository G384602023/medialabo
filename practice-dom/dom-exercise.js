//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let pp1 = document.querySelector('h2#ex42');
let pp2 = document.createElement('p');
pp2.textContent = '写真と都市の緯度経度のページです'; 
pp1.insertAdjacentElement('afterend', pp2);
pp2.style.textEmphasis='sesame green'; 

// 練習4-3 写真表作成プログラム
let gz = document.createElement('img');
gz.setAttribute('src','taro.png');
let mt = document.createElement('p');
let syasin = document.querySelector('div#phototable');
mt.insertAdjacentElement('beforeend', gz);
syasin.insertAdjacentElement('beforeend',mt);

let gz1 = document.createElement('img');
gz1.setAttribute('src','jiro.png');
let mt1 = document.createElement('p');
mt1.insertAdjacentElement('beforeend',gz1);
syasin.insertAdjacentElement('beforeend',mt1);

let gz2 = document.createElement('img');
gz2.setAttribute('src','hanako.png');
let mt2 = document.createElement('p');
mt2.insertAdjacentElement('beforeend',gz2);
syasin.insertAdjacentElement('beforeend',mt2);

// 練習4-4 箇条書き削除プログラム

let rm = document.querySelectorAll('ul#location > li');

for(let n of rm){
    n.remove();
}
// 練習4-5 箇条書き追加プログラム
let ka = document.querySelector('ul#location');

for(let n of data){
  let dat = document.createElement('li'); 
  dat.textContent = n.name+' ... 緯度:'+n.lat+', 経度:'+n.lng;
  ka.insertAdjacentElement('beforeend',dat);
} 
