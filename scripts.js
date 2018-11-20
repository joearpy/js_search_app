let inputNameFilter = document.getElementById('nameFilter');
let listItemList = document.getElementById('itemList');

let nameFilter = '';
let itemList = [
'Batman',
'Raging Bull',
'Aliens',
'Reservoir Dogs',
'Wall E',
'The Treasure of the Sierra Madre',
'Whiplash',
'Some Like It Hot',
'Double Indemnity',
'Taxi Driver',
'Avengers',
'Vertigo',
'One the Waterfront',
'Saving Private Ryan',
'The Lord of the Rings',
'Inception',
'The Silence of the Lambs'
];

itemList.sort(function(a, b) {
    return a.localeCompare(b);
});

inputNameFilter.addEventListener('keyup', OnInputKeyup);

renderList();

function renderList() {

    listItemList.innerText = '';

    let filteredItemList = itemList.filter(function(item, index) {

        let lowerCaseItem = item.toLowerCase();
        let lowerCaseNameFilter = nameFilter.toLowerCase();
        let position = lowerCaseItem.indexOf(lowerCaseNameFilter);

        return !(position == -1);
    });

    filteredItemList.forEach(function(item, index){
        renderListItem(item);
    });

}

function renderListItem(text) {
    let newListItem = document.createElement('li');
    newListItem.innerText = text;
    listItemList.appendChild(newListItem);
}

function OnInputKeyup () {
    nameFilter = inputNameFilter.value;
    renderList();
}