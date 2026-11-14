"use client";
import Image from "next/image";
import {useMemo,useState} from "react";
type Product={id:number;name:string;category:string;description:string;image?:string;tag?:string};
const STORE_WHATSAPP="";
const products:Product[]=
[
  {
    "id": 9,
    "name": "Stainless Steel Cooking Pot Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage.",
    "image": "https://www.passparto.co.il/cdn/shop/collections/IMG-5940.png?v=1758203676"
  },
  {
    "id": 10,
    "name": "Non-Stick Frying Pan",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage.",
    "image": "https://olazambia.com/images/product/2019/12/10000718/a2.jpg"
  },
  {
    "id": 11,
    "name": "Cast Iron Skillet",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 12,
    "name": "Stainless Steel Saucepan",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 13,
    "name": "Stock Pot",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 14,
    "name": "Dutch Oven",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 15,
    "name": "Wok Pan",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 16,
    "name": "Grill Pan",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage.",
    "image": "https://www.lodgecastiron.com/cdn/shop/files/L8SGP3-1.20220812182330797.png?v=1743096350&width=2800"
  },
  {
    "id": 17,
    "name": "Crepe Pan",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 18,
    "name": "Milk Pan",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 19,
    "name": "Steamer Pot",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 20,
    "name": "Pressure Cooker",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 21,
    "name": "Rice Pot",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 22,
    "name": "Casserole Dish",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 23,
    "name": "Roasting Pan",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 24,
    "name": "Chef's Knife",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage.",
    "image": "https://images.surferseo.art/b9548922-3b5a-4aed-8a18-dec017945530.jpeg"
  },
  {
    "id": 25,
    "name": "Paring Knife",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage.",
    "image": "https://images.surferseo.art/b9548922-3b5a-4aed-8a18-dec017945530.jpeg"
  },
  {
    "id": 26,
    "name": "Bread Knife",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 27,
    "name": "Knife Set with Block",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 28,
    "name": "Cutting Board",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage.",
    "image": "https://images.surferseo.art/b9548922-3b5a-4aed-8a18-dec017945530.jpeg"
  },
  {
    "id": 29,
    "name": "Chopping Board Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 30,
    "name": "Kitchen Scissors",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 31,
    "name": "Vegetable Peeler",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage.",
    "image": "https://inwfile.com/s-gf/14g61j.jpg"
  },
  {
    "id": 32,
    "name": "Box Grater",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage.",
    "image": "https://media.bunnings.com.au/api/public/content/7d6e0017e6da41b190b97ab9cb026883?v=108ce2c1"
  },
  {
    "id": 33,
    "name": "Garlic Press",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage.",
    "image": "https://media.bunnings.com.au/api/public/content/7d6e0017e6da41b190b97ab9cb026883?v=108ce2c1"
  },
  {
    "id": 34,
    "name": "Can Opener",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 35,
    "name": "Bottle Opener",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 36,
    "name": "Corkscrew",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 37,
    "name": "Kitchen Tongs",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 38,
    "name": "Silicone Spatula Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 39,
    "name": "Wooden Spoon Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 40,
    "name": "Whisk",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 41,
    "name": "Ladle",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 42,
    "name": "Slotted Spoon",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 43,
    "name": "Pasta Server",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 44,
    "name": "Measuring Cups Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 45,
    "name": "Measuring Spoons Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 46,
    "name": "Mixing Bowl Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 47,
    "name": "Colander",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 48,
    "name": "Fine Mesh Strainer",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 49,
    "name": "Rolling Pin",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 50,
    "name": "Pastry Brush",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 51,
    "name": "Kitchen Scale",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 52,
    "name": "Electric Blender",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 53,
    "name": "Hand Blender",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 54,
    "name": "Food Processor",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 55,
    "name": "Stand Mixer",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 56,
    "name": "Hand Mixer",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 57,
    "name": "Electric Kettle",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 58,
    "name": "Toaster",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 59,
    "name": "Sandwich Maker",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 60,
    "name": "Air Fryer",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 61,
    "name": "Microwave Oven",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 62,
    "name": "Electric Oven",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 63,
    "name": "Gas Cooker",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 64,
    "name": "Induction Cooker",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 65,
    "name": "Rice Cooker",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 66,
    "name": "Slow Cooker",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 67,
    "name": "Electric Pressure Cooker",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 68,
    "name": "Coffee Maker",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 69,
    "name": "Juicer",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 70,
    "name": "Water Dispenser",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 71,
    "name": "Food Chopper",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 72,
    "name": "Food Storage Container Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 73,
    "name": "Airtight Canister Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 74,
    "name": "Spice Rack",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 75,
    "name": "Spice Jars Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 76,
    "name": "Oil Dispenser Bottle",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 77,
    "name": "Water Bottle",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 78,
    "name": "Lunch Box",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 79,
    "name": "Bread Box",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 80,
    "name": "Fruit Basket",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 81,
    "name": "Dish Drainer Rack",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 82,
    "name": "Plate Rack",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 83,
    "name": "Pot Lid Organizer",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 84,
    "name": "Pan Organizer",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 85,
    "name": "Kitchen Shelf Organizer",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 86,
    "name": "Refrigerator Organizer Bins",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 87,
    "name": "Dinner Plate Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage.",
    "image": "https://shopcdnpro.grainajz.com/category/78898/1661/cdd01d2c25fb29c777e5d8fae02575d5/FYB002-4.png"
  },
  {
    "id": 88,
    "name": "Side Plate Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 89,
    "name": "Soup Bowl Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 90,
    "name": "Serving Bowl",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 91,
    "name": "Cereal Bowl Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 92,
    "name": "Mug Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 93,
    "name": "Drinking Glass Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 94,
    "name": "Wine Glass Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 95,
    "name": "Tea Cup and Saucer Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 96,
    "name": "Serving Tray",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 97,
    "name": "Cutlery Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 98,
    "name": "Serving Spoon Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 99,
    "name": "Dishwashing Liquid Dispenser",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 100,
    "name": "Kitchen Sponge Holder",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 101,
    "name": "Dish Brush",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 102,
    "name": "Cleaning Cloth Set",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 103,
    "name": "Microfiber Kitchen Towels",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 104,
    "name": "Kitchen Apron",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 105,
    "name": "Oven Mitts",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 106,
    "name": "Pot Holders",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 107,
    "name": "Table Runner",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 108,
    "name": "Kitchen Floor Mat",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 109,
    "name": "Waste Bin",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 110,
    "name": "Pedal Bin",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 111,
    "name": "Sink Caddy",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 112,
    "name": "Kitchen Paper Towel Holder",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 113,
    "name": "Reusable Food Wraps",
    "category": "Kitchen",
    "description": "A practical kitchen essential for everyday cooking, preparation, serving or storage."
  },
  {
    "id": 3,
    "name": "Fresh Table Setting",
    "category": "Dining",
    "description": "Thoughtful details for everyday dining."
  },
  {
    "id": 4,
    "name": "Bedroom Comfort",
    "category": "Home",
    "description": "Soft textures and calming bedroom inspiration.",
    "tag": "Home edit"
  },
  {
    "id": 5,
    "name": "Warm Living Spaces",
    "category": "Home",
    "description": "Finishing touches for a welcoming home."
  },
  {
    "id": 7,
    "name": "Women's Style Edit",
    "category": "Fashion",
    "description": "An editorial look at everyday personal style."
  },
  {
    "id": 8,
    "name": "Men's Style Edit",
    "category": "Fashion",
    "description": "Easy style inspiration for every day."
  }
,
  {
    "id": 114,
    "name": "Stainless Steel Roll-Top Chafing Dish",
    "category": "Kitchen",
    "description": "A practical kitchen and catering essential. Product details and availability will be confirmed by Blessing.",
    "image": "https://pitec.ch/media/8e/36/23/1690232557/Chafing_Dish_Rolltop_095074.jpg"
  },
  {
    "id": 115,
    "name": "Gold Glass-Top Chafing Dish",
    "category": "Kitchen",
    "description": "A practical kitchen and catering essential. Product details and availability will be confirmed by Blessing.",
    "image": "https://s.alicdn.com/@sc04/kf/H8450b2ce780c481ca312e0af94530fdcR/Hydraulic-Roll-Top-Chaffing-Buffet-Server-Stainless-Steel-Food-Warmer-9L-Rectangular-Luxury-Gold-Chafing-Dish-for-Catering-Hotel.jpg"
  },
  {
    "id": 116,
    "name": "Round Chafing Dish",
    "category": "Kitchen",
    "description": "A practical kitchen and catering essential. Product details and availability will be confirmed by Blessing.",
    "image": "https://www.boelsparty.com/files/shop/prod/234/316_234_20434_chafing_disch_rond_model_rvs_m.jpg"
  },
  {
    "id": 117,
    "name": "Electric Chafing Dish",
    "category": "Kitchen",
    "description": "A practical kitchen and catering essential. Product details and availability will be confirmed by Blessing.",
    "image": "https://images-cdn.ubuy.qa/663e7ac0753ca70459622e68-electric-chafing-dish-9qt-rectangular.jpg"
  },
  {
    "id": 118,
    "name": "Induction Chafing Dish",
    "category": "Kitchen",
    "description": "A practical kitchen and catering essential. Product details and availability will be confirmed by Blessing.",
    "image": "https://www.profishop.fr/media/image/a6/d9/d9/12322-APS_Chafing_Dish_GN_1-1_60_x_42_cm_Hoehe_30_cm_Edelstahl_-_EASY_INDUCTION_-3-65e6fd1a55532.jpg"
  },
  {
    "id": 119,
    "name": "Stainless Steel Hotel Food Pan Set",
    "category": "Kitchen",
    "description": "A practical kitchen and catering essential. Product details and availability will be confirmed by Blessing.",
    "image": "https://down-ph.img.susercontent.com/file/ph-11134208-7rasc-m8op62gj4gwu09"
  },
  {
    "id": 120,
    "name": "Round Soup Chafer / Soup Kettle",
    "category": "Kitchen",
    "description": "A practical kitchen and catering essential. Product details and availability will be confirmed by Blessing.",
    "image": "https://cdnimg.webstaurantstore.com/images/products/extra_large/361789/1381276.jpg"
  },
  {
    "id": 121,
    "name": "Buffet Serving Utensil Set",
    "category": "Kitchen",
    "description": "A practical kitchen and catering essential. Product details and availability will be confirmed by Blessing.",
    "image": "https://sklep.amefa.pl/hpeciai/a28f342b9d7ba956ada13a0bf6bab1d8/pol_pl_BUFFET-Lyzka-cedzakowa-214_6.jpg"
  },
  {
    "id": 122,
    "name": "Gold Beverage Dispenser / Tea Urn",
    "category": "Kitchen",
    "description": "A practical kitchen and catering essential. Product details and availability will be confirmed by Blessing.",
    "image": "https://luxedemaisonuk.com/cdn/shop/files/B6B5547B-4A6E-417A-8F37-8EF26C9B5CD9.png?v=1759079835&width=1445"
  },
  {
    "id": 123,
    "name": "Stainless Steel Cookware Pot Set",
    "category": "Kitchen",
    "description": "A practical kitchen and catering essential. Product details and availability will be confirmed by Blessing.",
    "image": "https://www.moebel-rieger.de/media/8e/aa/27/1658450427/IFm9cBLTdW7a6eMvKtpmwQ%3D%3D.jpeg"
  },
  {
    "id": 124,
    "name": "Water Pan",
    "category": "Kitchen",
    "description": "A stainless steel water pan for buffet service."
  },
  {
    "id": 125,
    "name": "Chafing Fuel Holder",
    "category": "Kitchen",
    "description": "A holder for approved chafing-dish fuel cans."
  },
  {
    "id": 126,
    "name": "Rectangular Chafing Dish",
    "category": "Kitchen",
    "description": "A rectangular buffet warmer for catering and food service."
  },
  {
    "id": 127,
    "name": "Divided Food Pan",
    "category": "Kitchen",
    "description": "A divided insert for serving multiple dishes."
  },
  {
    "id": 128,
    "name": "Bain-Marie",
    "category": "Kitchen",
    "description": "A bain-marie for gentle heating and buffet service."
  },
  {
    "id": 129,
    "name": "Thermal Food Flask",
    "category": "Kitchen",
    "description": "An insulated container for keeping prepared food warm."
  },
  {
    "id": 130,
    "name": "Chafing Dish Stand and Lid Holder",
    "category": "Kitchen",
    "description": "A stand and lid holder for buffet service."
  },
  {
    "id": 131,
    "name": "Soup Kettle",
    "category": "Kitchen",
    "description": "A deep warmer for soups and pepper soup."
  },
  {
    "id": 132,
    "name": "Beverage Dispenser",
    "category": "Kitchen",
    "description": "A dispenser with a tap for serving drinks."
  },
  {
    "id": 133,
    "name": "Glass-Top Chafing Dish",
    "category": "Kitchen",
    "description": "A buffet warmer with a clear viewing lid."
  }
]
const categories=["All","Kitchen","Dining","Home","Fashion"];
export default function HomePage(){
const [category,setCategory]=useState("All"),[search,setSearch]=useState(""),[bag,setBag]=useState<Product[]>([]),[open,setOpen]=useState(false),[notice,setNotice]=useState("");
const shown=useMemo(()=>products.filter(p=>(category==="All"||p.category===category)&&(p.name+" "+p.description+" "+p.category).toLowerCase().includes(search.toLowerCase())),[category,search]);
function add(p:Product){setBag(v=>[...v,p]);setNotice(p.name+" added to your bag");window.setTimeout(()=>setNotice(""),2200)}
function enquire(){if(!bag.length)return;if(!STORE_WHATSAPP){setNotice("Add the store WhatsApp number before taking orders.");return}const msg=encodeURIComponent("Hello Blessing's Lifestyle, I would like to enquire about:\n"+bag.map(p=>p.name).join("\n"));window.open("https://wa.me/"+STORE_WHATSAPP+"?text="+msg,"_blank","noopener,noreferrer")}
return <main>
<div className="announcement">A little something lovely for your home <span>✦</span> Discover the collection</div>
<header className="header"><a className="brand" href="#"><span className="mark">B</span><span><b>Blessing's Lifestyle</b><small>HOME · KITCHEN · EVERYDAY LIVING</small></span></a><nav><a href="#shop">Shop</a><a href="#collections">Collections</a><a href="#story">Our Story</a><a href="#contact">Contact</a></nav><button className="bag-button" onClick={()=>setOpen(true)}>Bag <i>{bag.length}</i></button></header>
<section className="hero"><div className="hero-copy"><p className="eyebrow">THE EVERYDAY, MADE LOVELY</p><h1>Make room for<br/><em>beautiful living.</em></h1><p className="lead">Thoughtful finds for your kitchen, your home and the little moments that make a place yours.</p><a className="button" href="#shop">Explore the collection ↗</a><p className="small-note">✳ &nbsp; Curated with care · For the way you live</p></div><div className="hero-photo"><Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=90" alt="Warm elegant home interior" fill priority sizes="(max-width:700px) 100vw,55vw"/><b>Find your kind of lovely.</b></div></section>
<section className="section" id="collections"><div className="section-title"><div><p className="eyebrow">SHOP BY CATEGORY</p><h2>Good things for <em>every corner.</em></h2></div><p>From the heart of the home to the finishing touches.</p></div><div className="categories"><a onClick={()=>setCategory("Kitchen")} href="#shop"><Image fill src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85" alt="Bright modern kitchen"/><span><small>01 / COOK & PREP</small><b>Kitchen</b><i>Explore collection ↗</i></span></a><a onClick={()=>setCategory("Home")} href="#shop"><Image fill src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85" alt="Comfortable home interior"/><span><small>02 / LIVE BEAUTIFULLY</small><b>Home & Living</b><i>Explore collection ↗</i></span></a><a onClick={()=>setCategory("Fashion")} href="#shop"><Image fill src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85" alt="Fashion editorial model"/><span><small>03 / PERSONAL STYLE</small><b>Fashion</b><i>Explore collection ↗</i></span></a></div></section>
<section className="shop" id="shop"><div className="section-title"><div><p className="eyebrow">A FEW THINGS WE LOVE</p><h2>Discover the <em>edit.</em></h2></div><p>Browse the starter catalogue and find something for your space.</p></div><div className="tools"><div className="filters">{categories.map(c=><button className={category===c?"selected":""} key={c} onClick={()=>setCategory(c)}>{c}</button>)}</div><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search the collection" aria-label="Search products"/></div><div className="sample">KITCHEN CATALOGUE — Product photos, prices and availability will be confirmed by Blessing before orders are accepted.</div><div className="products">{shown.map(p=><article key={p.id}><div className="product-photo">{p.image?<Image fill src={p.image} alt={p.name} sizes="(max-width:650px) 50vw,25vw"/>:<div className="photo-pending">PRODUCT PHOTO<br/>COMING SOON</div>}{p.tag&&<small>{p.tag}</small>}<button onClick={()=>add(p)} aria-label={"Add "+p.name+" to bag"}>+</button></div><p className="cat">{p.category}</p><h3>{p.name}</h3><p className="desc">{p.description}</p><p className="price">Enquire for price</p></article>)}</div>{!shown.length&&<p className="empty">No products match your search.</p>}</section>
<section className="story" id="story"><div className="big-b">B.</div><div><p className="eyebrow">A NOTE FROM BLESSING</p><h2>Everyday essentials.<br/><em>A little more special.</em></h2><p>We believe the things we use every day should bring comfort, usefulness and joy. Blessing's Lifestyle is a welcoming place to discover lovely finds for your home and beyond.</p></div><aside>✳<b>Thoughtful finds</b><small>For home, kitchen<br/>and everyday life.</small></aside></section>
<section className="contact" id="contact"><p className="eyebrow">LET'S KEEP IN TOUCH</p><h2>Something lovely is <em>always cooking.</em></h2><p>Have a question or looking for something special? We'd love to hear from you.</p><a className="outline" href="#shop">Explore the store ↗</a></section>
<footer><b>Blessing's Lifestyle</b><span>Everything You Love, All in One Place.</span><span>© {new Date().getFullYear()} Blessing's Lifestyle</span></footer>
{notice&&<div className="toast" role="status">{notice}</div>}
{open&&<div className="backdrop" onClick={()=>setOpen(false)}><aside className="drawer" onClick={e=>e.stopPropagation()}><div className="drawer-head"><div><p className="eyebrow">YOUR SELECTION</p><h2>Shopping bag ({bag.length})</h2></div><button onClick={()=>setOpen(false)}>×</button></div>{bag.length?<><div className="items">{bag.map((p,i)=><div className="item" key={i}><div className="thumb">{p.image?<Image fill src={p.image} alt=""/>:<span>Photo pending</span>}</div><div><b>{p.name}</b><small>{p.category} · Enquire for price</small></div><button onClick={()=>setBag(v=>v.filter((_,j)=>i!==j))}>Remove</button></div>)}</div><p className="hint">Prices and availability will be confirmed by the store.</p><button className="button full" onClick={enquire}>Enquire about these items ↗</button></>:<div className="empty-bag"><h3>Your bag is waiting.</h3><p>Add something lovely from the collection.</p><button className="button" onClick={()=>setOpen(false)}>Continue browsing</button></div>}</aside></div>}
</main>}
