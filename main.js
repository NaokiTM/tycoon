//helper functions taken from cookie clicker code
function l(which) { return Document.getElementById(which) }
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
const sayingdiv = l("businesssaying")
const upgradebizbutton = l("upgradebusinessbtn")
const shopdiv = l("shop")

const game = {
    businesses: [
        "Sneaker flipping", 
        "self published manga",
        "Trading card shop", 
        "wcdonalds shop",
        "casino",
        "Anime figurine factory", 
        "Gaming PC factory",
        "silk path",
        "Mafia boss",
        "illuminatied organization",
    ],
    currentbiz: businesses[0],
    prestige: 0,
    money: 0,
    shopUnlocked: 0, 
    shopGreyed: 1,
    stocksUnlocked: false,
    hitmanUnlocked: false,
    rivalsUnlocked: false,

    logic: function() {

    },

    render: function() {

    },

    loop: function() {
        this.logic()
        this.render()
        requestAnimationFrame(this.loop.bind(this));
    }
}


window.onload = function() {
    game.init();
};