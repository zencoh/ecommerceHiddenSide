// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // what is my foreign key supposed to be named
  foreignKey: '',
});
// Categories have many Products
Category.hasMany(Product, {
  // what is my foreign key supposed to be named
  foreignKey: '',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: {
    model: 'ProductTag',
    unique: false,
  },
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: {
    model: 'ProductTag',
    unique: false,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
