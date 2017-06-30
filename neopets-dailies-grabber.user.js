// ==UserScript==
// @name Neopets Dailies Grabber
// @author Vikram Kohli
// @description Grabs your dailies for you on www.neopets.com upon visiting the site! Dailies included are the Giant Omelette and Jelly, Bank Interest, Anchor Management,
// the Fruit Machine, Coltzan's Shrine, Underwater Fishing, the Grundo Plushie, the Healing Fairie, the Shop of Offers Slorg, Monthly Freebies, Apple Bobbing and the Deserted Tomb. 
// Upon completion the script brings you to your inventory so you can peruse your newly acquired loot.
// @version 1.3
// @match http://www.neopets.com/*
// @require http://code.jquery.com/jquery-3.2.1.js
// ==/UserScript==

function main()
{	
	if (window.location.href==="http://www.neopets.com/" || window.location.href==="http://www.neopets.com/index.phtml")
	{
		GiantOmelette();
	}
	else if (window.location.href==="http://www.neopets.com/prehistoric/omelette.phtml")
	{
		GiantJelly();
	}
	else if (window.location.href==="http://www.neopets.com/jelly/jelly.phtml")
	{
		BankInterest();
	}
	else if (window.location.href==="http://www.neopets.com/bank.phtml")
	{
		AnchorManagement();
	}
	else if (window.location.href==="http://www.neopets.com/pirates/anchormanagement.phtml")
	{
		FruitMachine();
	}
	else if (window.location.href==="http://www.neopets.com/desert/fruit/index.phtml")
	{
		ColtzanShrine();
	}
	else if (window.location.href==="http://www.neopets.com/desert/shrine.phtml")
	{
		UnderwaterFishing();
	}
	else if (window.location.href==="http://www.neopets.com/water/fishing.phtml")
	{
		TDMBGPOP();
	}
	else if (window.location.href==="http://www.neopets.com/faerieland/tdmbgpop.phtml")
	{
		HealingSprings();
	}
	else if (window.location.href==="http://www.neopets.com/faerieland/springs.phtml")
	{
		ShopOfOffers();
	}
	else if (window.location.href==="http://www.neopets.com/shop_of_offers.phtml")
	{
		MonthlyFreebies();
	}
	else if (window.location.href==="http://www.neopets.com/freebies/index.phtml")
	{
		AppleBobbing();
	}
	else if (window.location.href==="http://www.neopets.com/halloween/applebobbing.phtml?bobbing=1")
	{
		DesertedTomb();
	}
	else if (window.location.href==="http://www.neopets.com/worlds/geraptiku/process_tomb.phtml")
	{
		Inventory();
	}
}

function post(action, params)  // Based on https://stackoverflow.com/a/133997
{
	var form=document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", action);
	for(var key in params)
	{
		var field=document.createElement("input");
		field.setAttribute("type", "hidden");
		field.setAttribute("name", key);
		field.setAttribute("value", params[key]);
		form.appendChild(field);
	}
	document.body.appendChild(form);
	form.submit();
}

function GiantOmelette()
{
	post('/prehistoric/omelette.phtml', {type: 'get_omelette'});
}

function GiantJelly()
{
	post('/jelly/jelly.phtml', {type: 'get_jelly'});
}

function BankInterest()
{
	post('/bank.phtml', {type: 'interest'});
}

function AnchorManagement()
{
	post('/pirates/anchormanagement.phtml', {action: '4349a14eee27c508e6c290519b55a1e5'});
}

function FruitMachine()  
{
	window.location.href="/desert/fruit/index.phtml";  // Putting this here as filler so the rest of the script runs fine. Basis of the issue is that 
	// The form for the fruit machine has two inputs: "spin", which always has a value for 1, and "ck", which ostensibly has a random value based on the 
	// ID of the player. So the issue then becomes how to append a form to the page which has the correct value for "ck." How to do this I am not entirely sure
	// So for now I am just Confused And Sad |': Will continue the Search For Answers at some point.
}

function ColtzanShrine()
{
	post('/desert/shrine.phtml', {type: 'approach'});
}

function UnderwaterFishing()
{
	post('/water/fishing.phtml', {go_fish: '1'});
}

function TDMBGPOP()
{
	post('/faerieland/tdmbgpop.phtml', {talkto: '1'});
}

function HealingSprings()
{
	post('/faerieland/springs.phtml', {type: 'heal'});
}

function ShopOfOffers()
{
	window.location.href="/shop_of_offers.phtml";
}

function MonthlyFreebies()
{
	window.location.href="/freebies/index.phtml";
}

function AppleBobbing()
{
	window.location.href="/halloween/applebobbing.phtml?bobbing=1";
}

function DesertedTomb()
{
	window.location.href='/worlds/geraptiku/process_tomb.phtml';
}

function Inventory()
{
	window.location.href='/inventory.phtml';
}

main();
