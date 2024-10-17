var newform = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filteritem = document.getElementById('filter');

// Add event listener to form submit
newform.addEventListener('submit', formevent);

// Add event listener for delete button clicks
itemlist.addEventListener('click', removeitem);

// Add event listener for filtering
filteritem.addEventListener('keyup', filteritems);

function formevent(e) {
    e.preventDefault();

    // Get the input value
    var newitem = document.getElementById('item').value;

    // Create a new list item element
    var li = document.createElement('li');
    li.className = 'list-group-item'; // Corrected className assignment

    // Add the text to the list item
    li.appendChild(document.createTextNode(newitem));

    // Create delete button
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));

    // Append the delete button to the list item
    li.appendChild(deletebtn);

    // Append the new list item to the item list
    itemlist.appendChild(li);
}

function removeitem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var lipa = e.target.parentElement;
            itemlist.removeChild(lipa);
        }
    }
}

function filteritems(e) {
    var textss = e.target.value.toLowerCase(); // Get the search text in lowercase

    // Get all list items
    var items = itemlist.getElementsByTagName('li');

    // Convert HTMLCollection to Array and iterate over each item
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent.toLowerCase(); // Get the text content of each item

        // Check if the input search matches the list item text
        if (itemName.indexOf(textss) != -1) {
            item.style.display = 'block'; // Show item if it matches
        } else {
            item.style.display = 'none'; // Hide item if it doesn't match
        }
    });
}
 