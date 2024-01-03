var productContainer = document.getElementById('productContainer');

// Loop through the JSON data and create a card for each product
jsonData.forEach(function(product) {
    var productCard = document.createElement('div');
    productCard.className = 'product-card';

    // Create HTML content for the product card
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Bookmark: ${product.bookmark}</p>
    `;

    // Append the product card to the container
    productContainer.appendChild(productCard);
});
