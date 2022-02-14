let menus = [
    {
        id: 1,
        title: "burger(large)",
        category: "burger",
        price: 10.00,
        img: "/myimg/foods/burger.png",
    },
    {
        id: 2,
        title: "burger(small)",
        category: "burger",
        price: 8.80,
        img: "/myimg/foods/burger.png",
    },
    {
        id: 3,
        title: "top sale",
        category: "topsale",
        price: 20.00,
        img: "/myimg/foods/topsale1.png",
    },
    {
        id: 4,
        title: "avocado",
        category: "drinks",
        price: 5,
        img: "/myimg/foods/avocado.png",
    },
    {
        id: 5,
        title: "beer",
        category: "drinks",
        price: 4,
        img: "/myimg/foods/beer.png",
    },
    {
        id: 6,
        title: "bubble tea",
        category: "drinks",
        price: 6,
        img: "/myimg/foods/bubble_tea.png",
    },
    {
        id: 7,
        title: "cronssant",
        category: "snacks",
        price: 6,
        img: "/myimg/foods/cronssant.png",
    },
    {
        id: 8,
        title: "kiwi",
        category: "drinks",
        price: 3,
        img: "/myimg/foods/kiwi.png",
    },
    {
        id: 9,
        title: "lemon",
        category: "drinks",
        price: 3,
        img: "/myimg/foods/lemon.png",
    },
    {
        id: 10,
        title: "orange",
        category: "drinks",
        price: 3,
        img: "/myimg/foods/orange.png",
    },
    {
        id: 11,
        title: "pepsi",
        category: "drinks",
        price: 3,
        img: "/myimg/foods/pepsi.png",
    },
    {
        id: 12,
        title: "sandwich",
        category: "snacks",
        price: 3,
        img: "/myimg/foods/sandwich.png",
    },
    {
        id: 13,
        title: "soup",
        category: "snacks",
        price: 3,
        img: "/myimg/foods/soup.png",
    },
    {
        id: 14,
        title: "strawberries and apples",
        category: "drinks",
        price: 3,
        img: "/myimg/foods/strawberries_and_apples.png",
    },
    {
        id: 15,
        title: "swiss roll",
        category: "snacks",
        price: 3,
        img: "/myimg/foods/swiss_roll.png",
    },
    {
        id: 16,
        title: "wrap",
        category: "snacks",
        price: 3,
        img: "/myimg/foods/wrap.png",
    },
    {
        id: 17,
        title: "yogurt",
        category: "drinks",
        price: 3,
        img: "/myimg/foods/yogurt.png",
    }
  ]
  
  toShow(menus);
  
  function toShow(x) {
    $('#menu-items').empty();
    x.map((product) => {
        $('#menu-items').append(`
    <div class="col-lg-3 col-md-6 col-12 my-5">
    <div class="menu-item text-center d-flex align-items-center justify-content-center">
      <div class="menu-item-content">
        <img src="${product.img}" alt="" />
        <h6 class="text-uppercase fw-bolder">${product.title}</h6>
        <p class="fw-bolder">$${product.price}</p>
        <button class="cusBtn">delivery</button>
        <button class="cusBtn">pick Up</button>
      </div>
    </div>
  </div>
    `);
    })
  }
  
  //   search bar
  
  $("#search").on("keyup", function () {
    let keyword = $(this).val().toLowerCase();
  
    let filterProducts = menus.filter((menu) => {
      if (menu.title.toLowerCase().indexOf(keyword) > -1) {
        return menu;
      }
    });
    toShow(filterProducts);
  });
  
  //   slelct category
  $("#category").on("change", function () {
    let selectedCategory = $(this).val();
  
    if (selectedCategory != 0) {
      let filterProducts = menus.filter((product) => {
        if (product.category === selectedCategory) {
          return product;
        }
      });
      toShow(filterProducts);
    } else {
      toShow(menus);
    }
  });
  
  
  