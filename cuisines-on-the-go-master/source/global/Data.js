export const filterData = [
    {name : "Cepat Saji", image : require("../Assets/CepatSaji.png"), id : "0"},
    {name : "Jajanan", image : require("../Assets/Jajanan.png"), id : "1"},
    {name : "Manis", image : require("../Assets/Manis.png"), id : "2"},
    {name : "Minuman", image : require("../Assets/Minuman.png"),id : "3"},
    {name : "Aneka Nasi", image : require("../Assets/AnekaNasi.png"), id : "4"},
    {name : "Asia", image : require("../Assets/Sushi.png"), id : "5"},
    {name : "Barat", image : require("../Assets/Steak.png"), id : "6"},
];

export const filterData2 = [
    {name : "Cepat Saji", image : "https://res.cloudinary.com/dk0z4ums3/image/upload/v1618810887/attached_image/yang-didapatkan-dari-makanan-cepat-saji.jpg", id : "0"},
    {name : "Jajanan", image : "https://asset.kompas.com/crops/KDZ5xpSOSRVg48h82mlrERW79hg=/0x48:1000x715/750x500/data/photo/2020/11/13/5fadda8a15dde.jpg", id : "1"},
    {name : "Manis", image : "https://cdn-2.tstatic.net/travel/foto/bank/images/macarons_20180216_110631.jpg", id : "2"},
    {name : "Minuman", image : "https://glicowings.co.id/uploads/offline_activity/5-resep-minuman-dengan-es-krim-ala-kafe-hits-yang-nikmat-dan-segar/ecad8583c5c4992da3b0c7ef9921860c.jpg",id : "3"},
    {name : "Aneka Nasi", image : "https://asset.kompas.com/crops/MX1baqT6Gow2FnJp6WfLpQ_txnU=/0x0:1000x667/750x500/data/photo/2020/07/20/5f14f97c83ca7.jpg", id : "4"},
    {name : "Asia", image : "https://static.honestdocs.id/system/blog_articles/main_hero_images/000/002/990/original/Ikan_Mentah_Pada_Hidangan_Sushi__Aman_Untuk_di_Konsumsi.jpg", id : "5"},
    {name : "Barat", image : "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/02/how-to-cook-steak-1061w.jpg", id : "6"},
    {name : "Sea Food", image : "https://media-cdn.tripadvisor.com/media/photo-s/18/3a/09/6c/bonefish-seafood-platter.jpg", id : "7"},
];

export const restaurantsData = [
    {restaurantName : "Warung Prasmanan", farAway : "1.6",
    businessAddress : "Jalan Lapas, Jati Agung", images : 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/11/19/1620875728.jpg',
    averageReview : 4.5, numberOfReview : 45, coordinates : {lat: -5.352809, lng: 105.319137}, discount : 10, deliveryTime : 10,
    collectTime : 4, foodType: "Nasi, Ayam, Ikan, Sayur...",
    productData : [{name : "Nasi Sayur", price : 7000, image : "https://media-cdn.tripadvisor.com/media/photo-s/0e/2d/32/1d/nasi-mie-ayam-sayur-super.jpg"},
    {name : "Nasi Ayam", price : 10000, image : "https://cdns.klimg.com/dream.co.id/resized/640x320/news/2022/08/28/207691/menunya-komplet-paket-nasi-ayam-bakar-di-jakarta-ini-sanggup-obati-rasa-lapar-2208287.jpg"},
    {name : "Nasi Ikan", price : 10000, image : "https://cdn0-production-images-kly.akamaized.net/z0xbN5msqeMGS0ewDhX9qYWrsqA=/469x260/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2728727/original/051151100_1550134812-shutterstock_1208794342.jpg"},
    ],
    id : 0},

    {restaurantName : "Bakso & Mie Ayam Mas Ucok", farAway : "2.1",
    businessAddress : "Jalan Airan Raya, Jati Agung", images : 'https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5238b99b-58b8-4eef-85ad-8f0b22c33f8a_Go-Biz_20211102_173630.jpeg',
    averageReview : 4.8, numberOfReview : 27, coordinates : {lat: -5.352503, lng: 105.299612}, discount : 0, deliveryTime : 15,
    collectTime : 8, foodType: "Bakso, Mie Ayam...",
    productData : [{name : "Bakso Biasa", price : 10000, image : "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5238b99b-58b8-4eef-85ad-8f0b22c33f8a_Go-Biz_20211102_173630.jpeg"},
    {name : "Bakso Urat", price : 12000, image : "https://asset.kompas.com/crops/4aqOaU_1HDJzJZDlhtm1mFQFmSM=/0x0:698x465/750x500/data/photo/2021/01/08/5ff86f55cf2e4.jpg"},
    {name : "Mie Ayam", price : 8000, image : "https://images.tokopedia.net/img/KRMmCm/2022/8/15/a4b7d013-9438-46b2-906b-4c374ec82236.jpg"},
    ],
    id : 1},

    {restaurantName : "RM Padang", farAway : "3",
    businessAddress : "Jalan Ryacudu, Sukarame", images : 'https://katasumbar.com/wp-content/uploads/2022/01/IMG20170830121544.jpg',
    averageReview : 4.9, numberOfReview : 102, coordinates : {lat: -5.370048, lng: 105.298733}, discount : 25, deliveryTime : 20,
    collectTime : 6, foodType: "Daging Cincang, Rendang, Kikil...",
    productData : [{name : "Nasi Daging Cincang", price : 25000, image : "https://awsimages.detik.net.id/community/media/visual/2018/07/16/89d85c09-56ca-4ce8-99fb-d682ac156934.jpeg?w=700&q=90"},
    {name : "Nasi Rendang", price : 20000, image : "https://titozheng.files.wordpress.com/2016/06/nasi-rendang.jpg"},
    {name : "Nasi Kikil", price : 22000, image : "https://statik.tempo.co/data/2020/09/24/id_969221/969221_720.jpg"},
    ],
    id : 2},

    {restaurantName : "Burger & Kebab Rizky", farAway : "2.8",
    businessAddress : "Jalan Saku Raju, Jati Agung", images : 'https://asset.kompas.com/crops/yqHUrUMME2QSGILGvNH-LYuTdns=/12x51:892x637/780x390/data/photo/2022/03/05/622358ed771fb.jpg',
    averageReview : 4.6, numberOfReview : 51, coordinates : {lat: -5.364601, lng: 105.296948}, discount : 5, deliveryTime :15,
    collectTime : 10, foodType: "Burger, Kebab, Hotdog...",
    productData : [{name : "Burger", price : 10000, image : "https://asset.kompas.com/crops/yqHUrUMME2QSGILGvNH-LYuTdns=/12x51:892x637/780x390/data/photo/2022/03/05/622358ed771fb.jpg"},
    {name : "Kebab", price : 8000, image : "https://www.pinhome.id/pinhome-home-service/wp-content/uploads/2022/01/image-365.jpeg"},
    {name : "Hotdog", price : 12000, image : "https://img.okezone.com/content/2020/09/11/298/2276339/hot-dog-sayuran-pengganjal-rasa-lapar-yang-mudah-bikinnya-OQOReWmLfZ.jpg"},
    ],
    id : 3},
]
export const productData = [
    {name:"Nasi Sayur", price:7000,image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/2d/32/1d/nasi-mie-ayam-sayur-super.jpg",
    details:"Menu klasik perpaduan nasi dengan sayur",id:0},
    {name:"Nasi Ayam", price:10000,image:"https://cdns.klimg.com/dream.co.id/resized/640x320/news/2022/08/28/207691/menunya-komplet-paket-nasi-ayam-bakar-di-jakarta-ini-sanggup-obati-rasa-lapar-2208287.jpg",
    details:"Dengan Lauk ayam",id:1},
    {name:"Nasi Ikan", price:10000,image:"https://cdn0-production-images-kly.akamaized.net/z0xbN5msqeMGS0ewDhX9qYWrsqA=/469x260/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2728727/original/051151100_1550134812-shutterstock_1208794342.jpg",
    details:"Dengan lauk ikan",id:2},
    
    {name:"Nasi Sayur", price:7000,image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/2d/32/1d/nasi-mie-ayam-sayur-super.jpg",
    details:"Menu klasik perpaduan nasi dengan sayur",id:3},
    {name:"Nasi Ayam", price:10000,image:"https://cdns.klimg.com/dream.co.id/resized/640x320/news/2022/08/28/207691/menunya-komplet-paket-nasi-ayam-bakar-di-jakarta-ini-sanggup-obati-rasa-lapar-2208287.jpg",
    details:"Dengan Lauk ayam",id:4},
    {name:"Nasi Ikan", price:10000,image:"https://cdn0-production-images-kly.akamaized.net/z0xbN5msqeMGS0ewDhX9qYWrsqA=/469x260/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2728727/original/051151100_1550134812-shutterstock_1208794342.jpg",
    details:"Dengan lauk ikan",id:5},
];
export const menuData = [
    {title : "IKAN", special : false, key:0},
    {title : "AYAM", special : false,key : 1},
    {title : "DAGING", special : false, key : 2},
    {title : "SAYUR NANGKA", special : false, key : 3},
    {title : "SAYUR HIJAU", special : false, key : 4},
    {title : "SAYUR SUP", special : false, key : 5},
    {title : "TAHU", special : false, key : 6},
    {title : "TEMPE", special : false, key : 7},
    {title : "TELUR", special : false, key : 8},
    {title : "TEH", special : false, key : 9},
    {title : "KOPI", special : false,key : 10},
];
export const specialData = [
    {title : "LIMITED OFFER", key : 0},
    {title : "SAMBEL SUPER PEDAS", key : 1},
    {title : "NASI PORSI KULI", key : 2},
    {title : "PROMO PAKET", key : 3},
];
export const menu = [
    {key : 1, title : 'IKAN'},
    {key : 2, title : 'AYAM'},
    {key : 3, title : 'DAGING'},
    {key : 4, title : 'SAYUR NANGKA'},
    {key : 5, title : 'SAYUR HIJAU'},
    {key : 6, title : 'SAYUR SUP'},
    {key : 7, title : 'TAHU'},
    {key : 8, title : 'TEMPE'},
]

export const menuDetailedData =[
    { 
      meal:"Nasi Sayur",
      price:7000,
      image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/2d/32/1d/nasi-mie-ayam-sayur-super.jpg",
      details:"Menu klasik perpaduan nasi dengan sayur",
      preferenceTitle:["Pilih topping ekstra", "Pilih minuman 1", "Pilih minuman 2", "Makanan Sampingan?", "Tambahan lain?"],
      preferenceData: [

                      [{name:"Sambal Xtra Pedas",price:1000,checked:false,id:10},{name:"Sambal Terasi",price:1500,checked:false ,id:11},{name:'Sambal Kecap',price:2000,checked:false,id:12},
                      ],

                      [{name:"Air Putih",price:1000 ,checked:false,id:13 },{name:"Teh Tawar",price:3000 ,checked:false,id:14},{name:'Teh Manis Panas',price:4000,checked:false ,id:15},
                      {name:'Teh Manis Dingin',price:5000 ,checked:false,id:16},{name:'Kopi Hitam',price:4000 ,checked:false,id:17},{name:'Fruit Tea Lemon',price:6000 ,checked:false,id:18},
                      {name:'Pop Ice',price:4000 ,checked:false,id:19},{name:'Teh Sisri',price:3000 ,checked:false,id:20},
                      ],

                      [{name:"Air Putih",price:1000,checked:false ,id:21},{name:"Teh Tawar",price:3000,checked:false ,id:22},{name:'Teh Manis Panas',price:4000,checked:false ,id:23},
                      {name:'Teh Manis Dingin',price:5000 ,checked:false,id:24},{name:'Kopi Hitam',price:4000 ,checked:false,id:25},{name:'Fruit Tea Lemon',price:6000,checked:false ,id:26},
                      {name:'Pop Ice',price:4000,checked:false ,id:27},{name:'Teh Sisri',price:3000 ,checked:false,id:28},{name:'Kosong',price:0 ,checked:false,id:29},
                        ],
                          
                      [{name:"Nasi Xtra",price:3000 ,checked:false,id:30},{name:"Lalapan",price:2000,checked:false ,id:31},{name:'Tempe & Tahu',price:2500,checked:false ,id:32},
                      ],

                      [
                      {name:"NULL",price:0 ,checked:false,id:33},{name:"NULL",price:0 ,checked:false,id:34},{name:"NULL",price:0 ,checked:false,id:35},
                      {name:"NULL",price:0 ,checked:false,id:36},{name:"NULL",price:0 ,checked:false,id:37},{name:"NULL",price:0 ,checked:false,id:38},
                      {name:"NULL",price:0 ,checked:false ,id:39},{name:"NULL",price:0 ,checked:false,id:40},{name:"NULL",price:0,checked:false ,id:41},
                      ],
                      ],
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],              
      id:0
    },
  
    { 
      meal:"Nasi Ayam", 
      price:10000,
      image:"https://cdns.klimg.com/dream.co.id/resized/640x320/news/2022/08/28/207691/menunya-komplet-paket-nasi-ayam-bakar-di-jakarta-ini-sanggup-obati-rasa-lapar-2208287.jpg",
      details:"Dengan Lauk ayam",
      preferenceTitle:["Pilih topping ekstra", "Pilih minuman 1", "Pilih minuman 2", "Makanan Sampingan?", "Tambahan lain?"],
      preferenceData: [

        [{name:"Sambal Xtra Pedas",price:1000,checked:false,id:0},{name:"Sambal Terasi",price:1500,checked:false ,id:1},{name:'Sambal Kecap',price:2000 ,checked:false,id:2},
        ],

        [{name:"Air Putih",price:1000 ,checked:false,id:0 },{name:"Teh Tawar",price:3000 ,checked:false,id:1},{name:'Teh Manis Panas',price:4000,checked:false ,id:2},
        {name:'Teh Manis Dingin',price:5000 ,checked:false,id:3},{name:'Kopi Hitam',price:4000 ,checked:false,id:4},{name:'Fruit Tea Lemon',price:6000 ,checked:false,id:5},
        {name:'Pop Ice',price:4000 ,checked:false,id:6},{name:'Teh Sisri',price:3000 ,checked:false,id:7},
        ],

        [{name:"Air Putih",price:1000,checked:false ,id:0},{name:"Teh Tawar",price:3000 ,checked:false ,id:1},{name:'Teh Manis Panas',price:4000,checked:false ,id:2},
        {name:'Teh Manis Dingin',price:5000 ,checked:false,id:3},{name:'Kopi Hitam',price:4000 ,checked:false,id:4},{name:'Fruit Tea Lemon',price:6000,checked:false ,id:5},
        {name:'Pop Ice',price:4000,checked:false ,id:6},{name:'Teh Sisri',price:3000 ,checked:false,id:7},{name:'Kosong',price:0 ,checked:false,id:8},
          ],
            
        [{name:"Nasi Xtra",price:3000 ,checked:false,id:0},{name:"Lalapan",price:2000,checked:false ,id:1},{name:'Tempe & Tahu',price:2500,checked:false ,id:2},
        ],

        [
        {name:"NULL",price:0 ,checked:false,id:0},{name:"NULL",price:0 ,checked:false,id:1},{name:"NULL",price:0 ,checked:false,id:2},
        {name:"NULL",price:0 ,checked:false,id:3},{name:"NULL",price:0 ,checked:false,id:4},{name:"NULL",price:0 ,checked:false,id:5},
        {name:"NULL",price:0,checked:false ,id:6},{name:"NULL",price:0 ,checked:false,id:7},{name:"NULL",price:0,checked:false ,id:8},
        ],
        ],
        minimum_quatity:[2,1,2,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false], 
        id:1
    },
  
    {
      meal:"Nasi Ikan",
      price:10000,
      image:"https://cdn0-production-images-kly.akamaized.net/z0xbN5msqeMGS0ewDhX9qYWrsqA=/469x260/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2728727/original/051151100_1550134812-shutterstock_1208794342.jpg",
      details:"Dengan lauk ikan",
      preferenceTitle:["Pilih topping ekstra", "Pilih minuman 1", "Pilih minuman 2", "Makanan Sampingan?", "Tambahan lain?"],
      preferenceData: [

        [{name:"Sambal Xtra Pedas",price:1000,checked:false,id:0},{name:"Sambal Terasi",price:1500,checked:false ,id:1},{name:'Sambal Kecap',price:2000 ,checked:false,id:2},
        ],

        [{name:"Air Putih",price:1000 ,checked:false,id:0 },{name:"Teh Tawar",price:3000 ,checked:false,id:1},{name:'Teh Manis Panas',price:4000,checked:false ,id:2},
        {name:'Teh Manis Dingin',price:5000 ,checked:false,id:3},{name:'Kopi Hitam',price:4000 ,checked:false,id:4},{name:'Fruit Tea Lemon',price:6000 ,checked:false,id:5},
        {name:'Pop Ice',price:4000 ,checked:false,id:6},{name:'Teh Sisri',price:3000 ,checked:false,id:7},
        ],

        [{name:"Air Putih",price:1000,checked:false ,id:0},{name:"Teh Tawar",price:3000,checked:false ,id:1},{name:'Teh Manis Panas',price:4000,checked:false ,id:2},
        {name:'Teh Manis Dingin',price:5000 ,checked:false,id:3},{name:'Kopi Hitam',price:4000 ,checked:false,id:4},{name:'Fruit Tea Lemon',price:6000,checked:false ,id:5},
        {name:'Pop Ice',price:4000,checked:false ,id:6},{name:'Teh Sisri',price:3000 ,checked:false,id:7},{name:'Kosong',price:0 ,checked:false,id:8},
          ],
            
        [{name:"Nasi Xtra",price:3000 ,checked:false,id:0},{name:"Lalapan",price:2000,checked:false ,id:1},{name:'Tempe & Tahu',price:2500,checked:false ,id:2},
        ],

        [
        {name:"NULL",price:0 ,checked:false,id:0},{name:"NULL",price:0 ,checked:false,id:1},{name:"NULL",price:0 ,checked:false,id:2},
        {name:"NULL",price:0 ,checked:false,id:3},{name:"NULL",price:0 ,checked:false,id:4},{name:"NULL",price:0 ,checked:false,id:5},
        {name:"NULL",price:0,checked:false ,id:6},{name:"NULL",price:0 ,checked:false,id:7},{name:"NULL",price:0,checked:false ,id:8},
        ],
        ],

        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],   
      id:2
    },
  
    {
      meal:"Nasi Sayur",
      price:7000,
      image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/2d/32/1d/nasi-mie-ayam-sayur-super.jpg",
      details:"Menu klasik perpaduan nasi dengan sayur",
      preferenceTitle:["Pilih topping ekstra", "Pilih minuman 1", "Pilih minuman 2", "Makanan Sampingan?", "Tambahan lain?"],
      preferenceData: [

        [{name:"Sambal Xtra Pedas",price:1000,checked:false,id:0},{name:"Sambal Terasi",price:1500,checked:false ,id:1},{name:'Sambal Kecap',price:2000 ,checked:false,id:2},
        ],

        [{name:"Air Putih",price:1000 ,checked:false,id:0 },{name:"Teh Tawar",price:3000 ,checked:false,id:1},{name:'Teh Manis Panas',price:4000,checked:false ,id:2},
        {name:'Teh Manis Dingin',price:5000 ,checked:false,id:3},{name:'Kopi Hitam',price:4000 ,checked:false,id:4},{name:'Fruit Tea Lemon',price:6000 ,checked:false,id:5},
        {name:'Pop Ice',price:4000 ,checked:false,id:6},{name:'Teh Sisri',price:3000 ,checked:false,id:7},
        ],

        [{name:"Air Putih",price:1000,checked:false ,id:0},{name:"Teh Tawar",price:3000,checked:false ,id:1},{name:'Teh Manis Panas',price:4000,checked:false ,id:2},
        {name:'Teh Manis Dingin',price:5000 ,checked:false,id:3},{name:'Kopi Hitam',price:4000 ,checked:false,id:4},{name:'Fruit Tea Lemon',price:6000,checked:false ,id:5},
        {name:'Pop Ice',price:4000,checked:false ,id:6},{name:'Teh Sisri',price:3000 ,checked:false,id:7},{name:'Kosong',price:0 ,checked:false,id:8},
          ],
            
        [{name:"Nasi Xtra",price:3000 ,checked:false,id:0},{name:"Lalapan",price:2000,checked:false ,id:1},{name:'Tempe & Tahu',price:2500,checked:false ,id:2},
        ],

        [
        {name:"NULL",price:0 ,checked:false,id:0},{name:"NULL",price:0 ,checked:false,id:1},{name:"NULL",price:0 ,checked:false,id:2},
        {name:"NULL",price:0 ,checked:false,id:3},{name:"NULL",price:0 ,checked:false,id:4},{name:"NULL",price:0 ,checked:false,id:5},
        {name:"NULL",price:0,checked:false ,id:6},{name:"NULL",price:0 ,checked:false,id:7},{name:"NULL",price:0,checked:false ,id:8},
        ],
        ],
      
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],    
      id:3
    },
  
    
    { 
      
      meal:"Nasi Ayam", 
      price:10000,
      image:"https://cdns.klimg.com/dream.co.id/resized/640x320/news/2022/08/28/207691/menunya-komplet-paket-nasi-ayam-bakar-di-jakarta-ini-sanggup-obati-rasa-lapar-2208287.jpg",
      details:"Dengan Lauk ayam",
      
      preferenceTitle:["Pilih topping ekstra", "Pilih minuman 1", "Pilih minuman 2", "Makanan Sampingan?", "Tambahan lain?"],
      
      preferenceData: [

        [{name:"Sambal Xtra Pedas",price:1000,checked:false,id:0},{name:"Sambal Terasi",price:1500,checked:false ,id:1},{name:'Sambal Kecap',price:2000 ,checked:false,id:2},
        ],

        [{name:"Air Putih",price:1000 ,checked:false,id:0 },{name:"Teh Tawar",price:3000 ,checked:false,id:1},{name:'Teh Manis Panas',price:4000,checked:false ,id:2},
        {name:'Teh Manis Dingin',price:5000 ,checked:false,id:3},{name:'Kopi Hitam',price:4000 ,checked:false,id:4},{name:'Fruit Tea Lemon',price:6000 ,checked:false,id:5},
        {name:'Pop Ice',price:4000 ,checked:false,id:6},{name:'Teh Sisri',price:3000 ,checked:false,id:7},
        ],

        [{name:"Air Putih",price:1000,checked:false ,id:0},{name:"Teh Tawar",price:3000,checked:false ,id:1},{name:'Teh Manis Panas',price:4000,checked:false ,id:2},
        {name:'Teh Manis Dingin',price:5000 ,checked:false,id:3},{name:'Kopi Hitam',price:4000 ,checked:false,id:4},{name:'Fruit Tea Lemon',price:6000,checked:false ,id:5},
        {name:'Pop Ice',price:4000,checked:false ,id:6},{name:'Teh Sisri',price:3000 ,checked:false,id:7},{name:'Kosong',price:0 ,checked:false,id:8},
          ],
            
        [{name:"Nasi Xtra",price:3000 ,checked:false,id:0},{name:"Lalapan",price:2000,checked:false ,id:1},{name:'Tempe & Tahu',price:2500,checked:false ,id:2},
        ],

        [
        {name:"NULL",price:0 ,checked:false,id:0},{name:"NULL",price:0 ,checked:false,id:1},{name:"NULL",price:0 ,checked:false,id:2},
        {name:"NULL",price:0 ,checked:false,id:3},{name:"NULL",price:0 ,checked:false,id:4},{name:"NULL",price:0 ,checked:false,id:5},
        {name:"NULL",price:0,checked:false ,id:6},{name:"NULL",price:0 ,checked:false,id:7},{name:"NULL",price:0,checked:false ,id:8},
        ],
        ],

      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],     
      id:4
    },

    { 
      meal:"Nasi Sayur",
      price:7000,
      image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/2d/32/1d/nasi-mie-ayam-sayur-super.jpg",
      details:"Menu klasik perpaduan nasi dengan sayur",
      preferenceTitle:["Pilih topping ekstra", "Pilih minuman 1", "Pilih minuman 2", "Makanan Sampingan?", "Tambahan lain?"],
      preferenceData: [

                      [{name:"Sambal Xtra Pedas",price:1000,checked:false,id:10},{name:"Sambal Terasi",price:1500,checked:false ,id:11},{name:'Sambal Kecap',price:2000 ,checked:false,id:12},
                      ],

                      [{name:"Air Putih",price:1000 ,checked:false,id:13 },{name:"Teh Tawar",price:3000 ,checked:false,id:14},{name:'Teh Manis Panas',price:4000,checked:false ,id:15},
                      {name:'Teh Manis Dingin',price:5000 ,checked:false,id:16},{name:'Kopi Hitam',price:4000 ,checked:false,id:17},{name:'Fruit Tea Lemon',price:6000 ,checked:false,id:18},
                      {name:'Pop Ice',price:4000 ,checked:false,id:19},{name:'Teh Sisri',price:3000 ,checked:false,id:20},
                      ],

                      [{name:"Air Putih",price:1000,checked:false ,id:21},{name:"Teh Tawar",price:3000,checked:false ,id:22},{name:'Teh Manis Panas',price:4000,checked:false ,id:23},
                      {name:'Teh Manis Dingin',price:5000 ,checked:false,id:24},{name:'Kopi Hitam',price:4000 ,checked:false,id:25},{name:'Fruit Tea Lemon',price:6000,checked:false ,id:26},
                      {name:'Pop Ice',price:4000,checked:false ,id:27},{name:'Teh Sisri',price:3000 ,checked:false,id:28},{name:'Kosong',price:0 ,checked:false,id:29},
                        ],
                          
                      [{name:"Nasi Xtra",price:3000 ,checked:false,id:30},{name:"Lalapan",price:2000,checked:false ,id:31},{name:'Tempe & Tahu',price:2500,checked:false ,id:32},
                      ],

                      [
                      {name:"NULL",price:0 ,checked:false,id:33},{name:"NULL",price:0 ,checked:false,id:34},{name:"NULL",price:0 ,checked:false,id:35},
                      {name:"NULL",price:0 ,checked:false,id:36},{name:"NULL",price:0 ,checked:false,id:37},{name:"NULL",price:0 ,checked:false,id:38},
                      {name:"NULL",price:0,checked:false ,id:39},{name:"NULL",price:0 ,checked:false,id:40},{name:"NULL",price:0,checked:false ,id:41},
                      ],
                      ],
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],              
      id:5
    },
  
  ];