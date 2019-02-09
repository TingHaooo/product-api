var mongoose = require('mongoose');

var BagSchema = new mongoose.Schema({
  	"style": {type: String, required: [true, "Style is required"]},
  	"title": {type: String, required: [true, "title is required"]},
  	"price": {type: String, required: [true, "price is required"]},
  	"color": {type: String, required: [true, "color is required"]},
    "description": {type: String, required: [true, "description is required"]} ,
    "sku": {type: String, required: [true, "Style is required"], unique: [true, "the sku must be unique"]},
  	"currencyFormat": {type: String, default: "$"},
  	"currencyId": {type: String, default: "USD"},
  	"isFreeShipping": {type: Boolean, default: true}
});

var Bag = mongoose.model('bag', BagSchema);

module.exports = Bag;
