/**
 * [renderFruitsList rendering fruit list DOM from api data]
 * @param  {[array]} data [fruits api data]
 * @return {[DOM tree]}   [returns DOM tree]
 */
const renderFruitsList = function(data) {
    const fruitList = document.createElement('ul');

    for (let i = 0; i < data.length; i++) {
        const fruitListItem = document.createElement('li');
        const personNode = document.createElement('a');
        const fruitNode = document.createElement('a');

        personNode.innerHTML = data[i].name;
        fruitNode.innerHTML = data[i].favoriteFruit;

        fruitListItem.appendChild(personNode);
        fruitListItem.appendChild(fruitNode);

        fruitListItem.setAttribute('data-fruit-name', data[i].favoriteFruit);
        fruitList.appendChild(fruitListItem);
    }
    list.appendChild(fruitList);
    renderBar(data);
};
/**
 * [renderBar rendering fruit bar container from fruits data]
 * @param  {[array]} data [fruits api data]
 * @return {[DOM tree]}   [returns DOM tree]
 */
const renderBar = function(data) {
	const uniqueFruit = [...new Set(data.map(v => v.favoriteFruit))];
    const fruitCountResult = [];

    for (let fruitName of uniqueFruit) {
        fruitCountResult.push({'name': fruitName, 'count': getFruitsCount(data, fruitName), 'color': getRandomColor()});
    }
    const barList = document.createElement('ul');
    fruitCountResult.sort((a, b) => b.count - a.count).forEach((v) => {    	
        const barListItem = document.createElement('li');
        const barFruitName = document.createElement('a');
        const barContainer = document.createElement('span');
        const barWidthSpan = document.createElement('span');
        const barFruitCount = document.createElement('a');

        barFruitName.innerHTML = v.name;
        barFruitName.setAttribute('href', 'javascript:void(0)');
        barFruitCount.innerHTML = v.count;
        barWidthSpan.style.width = `${v.count *400 / 100}%`;
        barWidthSpan.style.background = v.color;

        barContainer.appendChild(barWidthSpan);
        barListItem.appendChild(barFruitName);
        barListItem.appendChild(barContainer);
        barListItem.appendChild(barFruitCount);
        barList.appendChild(barListItem);
    });    
    bars.appendChild(barList);
}
/**
 * [getRandomColor generating random color to apply to favorite fruit]
 * @return {[string]} [color hex code]
 */
const getRandomColor = function() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/**
 * [getFruitsCount get all the fruit counts from api list]
 * @param  {[array]} data [fruits api data]
 * @param  {[string]} fruit [name of the fruit]
 * @return {[number]}       [total fruit count from the list]
 */
const getFruitsCount = function(data, fruit) {
    return data.reduce((totalFavFruit, currentFruit) => {
        let count = 0;
        if (currentFruit.favoriteFruit === fruit) {
            count++;
            totalFavFruit = totalFavFruit + count;
        }
        return totalFavFruit;
    }, 0);
};
/**
 * DOM Events for bar li click
 */
let prevHighlighted = null;
bars.addEventListener('click', function(e) {
	const current = e.target;
	if(current.tagName !== 'LI') {
		return;
	}
	const fruitNameAnchor = current.firstElementChild;
	const fruitCountAnchor = current.lastElementChild;
	console.log(`Fruit selected: ${fruitNameAnchor.innerHTML}, ${fruitCountAnchor.innerHTML}`);
	window.scrollTo(0, 0);
	const fruitListHighlight = document.querySelectorAll('li[data-fruit-name="'+ fruitNameAnchor.innerHTML +'"]');
	const currentBarColor = fruitNameAnchor.nextElementSibling.firstElementChild.style.background;
	// removing previous highlight
	if(prevHighlighted) {	
		for(let prevLis of prevHighlighted) {
			prevLis.style.background = '';
		}	
	}
	// applying highlight	
	for(let lis of fruitListHighlight) {
		lis.style.background = currentBarColor;
	}
	prevHighlighted = fruitListHighlight;
}, false);
/**
 * Reload button click event
 */
reload.onclick = function() {
	list.innerHTML = "";
	bars.innerHTML = "";
	FruitasticApi.get(renderFruitsList);
};
/**
 * Calling favorite fruits api and rendering the list and bar
 */
FruitasticApi.get(renderFruitsList);