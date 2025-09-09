//helper functions taken from cookie clicker code
function l(which) { return document.getElementById(which) }
function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}

//global variables 
const status = l("status")
const moneybar = l("money")
const news = l("news")
const lbtn = l("leftbtn")
const rbtn = l("rightbtn")
const mainui = l("mainui")
const minigamesdiv = l("minigames")
const hitmandiv = l("hitman")
const stocksdiv = l("stocks")
const rivalsdiv = l("rivals")
const businessdiv= l("business")
const businessnamediv=l("businessname")
const businessButton=l("businessbutton")
const sayingdiv = l("businesssaying")
const upgradebizbutton = l("upgradebusinessbtn")
const shopdiv = l("shop")
const shopButtons = document.querySelectorAll('#shop button')


const game = {
    //true means the business is unlocked, false means its not. mps = money per second
    businesses: [
        {name: "Sneaker flipping", unlocked: true, mps: 1, price: 0}, 
        {name: "Self published manga", unlocked: false, mps: 10, price: 10},
        {name: "Trading card shop", unlocked: false, mps: 100, price: 10}, 
        {name: "wcdonalds shop", unlocked: false, mps: 500, price: 10},
        {name: "casino", unlocked: false, mps: 1000, price: 10},
        {name: "Anime figurine factory", unlocked: false, mps: 5000, price: 10}, 
        {name: "Gaming PC factory", unlocked: false, mps: 10000, price: 10},
        {name: "silk path", unlocked: false, mps: 20000, price: 10},
        {name: "Mafia boss", unlocked: false, mps: 50000, price: 10},
        {name: "illuminatied organization", unlocked: false, mps: 100000, price: 10},
    ],

    businessCaptions: [
        "You spent all of your last pocket money on shoes. returns are neglibible but enough to show off at school"
    ], 

    selectedBusiness: 0,
    prestige: 0,
    money: 0,
    shopUnlocked: 0, 
    shopGreyed: 1,
    stocksUnlocked: false,
    hitmanUnlocked: false,
    rivalsUnlocked: false,
    clickmultiplier: 1,
    lastIncomeTime: Date.now(),

    init:function() {

        businessButton.addEventListener("click", () => {
            //Every click by default increments by 1, multipliers added later to increase increment amount
            this.money += 1 * this.clickmultiplier
        })

        shopButtons.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                let business = game.businesses[i + 1];
                console.log(i)
                console.log(business)
                if (game.money >= business.price) {
                    if (business.unlocked === false) {
                        game.money -= business.price;
                        business.unlocked = true;
                        console.log("business bought");
                    }
                } else if (business.unlocked) {
                    //code to make button go red or give warning saying its already unlocked
                } else {
                    //not enough money
                }
            });
        });

        //Attaches event listener to each shop button, when one is clicked, buy the associated business if player has enough money
        // for (let i = 0; i < shopButtons.length; i++) {
        //     shopButtons[i].addEventListener("click", function() {
        //             let price = game.businesses[i].price
        //             let unlocked = game.businesses[i].unlocked
        //             console.log(price)
        //             if (game.money >= price && unlocked != true) {
        //                 game.money -= price
        //                 unlocked = true
        //                 console.log("business bought")
        //             } else if (unlocked == true) {
        //                 console.log("already owned")
        //             } else {
        //                 console.log("not enough money")
        //             }
        //     })
        // }
    },

    logic:function() {
        //filters to only account for unlocked businesses, and sums up mps for each of these businesses and adds to total money. 
        //The date thing is to ensure that money is updated every second as opposed to every 60ms. This makes calculations easier
        const now = Date.now();
        if (now - this.lastIncomeTime >= 1000) { // 1000ms = 1s
            this.money = this.businesses.filter(business => business.unlocked).reduce((sum, business) => sum + business.mps, this.money)
            this.lastIncomeTime = now;
        }

    },

    render: function() {
        moneybar.innerHTML = this.money
        businessnamediv.innerHTML = this.businesses[this.selectedBusiness]
        sayingdiv.innerHTML = this.businessCaptions[this.selectedBusiness]
    },

    loop: function() {
        this.logic()
        this.render()
    }
}


window.onload = function() {
    game.init()
    setInterval(function() {
        game.loop()
    }, 16); // runs every 60ms
};