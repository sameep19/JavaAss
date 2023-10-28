/*  Sameep Pradeep
    Assignment 05
*/  

$(document).ready(function () {

    // Define the ContentItem class
class ContentItem {
    constructor(id, name, description, categoryGenre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryGenre = categoryGenre;
    }

    updateContentItem(id, name, description, categoryGenre) {
        if (this.id === id) {
            if (name !== null) this.name = name;
            if (description !== null) this.description = description;
            if (categoryGenre !== null) this.categoryGenre = categoryGenre;
        }
    }

    toString() {
        return `<div class="content-item-wrapper" id="content-item-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.categoryGenre}</div>
                </div>`;
    }
}

// array of 5 items
let contentItems = [
    new ContentItem(0, 'iPhone6', 'The 2014 iPhone with a sleek design and 4.7-inch display.', 'iOS 13'),
    new ContentItem(1, 'iPhone8', 'A 2017 iPhone featuring wireless charging and a powerful A11 Bionic chip', 'iOS 14'),
    new ContentItem(2, 'iPhone11', 'Introduced in 2019, it brought dual-camera capabilities and powerful performance.', 'iOS 15'),
    new ContentItem(3, 'iPhone14', 'It runs on Apples A15 Bionic processor, which is better equipped to handle newer iOS features.', 'iOS 16'),
    new ContentItem(4, 'iPhone15', 'Apple includes its A16 Bionic processor in its latest phone, which gives you faster everyday performance', 'iOS 17'),
];

// Use jQuery to add each content item to the page

    contentItems.forEach(function(item) {
        $('#content-item-list').append(item.toString());
    });

    // CSS
    $('.content-item-wrapper').css({
        
        'padding': '12px',
        'width': '250px',
        'margin': '0 auto 10px auto',
        'border': '3px solid black'
    });
});