describe('SauceDemo: Add Highest Price Item to Cart', () => {
  it('Logs in, finds the highest priced item, and adds it to the cart', () => {
    // Step 1: Visit the URL
    cy.visit('https://www.saucedemo.com/');

    // Step 2: Login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Step 3: Manually find the highest priced item
    const prices = [];

    cy.get('.inventory_item').each(($el, index, $list) => {
      const priceText = $el.find('.inventory_item_price').text().replace('$', '');
      const price = parseFloat(priceText);
      prices.push({ el: $el, price });
    }).then(() => {
      // Sort the prices array to find the highest price
      cy.get('.inventory_item').then(($items) => {
        let highestPrice = 0;
        let highestItem;

        $items.each((index, item) => {
          const priceText = Cypress.$(item).find('.inventory_item_price').text().replace('$', '');
          const price = parseFloat(priceText);

          if (price > highestPrice) {
            highestPrice = price;
            highestItem = item;
          }
        });

        // Step 4: Add the highest priced item to the cart
        cy.wrap(highestItem).find('button').click();
      });
    });
  });
});
