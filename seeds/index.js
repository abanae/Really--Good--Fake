const sequelize = require('../config/connection');
const wishlistData = require('./wishlistSeedData');
const customerData = require('./customerSeedData');
const cartData = require('./cartSeedData');
const productData = require('./productSeedData')
const { Customer, Cart, Wishlist, Product } = require('../models');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await Customer.bulkCreate(customerData);
    await Cart.bulkCreate(cartData);
    await Wishlist.bulkCreate(wishlistData);
    await Product.bulkCreate(productData);

  } catch (error) {
    console.log(error);
  }
  
  process.exit(0);
};

seedAll();
