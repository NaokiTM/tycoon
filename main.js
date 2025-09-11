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
const prestigebar = l("prestigebar")
const iconimg = l("iconimg")
const shopButtons = document.querySelectorAll('#shop button')
const TICK_RATE = 1000 / 60; // 16.67ms per frame (~60fps)


const game = {
    //true means the business is unlocked, false means its not. mps = money per second
    businesses: [
        {name: "Sneaker flipping", unlocked: true, mps: 1, price: 0, iconpath: "./assets/sneakers.png"}, 
        {name: "Manga studio", unlocked: false, mps: 10, price: 10, iconpath: "./assets/manga.png"},
        {name: "Trading card shop", unlocked: false, mps: 100, price: 10, iconpath: "./assets/cards.png"}, 
        {name: "wcdonalds franchise", unlocked: false, mps: 500, price: 10, iconpath: "./assets/burger.png"},
        {name: "casino", unlocked: false, mps: 1000, price: 10, iconpath: "./assets/casino.png"},
        {name: "Anime figurine factory", unlocked: false, mps: 5000, price: 10, iconpath: "./assets/action.png"}, 
        {name: "Gaming PC factory", unlocked: false, mps: 10000, price: 10, iconpath: "./assets/pc.png"},
        {name: "silk path", unlocked: false, mps: 20000, price: 10, iconpath: "./assets/silk.png"},
        {name: "Mafia boss", unlocked: false, mps: 50000, price: 10, iconpath: "./assets/mafia.png"},
        {name: "illuminatied organization", unlocked: false, mps: 100000, price: 10, iconpath: "./assets/illuminati.png"},
    ],

    businessCaptions: [
        "You spent all of your last pocket money on shoes. returns are neglibible but enough to show off at school"
    ], 

    selectedBusiness: 0,
    prestige: 0,
    money: 0,
    shopUnlocked: 0, //The number of businesses unlocked (or rather what businesses have been unlocked up to)
    shopGreyed: 1,
    stocksUnlocked: false,
    hitmanUnlocked: false,
    rivalsUnlocked: false,
    clickmultiplier: 1,
    lastIncomeTime: Date.now(),

    scroll:function(direction) {
        let nextBiz = this.selectedBusiness + 1
        let prevBiz = this.selectedBusiness - 1

        if (direction === "r") {
            if (nextBiz >= this.businesses.length) {
                this.selectedBusiness = 0
            } else if (this.shopUnlocked >= nextBiz) {
                this.selectedBusiness++
            }
        } else if (direction === "l") {
            if (prevBiz < 0) {
                if (this.shopUnlocked === 9) {
                    this.selectedBusiness = this.businesses.length - 1
                }
            } else {
                this.selectedBusiness--
            }
        } else {
            console.log("argument in scroll function is wrong")
        }
    },

    //assume everYTHING IS BOUGHT IN ORDER

    init:function() {

        businessButton.addEventListener("click", () => {
            //Every click by default increments by 1, multipliers added later to increase increment amount
            this.money += 1 * this.clickmultiplier
        })

        lbtn.addEventListener("click", () => {
            this.scroll("l")
        })

        rbtn.addEventListener("click", () => {
            this.scroll("r")
        })

        shopButtons.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                let business = game.businesses[i + 1];
                if (game.money >= business.price) {
                    if (business.unlocked === false) {
                        game.money -= business.price;
                        business.unlocked = true;
                        this.shopUnlocked = i + 1
                        btn.style.backgroundColor = "red"
                        console.log("business bought");
                    }
                } else if (business.unlocked) {
                    //code to make button go red or give warning saying its already unlocked
                } else {
                    //not enough money
                }
            });
        });
    },

    logic:function() {
        //filters to only account for unlocked businesses, and sums up mps for each of these businesses and adds to total money. 
        //The date thing is to ensure that money is updated every second as opposed to every 60ms. This makes calculations easier
        //how to make it so it updates every 16ms, 
        let mpt = this.businesses
        .filter(business => business.unlocked)   //gathers all unlocked businesses
        .reduce((sum, business) => sum + business.mps, 0)  //adds all their passive income to generate the amount of money per tick

        this.money += mpt * (TICK_RATE / 1000)  //truncating this leads to the decimal being cut off, meaning if earning less than 1 money per tick, it never adds up (chatgpt)

    },

    render: function() {
        moneybar.innerHTML = "$" + Math.trunc(this.money)  //instead truncate here to avoid interfering with decimals and only hide from the player
        prestigebar.innerHTML = this.prestige
        businessnamediv.innerHTML = this.businesses[this.selectedBusiness].name
        iconimg.src = this.businesses[this.selectedBusiness].iconpath
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