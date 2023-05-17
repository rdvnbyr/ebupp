// const Product = require('../models/product');

exports.getProducts = async () => {};

exports.getProduct = async () => {};

exports.createProduct = async () => {};

exports.updateProduct = async () => {};

exports.deleteProduct = async () => {};

exports.uploadProductPhoto = async () => {};

exports.resizeProductPhoto = async () => {};

// Ebay Inventory API controllers
// inventory_item
const bulkCreateOrReplaceInventoryItem = async () => {};
const bulkGetInventoryItem = async () => {};
const bulkUpdatePriceQuantity = async () => {};
const createOrReplaceInventoryItem = async () => {};
const deleteInventoryItem = async () => {};
const getInventoryItem = async () => {};
const getInventoryItems = async () => {};
const createOrReplaceProductCompatibility = async () => {};
const getProductCompatibility = async () => {};
// inventory_item_group
const createOrReplaceInventoryItemGroup = async () => {};
const deleteInventoryItemGroup = async () => {};
const getInventoryItemGroup = async () => {};
// listing
const bulkMigrateListing = async () => {};
// offer
const bulkCreateOffer = async () => {};
const bulkPublishOffer = async () => {};
const createOffer = async () => {};
const deleteOffer = async () => {};
const getListingFees = async () => {};
const getOffer = async () => {};
const getOffers = async () => {};
const publishOffer = async () => {};
const publishOfferByInventoryItemGroup = async () => {};
const updateOffer = async () => {};
const withdrawOffer = async () => {};
const withdrawOfferByInventoryItemGroup = async () => {};
// location
const createInventoryLocation = async () => {};
const deleteInventoryLocation = async () => {};
const disableInventoryLocation = async () => {};
const enableInventoryLocation = async () => {};
const getInventoryLocation = async () => {};
const getInventoryLocations = async () => {};
const updateInventoryLocation = async () => {};

const ebayInventoryApi = {
  offer: {
    bulkCreateOffer,
    bulkPublishOffer,
    createOffer,
    deleteOffer,
    getListingFees,
    getOffer,
    getOffers,
    publishOffer,
    publishOfferByInventoryItemGroup,
    updateOffer,
    withdrawOffer,
    withdrawOfferByInventoryItemGroup,
  },
  item: {
    bulkCreateOrReplaceInventoryItem,
    bulkGetInventoryItem,
    bulkUpdatePriceQuantity,
    createOrReplaceInventoryItem,
    deleteInventoryItem,
    getInventoryItem,
    getInventoryItems,
    createOrReplaceProductCompatibility,
    getProductCompatibility,
    createOrReplaceInventoryItemGroup,
    deleteInventoryItemGroup,
    getInventoryItemGroup,
  },
  location: {
    createInventoryLocation,
    deleteInventoryLocation,
    disableInventoryLocation,
    enableInventoryLocation,
    getInventoryLocation,
    getInventoryLocations,
    updateInventoryLocation,
  },
  listing: {
    bulkMigrateListing,
  },
};

module.exports = {
  ebayInventoryApi,
};
