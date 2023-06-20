// min以上、maxよりも小さい整数を返す(maxを含まない)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// 日時の文字列を返す
function getDateStr(){
    const now = new Date();
    // var year = now.getYear(); // 年
    const year = now.getFullYear();
    let month = now.getMonth() + 1; // 月
    let day = now.getDate(); // 日
    // var week = weeks[ now.getDay() ]; // 曜日
    let hour = now.getHours(); // 時
    let minute = now.getMinutes(); // 分
    let sec = now.getSeconds(); // 秒

    // if(year < 2000) { year += 1900; }

    // 数値が1桁の場合、頭に0を付けて2桁で表示する指定
    if(month < 10) { month = "0" + month; }
    if(day < 10) { day = "0" + day; }
    if(hour < 10) { hour = "0" + hour; }
    if(minute < 10) { minute = "0" + minute; }
    if(sec < 10) { sec = "0" + sec; }

    return year + '-' + month + '-' + day + '-' + hour + ':' + minute + ':' + sec;
}

// numをcount個含んだ配列を返す
function getSameNumArray(num, count){
    const res = []
    for (let i = 0; i < count; i++) res.push(num)
    return res
}

// startから始まってcount個の連続した整数の配列を返す
// https://qiita.com/suin/items/1b39ce57dd660f12f34b
function getSerialArray(start, count){
    return [...Array(count)].map((_, i) => i + start)
}

// 数値の配列のなかで最大値を返す
function max_of_array(arr){
    return arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
}

// 数値の配列のなかで最小値を返す
function min_of_array(arr){
    return arr.reduce(function(a, b) {
        return Math.min(a, b);
    });
}

// './img/pen.png' のような文字列を引数として受け取り、pen.pngを返す
function getFileName(path){
    // const name1 = path.slice(path.lastIndexOf('/')); // 末尾から/を探してそれ以降を抽出
    const name2 = path.split('/')
    // console.log(name1)
    // console.log(name2)

    return name2[name2.length - 1];

}

// '<img src = "./img/pen.png">'  のような文字列を引数として受け取り、pen.pngを返す
// '<img src = "./img/pen.png" class="red">' のような場合も適切に動作するが、srcとclassの位置が逆だと不具合があるので要注意。
function getFileName_from_imgTag(img_tag){
    // console.log(img_tag)
    const filename_path = img_tag.split('"')
    return getFileName(filename_path[1]); 
    // インデックス0 ---->  '<img src = '
    // インデックス2 ----> '>'
}