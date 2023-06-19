
let heroArray = [];
let container;
let btnCreateHeroArray, btnListHero, btnTableHero;

window.onload = function () {
    container = document.querySelector("#container");
    btnCreateHeroArray = document.getElementById("createhero");
    btnListHero = document.getElementById("listhero");
    btnTableHero = document.getElementById("tablehero");
    btnCardHero = document.getElementById("cardhero");

    btnCreateHeroArray.addEventListener("click", function () {
        //alert("從DOM建立英雄人物陣列資料後清除container");
        //1.從DOM建立英雄人物資料
        let card = document.querySelectorAll(".card")

        card.forEach(x => {
            let title = x.querySelector('.card-title')
            let txt = x.querySelector('.card-text')
            let pic = x.querySelector('.card-img-top')
            let obj = {
                id: title.innerText,
                name: txt.innerText,
                pic_src: pic.src
            };
            heroArray.push(obj)

        });


        alert("從DOM建立英雄人物陣列資料成功！");


        //2.清除container
        document.querySelector("#container").innerHTML = "";
    });

    btnListHero.addEventListener("click", function () {
        if (heroArray.length == 0) {
            alert("請先建立陣列資料");
            return;
        }
        document.querySelector("#container").innerHTML = "";
        heroArray.forEach(x => {
            // container.append(`${x.id},${x.name},${x.pic_src}`)
            container.innerHTML += '<br>' + JSON.stringify(x)
        })
        alert("以文字迭代英雄人物資料！");

    });

    btnTableHero.addEventListener("click", function () {
        if (heroArray.length == 0) {
            alert("請先建立陣列資料");
            return;
        }
        document.querySelector("#container").innerHTML = "";
        let table = document.createElement('table')
        table.setAttribute("class", "table table-bordered table-striped table-dark");
        let thead = document.createElement('thead')
        let tbody = document.createElement('tbody')
        let title = ["編號、英文名、中文名", "說明", "圖片"]
        //(1)
        let theadTR = document.createElement("tr");
        //(2)建立th,設定資料,th加入tr
        title.forEach((title) => {
            let th = document.createElement("th");
            th.innerText = title;
            theadTR.append(th);
        });
        thead.append(theadTR);
        table.append(thead);
        container.append(table);

        let heroArrayData = [];
        heroArray.forEach(object => {
            let values = Object.values(object);
            heroArrayData.push(values)
        })
        heroArrayData.forEach(object => {
            let tr = document.createElement('tr')
            for (let i = 0; i < object.length - 1; i++) {
                let td = document.createElement('td')
                td.innerText = object[i];
                tr.append(td)
            }
            let td = document.createElement('td')
            let img = document.createElement('img')
            img.src = object[length+1];
            img.width = 200
            td.append(img)
            tr.append(td)
            tbody.append(tr)
        })
        table.append(tbody);




        alert("以表格呈現英雄人物資料！");
    });
    btnCardHero.addEventListener("click", function () {
        if (heroArray.length == 0) {
            alert("請先建立陣列資料");
            return;
        }
        document.querySelector("#container").innerHTML = "";
        function getCardString(title, price, url) {
            let cardString = `
            <div class="card" style="width: 18rem;">
                <img src="${url}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">NT ${price}</p>
                </div>
            </div>
            `;
            return cardString
        }
        heroArray.forEach(x => {
            container.innerHTML += getCardString(x.id, x.name, x.pic_src)
        })

        alert("以卡片呈現英雄人物資料！");
    });
}




