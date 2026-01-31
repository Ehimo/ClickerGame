let clickPower = 1;

let zCoins = document.querySelector("#z-count");
let zCoinsParsed = parseFloat(zCoins.innerHTML);

let clickUpgradePrice = document.querySelector("#clicker-upgrade-price");
let clickUpgradePriceParsed = parseFloat(clickUpgradePrice.innerHTML);

let zpc = 10;
let zpcPrice = document.querySelector("#zpc-upgrade-price")
let zpcPriceParsed = parseFloat(zpcPrice);

function AddGold()
{
    zCoinsParsed += clickPower;
    zCoins.innerHTML = Math.round(zCoinsParsed);
}

function UpgradeClick()
{
    if(zCoinsParsed >= clickUpgradePriceParsed)
    {
        ChangeZCoinTextByPrice(10);
        clickPower += 1;
    }
}

function BuyZCP()
{
    if(zCoinsParsed >= 10)
    {
        ChangeZCoinTextByPrice(10);
        zpc += 1;
    }
}

function ChangeZCoinTextByPrice(price)
{
    zCoinsParsed -= parseFloat(price);
    zCoins.innerHTML = Math.round(zCoinsParsed);
}

setInterval(() => {
    zCoinsParsed += zpc / 10;
    zCoins.innerHTML = Math.round(zCoinsParsed);
}, 100);