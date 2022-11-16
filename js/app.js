//日付の取得
var first = new Date();
let year = first.getFullYear();
let month = first.getMonth() + 1;
let day = first.getDate();
const firstday = month + "/" + day; //今日の日付
const secondday = month + "/" + (day + 1); //明日の日付
const thirdday = month + "/" + (day + 2); //明後日の日付
const fourthdday = month + "/" + (day + 3); //4日後の日付
const fifthdday = month + "/" + (day + 4); //5日後の日付
const sixthdday = month + "/" + (day + 5); //6日後の日付
const seventhdday = month + "/" + (day + 6); //7日後の日付
//1週間の配列
const weekseven = [firstday, secondday, thirdday, fourthdday, fifthdday, sixthdday, seventhdday];

//日付を表示
const z = document.getElementById("firstday");
z.innerHTML = firstday;
const zz = document.getElementById("secondday");
zz.innerHTML = secondday;
const zzz = document.getElementById("thirdday");
zzz.innerHTML = thirdday;
const zzzz = document.getElementById("fourthdday");
zzzz.innerHTML = fourthdday;
const zzzzz = document.getElementById("fifthdday");
zzzzz.innerHTML = fifthdday;
const zzzzzz = document.getElementById("sixthdday");
zzzzzz.innerHTML = sixthdday;
const zzzzzzz = document.getElementById("seventhdday");
zzzzzzz.innerHTML = seventhdday;

//ローカルストレージ
$(function () {
  // 削除処理
  $("#clear").on("click", function () {
    localStorage.clear();
    showList();
  });

  // 保存処理
  $("#save").on("click", function () {
    var storage = localStorage;
    const who = $("[name=example]").val();
    let date = document.querySelector(`input[type='date'][name='date']`);
    let bi = date.value;
    let time = document.querySelector('input[type="time"]');
    let zikan = time.value;
    const title = $("#scheduleTitle").val();
    const hairetu = {
      who: who,
      bi: bi,
      title: title,
      zikan: zikan,
    };
    storage.setItem(localStorage.length.toString(), JSON.stringify(hairetu));
    location.reload();
  });
  showList();
});
// 保存した情報を表示す | ローカルストレージ
function showList() {
  for (let i = 0; i < localStorage.length; i++) {
    const storage = localStorage.getItem(localStorage.key(i));
    const js = JSON.parse(storage);
    // 取得してきた情報を配列にする
    const a = js.who;
    const b = js.bi;
    const c = js.title;
    const d = js.zikan;
    const newa = {
      who: a,
      bi: b,
      title: c,
      zikan: d,
    };
    console.log(newa);

    //日付の取得
    var first = new Date();
    let year = first.getFullYear();
    let month = first.getMonth() + 1;
    let day = first.getDate();
    const firstday = year + "-" + month + "-" + day; //今日の日付
    const secondday = year + "-" + month + "-" + (day + 1); //明日の日付
    const thirdday = year + "-" + month + "-" + (day + 2); //明後日の日付
    const fourthdday = year + "-" + month + "-" + (day + 3); //4日後の日付
    const fifthdday = year + "-" + month + "-" + (day + 4); //5日後の日付
    const sixthdday = year + "-" + month + "-" + (day + 5); //6日後の日付
    const seventhdday = year + "-" + month + "-" + (day + 6); //7日後の日付
    //1週間の配列
    const weekseven = [firstday, secondday, thirdday, fourthdday, fifthdday, sixthdday, seventhdday];

    //PAPAゾーン
    if (js.bi === weekseven[0] && js.who === "papa") {
      const k = document.getElementById("papa-hyouzi-firstday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[1] && js.who === "papa") {
      const k = document.getElementById("papa-hyouzi-secondday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[2] && js.who === "papa") {
      const k = document.getElementById("papa-hyouzi-thirdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[3] && js.who === "papa") {
      const k = document.getElementById("papa-hyouzi-fourthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[4] && js.who === "papa") {
      const k = document.getElementById("hyouzi-fifthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[5] && js.who === "papa") {
      const k = document.getElementById("papa-hyouzi-sixthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[6] && js.who === "papa") {
      const k = document.getElementById("papa-hyouzi-seventhdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    }

    //MAMAゾーン
    if (js.bi === weekseven[0] && js.who === "mama") {
      const k = document.getElementById("mama-hyouzi-firstday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[1] && js.who === "mama") {
      const k = document.getElementById("mama-hyouzi-secondday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[2] && js.who === "mama") {
      const k = document.getElementById("mama-hyouzi-thirdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[3] && js.who === "mama") {
      const k = document.getElementById("mama-hyouzi-fourthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[4] && js.who === "mama") {
      const k = document.getElementById("mama-hyouzi-fifthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[5] && js.who === "mama") {
      const k = document.getElementById("mama-hyouzi-sixthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[6] && js.who === "mama") {
      const k = document.getElementById("mama-hyouzi-seventhdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    }

    //NANAMIゾーン
    if (js.bi === weekseven[0] && js.who === "nanami") {
      const k = document.getElementById("nanami-hyouzi-firstday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[1] && js.who === "nanami") {
      const k = document.getElementById("nanami-hyouzi-secondday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[2] && js.who === "nanami") {
      const k = document.getElementById("nanami-hyouzi-thirdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[3] && js.who === "nanami") {
      const k = document.getElementById("nanami-hyouzi-fourthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[4] && js.who === "nanami") {
      const k = document.getElementById("nanami-fifthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[5] && js.who === "nanami") {
      const k = document.getElementById("nanami-hyouzi-sixthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[6] && js.who === "nanami") {
      const k = document.getElementById("nanami-hyouzi-seventhdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    }

    //SHIHOゾーン
    if (js.bi === weekseven[0] && js.who === "shiho") {
      const k = document.getElementById("shiho-hyouzi-firstday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[1] && js.who === "shiho") {
      const k = document.getElementById("shiho-hyouzi-secondday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[2] && js.who === "shiho") {
      const k = document.getElementById("shiho-hyouzi-thirdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[3] && js.who === "shiho") {
      const k = document.getElementById("shiho-hyouzi-fourthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[4] && js.who === "shiho") {
      const k = document.getElementById("shiho-fifthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[5] && js.who === "shiho") {
      const k = document.getElementById("shiho-hyouzi-sixthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[6] && js.who === "shiho") {
      const k = document.getElementById("shiho-hyouzi-seventhdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    }

    //KAHOゾーン
    if (js.bi === weekseven[0] && js.who === "kaho") {
      const k = document.getElementById("kaho-hyouzi-firstday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[1] && js.who === "kaho") {
      const k = document.getElementById("kaho-hyouzi-secondday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[2] && js.who === "kaho") {
      const k = document.getElementById("kaho-hyouzi-thirdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[3] && js.who === "kaho") {
      const k = document.getElementById("kaho-hyouzi-fourthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[4] && js.who === "kaho") {
      const k = document.getElementById("kaho-fifthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[5] && js.who === "kaho") {
      const k = document.getElementById("kaho-hyouzi-sixthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[6] && js.who === "kaho") {
      const k = document.getElementById("kaho-hyouzi-seventhdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    }

    //YUNOゾーン
    if (js.bi === weekseven[0] && js.who === "yuno") {
      const k = document.getElementById("yuno-hyouzi-firstday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[1] && js.who === "yuno") {
      const k = document.getElementById("yuno-hyouzi-secondday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[2] && js.who === "yuno") {
      const k = document.getElementById("yuno-hyouzi-thirdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[3] && js.who === "yuno") {
      const k = document.getElementById("yuno-hyouzi-fourthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[4] && js.who === "yuno") {
      const k = document.getElementById("yuno-hyouzi-fifthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[5] && js.who === "yuno") {
      const k = document.getElementById("yuno-hyouzi-sixthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[6] && js.who === "yuno") {
      const k = document.getElementById("yuno-hyouzi-seventhdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    }

    //AYUゾーン
    if (js.bi === weekseven[0] && js.who === "ayu") {
      const k = document.getElementById("ayu-hyouzi-firstday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[1] && js.who === "ayu") {
      const k = document.getElementById("ayu-hyouzi-secondday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[2] && js.who === "ayu") {
      const k = document.getElementById("ayu-hyouzi-thirdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[3] && js.who === "ayu") {
      const k = document.getElementById("ayu-hyouzi-fourthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[4] && js.who === "ayu") {
      const k = document.getElementById("ayu-hyouzi-fifthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[5] && js.who === "ayu") {
      const k = document.getElementById("ayu-hyouzi-sixthdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    } else if (js.bi === weekseven[6] && js.who === "ayu") {
      const k = document.getElementById("ayu-hyouzi-seventhdday");
      // 繰り返し
      const kk = document.createElement("ul");
      kk.classList.add("yotei");
      const pp = document.createElement("p");
      pp.innerHTML = js.title;
      pp.classList.add("yotei-title");
      const ppp = document.createElement("p");
      ppp.innerHTML = js.zikan;
      ppp.classList.add("yotei-zikan");
      k.appendChild(kk);
      kk.appendChild(pp);
      kk.appendChild(ppp);
      // 繰り返し
    }
  }
}

//モーダル
const modalArea = document.getElementById("modalArea");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modalBg = document.getElementById("modalBg");
const toggle = [openModal, closeModal, modalBg];

for (let i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener(
    "click",
    function () {
      modalArea.classList.toggle("is-show");
    },
    false
  );
}
