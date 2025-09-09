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
const sayingdiv = l("businesssaying")
const upgradebizbutton = l("upgradebusinessbtn")
const shopdiv = l("shop")

const game = {
    businesses: [
        "Sneaker flipping", 
        "Self published manga",
        "Trading card shop", 
        "wcdonalds shop",
        "casino",
        "Anime figurine factory", 
        "Gaming PC factory",
        "silk path",
        "Mafia boss",
        "illuminatied organization",
    ],

    businessCaptions: [
        "You spent all of your last pocket money on shoes. returns are neglibible but enough to show off at school"
    ], 

    currentbiz: 0,
    prestige: 0,
    money: 0,
    shopUnlocked: 0, 
    shopGreyed: 1,
    stocksUnlocked: false,
    hitmanUnlocked: false,
    rivalsUnlocked: false,

    update: function() {
        switch (this.currentbiz) {
            case 0:
                this.money++
                break;
            case 1:
                this.money += 10
                break;
            case 2:
                this.money += 50
                break;
            case 3:
                this.money += 100
                break;
            case 4:
                this.money += 500
                break;
            case 5:
                this.money += 1000
                break;
            case 6:
                this.money += 5000
                break;
            case 7:
                this.money += 10000
                break;
            case 8:
                this.money += 20000
                break;
            case 9:
                this.money += 50000
                break;
            default:
                // Code to run if expression doesn't match any case
                break;
        }
    },

    logic:function() {
        
    },

    render: function() {
        moneybar.innerHTML = this.money
        businessnamediv.innerHTML = this.businesses[this.currentbiz]
        sayingdiv.innerHTML = this.businessCaptions[this.currentbiz]
    },

    loop: function() {
        this.update()
        this.logic()
        this.render()
    }
}


window.onload = function() {
    setInterval(function() {
        game.loop()
    }, 1000); // runs every 1000ms (1 second)
};