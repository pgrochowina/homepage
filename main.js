const name = "Konrad Walenrod";
const age = "24";

//alert(`Cześć i czołem, nazywam się ${name}, mam ${age} lat/a.`);
//console.log(`Poprawka: dzień dobry, nazywam się ${name}, mam ${age} lat/a.`);

newAutoHeader = document.querySelector(".auto-fill-header");
newAutoParagraph = document.querySelector(".auto-fill-pragraph");
console.log(newAutoHeader);
console.log(newAutoParagraph);
newAutoHeader.innerHTML = '"Non Stop"- Brian W. Aldiss';
newAutoParagraph.innerHTML =
  "Plemię Roya Complaina żyje w Pokładach porośniętych wybujałą i dziką roślinnością, walcząc o przetrwanie w nieprzyjaznym świecie. Wrogami są inne plemiona ludzi, flora i fauna. Istnieją też dalsze zagrożenia – mityczni Ludzie z Dziobu, legendarni Giganci czy przerażający Obcy.";
console.log(newAutoHeader);
console.log(newAutoParagraph);
