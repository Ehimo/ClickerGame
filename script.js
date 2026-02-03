const priceMulty = 1.488 / 3;

let clickPower = 1;

let zCoins = document.querySelector("#z-count");
let zCoinsParsed = parseFloat(zCoins.innerHTML);

let clickPrice = document.querySelector("#clicker-upgrade-price");
let clickPriceParsed = parseFloat(clickPrice.innerHTML);
let clickerCount = document.querySelector("#clicker-item-count");
let clickerCountParsed = parseFloat(clickerCount.innerHTML);

function UpgradeClick()
{
    if(zCoinsParsed >= clickPriceParsed)
    {
        ChangeZCoinTextByPrice(clickPriceParsed);
        clickPower += 1;
        clickerCountParsed += 1;
        clickerCount.innerHTML = clickerCountParsed;
        clickPriceParsed += Math.round((clickPriceParsed + clickerCountParsed)  * priceMulty)
        clickPrice.innerHTML = clickPriceParsed;
    }
}


let zpc = 0;

let televPrice = document.querySelector("#telev-upgrade-price")
let televPriceParsed = parseFloat(televPrice.innerHTML);
let televCount = document.querySelector("#telev-item-count");
let televCountParsed = parseFloat(televCount.innerHTML);
let televZPCPerItem = 5;

function BuyTelev()
{
    if(zCoinsParsed >= televPriceParsed)
    {
        ChangeZCoinTextByPrice(televPriceParsed);
        zpc += televZPCPerItem;
        televCountParsed += 1;
        televCount.innerHTML = televCountParsed;
        televPriceParsed += Math.round((televPriceParsed + televCountParsed)  * priceMulty);
        televPrice.innerHTML = televPriceParsed;
    }
}

let intrPrice = document.querySelector("#intr-upgrade-price")
let intrPriceParsed = parseFloat(intrPrice.innerHTML);
let intrCount = document.querySelector("#intr-item-count");
let intrCountParsed = parseFloat(intrCount.innerHTML);
let intrZPCPerItem = 15;

function BuyInter()
{
    if(zCoinsParsed >= intrPriceParsed)
    {
        ChangeZCoinTextByPrice(intrPriceParsed);
        zpc += televZPCPerItem;
        intrCountParsed += 1;
        intrCount.innerHTML = intrCountParsed;
        intrPriceParsed += Math.round((intrPriceParsed + intrCountParsed)  * priceMulty)
        intrPrice.innerHTML = intrPriceParsed;
    }
}

let botsPrice = document.querySelector("#bots-upgrade-price")
let botsPriceParsed = parseFloat(botsPrice.innerHTML);
let botsCount = document.querySelector("#bots-item-count");
let botsCountParsed = parseFloat(botsCount.innerHTML);
let botsZPCPerItem = 50;

function BuyBots()
{
    if(zCoinsParsed >= botsPriceParsed)
    {
        ChangeZCoinTextByPrice(botsPriceParsed);
        zpc += botsZPCPerItem;
        botsCountParsed += 1;
        botsCount.innerHTML = botsCountParsed;
        botsPriceParsed += Math.round((botsPriceParsed + botsCountParsed)  * priceMulty)
        botsPrice.innerHTML = botsPriceParsed;
    }
}

let veraPrice = document.querySelector("#vera-upgrade-price")
let veraPriceParsed = parseFloat(veraPrice.innerHTML);
let veraCount = document.querySelector("#vera-item-count");
let veraCountParsed = parseFloat(veraCount.innerHTML);
let veraZPCPerItem = 100;

function BuyVera()
{
    if(zCoinsParsed >= veraPriceParsed)
    {
        ChangeZCoinTextByPrice(veraPriceParsed);
        zpc += veraZPCPerItem;
        veraCountParsed += 1;
        veraCount.innerHTML = veraCountParsed;
        veraPriceParsed += Math.round((veraPriceParsed + veraCountParsed)  * priceMulty)
        veraPrice.innerHTML = veraPriceParsed;
    }
}

let dnrPrice = document.querySelector("#dnr-upgrade-price")
let dnrPriceParsed = parseFloat(dnrPrice.innerHTML);
let dnrCount = document.querySelector("#dnr-item-count");
let dnrCountParsed = parseFloat(dnrCount.innerHTML);
let dnrZPCPerItem = 200;

function BuyDNR()
{
    if(zCoinsParsed >= dnrPriceParsed)
    {
        ChangeZCoinTextByPrice(dnrPriceParsed);
        zpc += dnrZPCPerItem;
        dnrCountParsed += 1;
        dnrCount.innerHTML = dnrCountParsed;
        dnrPriceParsed += Math.round((dnrPriceParsed + dnrCountParsed)  * priceMulty)
        dnrPrice.innerHTML = dnrPriceParsed;
    }
}

let svoPrice = document.querySelector("#svo-upgrade-price")
let svoPriceParsed = parseFloat(svoPrice.innerHTML);
let svoCount = document.querySelector("#svo-item-count");
let svoCountParsed = parseFloat(svoCount.innerHTML);
let svoZPCPerItem = 500;

function BuySVO()
{
    if(zCoinsParsed >= svoPriceParsed)
    {
        ChangeZCoinTextByPrice(svoPriceParsed);
        zpc += svoZPCPerItem;
        svoCountParsed += 1;
        svoCount.innerHTML = svoCountParsed;
        svoPriceParsed += Math.round((svoPriceParsed + svoCountParsed)  * priceMulty)
        svoPrice.innerHTML = svoPriceParsed;
    }
}

let rusiPrice = document.querySelector("#rusi-upgrade-price")
let rusiPriceParsed = parseFloat(rusiPrice.innerHTML);
let rusiCount = document.querySelector("#rusi-item-count");
let rusiCountParsed = parseFloat(rusiCount.innerHTML);
let rusiZPCPerItem = 1500;

function BuyRusi()
{
    if(zCoinsParsed >= rusiPriceParsed)
    {
        ChangeZCoinTextByPrice(rusiPriceParsed);
        zpc += rusiZPCPerItem;
        rusiCountParsed += 1;
        rusiCount.innerHTML = rusiCountParsed;
        rusiPriceParsed += Math.round((rusiPriceParsed + rusiCountParsed)  * priceMulty)
        rusiPrice.innerHTML = rusiPriceParsed;
    }
}

let oreshPrice = document.querySelector("#oresh-upgrade-price")
let oreshPriceParsed = parseFloat(oreshPrice.innerHTML);
let oreshCount = document.querySelector("#oresh-item-count");
let oreshCountParsed = parseFloat(oreshCount.innerHTML);
let oreshZPCPerItem = 3000;

function BuyOresh()
{
    if(zCoinsParsed >= oreshPriceParsed)
    {
        ChangeZCoinTextByPrice(oreshPriceParsed);
        zpc += oreshZPCPerItem;
        oreshCountParsed += 1;
        oreshCount.innerHTML = oreshCountParsed;
        oreshPriceParsed += Math.round((oreshPriceParsed + oreshCountParsed)  * priceMulty)
        oreshPrice.innerHTML = oreshPriceParsed;
    }
}

let vpPrice = document.querySelector("#vp-upgrade-price")
let vpPriceParsed = parseFloat(vpPrice.innerHTML);
let vpCount = document.querySelector("#vp-item-count");
let vpCountParsed = parseFloat(vpCount.innerHTML);
let vpZPCPerItem = 5000 + 1488;

function BuyVP()
{
    if(zCoinsParsed >= vpPriceParsed)
    {
        ChangeZCoinTextByPrice(vpPriceParsed);
        zpc += vpZPCPerItem;
        vpCountParsed += 1;
        vpCount.innerHTML = vpCountParsed;
        vpPriceParsed += Math.round((vpPriceParsed + vpCountParsed)  * priceMulty)
        vpPrice.innerHTML = vpPriceParsed;
    }
}
function AddZ()
{
    zCoinsParsed += clickPower;
    zCoins.innerHTML = Math.round(zCoinsParsed);
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