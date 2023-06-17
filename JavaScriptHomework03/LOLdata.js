
let heroArray = [];
let container;
let btnCreateHeroArray, btnListHero, btnTableHero;

window.onload = function () {
    container = document.querySelector("#container");
    btnCreateHeroArray = document.getElementById("createhero");
    btnListHero = document.getElementById("listhero");
    btnTableHero = document.getElementById("tablehero");

    btnCreateHeroArray.addEventListener("click", function () {
        //alert("從DOM建立英雄人物陣列資料後清除container");
        //1.從DOM建立英雄人物資料
        let card = document.querySelectorAll(".card")

        card.forEach(x => {
            let title = x.querySelector('.card-title')
            let txt = x.querySelector('.card-text')
            let pic = x.querySelector('.card-img-top')
            let obj = {
                 id : title.innerText,
                name : txt.innerText,
                pic_src : pic.src
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

        alert("以表格呈現英雄人物資料！");
    });
}
