export const menu = [
    {
      id: 1,
      title: "Main",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: "home2.png",
        },
        {
          id: 2,
          title: "Profile",
          url: "/users/1",
          icon: "user2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "users2.png",
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: "product.png",
        },
        {
          id: 3,
          title: "Orders",
          url: "/",
          icon: "order.png",
        },
        {
          id: 4,
          title: "Posts",
          url: "/",
          icon: "posts.png",
        },
      ],
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/",
          icon: "elements.png",
        },
        {
          id: 2,
          title: "Notes",
          url: "/",
          icon: "note.png",
        },
        {
          id: 3,
          title: "Forms",
          url: "/",
          icon: "form.png",
        },
        {
          id: 4,
          title: "Calendar",
          url: "/",
          icon: "calendar.png",
        },
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "setting.png",
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: "backup.png",
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "chart.png",
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "log.png",
        },
      ],
    },
  ];
  
  export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "Flora Williams",
      email: "FWilliams@gmail.com",
      amount: "14,295",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Charlotte Platt",
      email: "CPlatt@gmail.com",
      amount: "13,256",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Tom Fisher",
      email: "FisherTom@gmail.com",
      amount: "12,998",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Sophia Donaldson",
      email: "SDonaldson@gmail.com",
      amount: "12,512",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Mathias Thomas",
      email: "MathiasMail@gmail.com",
      amount: "8,134",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Rory Smith",
      email: "RSmith@gmail.com",
      amount: "7,932",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Robert Angler",
      email: "RAngler@gmail.com",
      amount: "7,560",
    },
  ];
  
  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 450 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 450 },
    ],
  };
  
  export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 3000,
      },
      {
        name: "Mon",
        profit: 3500,
      },
      {
        name: "Tue",
        profit: 4000,
      },
      {
        name: "Wed",
        profit: 3780,
      },
      {
        name: "Thu",
        profit: 5890,
      },
      {
        name: "Fri",
        profit: 7390,
      },
      {
        name: "Sat",
        profit: 7490,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 3000,
      },
      {
        name: "Mon",
        visit: 2000,
      },
      {
        name: "Tue",
        visit: 2500,
      },
      {
        name: "Wed",
        visit: 3780,
      },
      {
        name: "Thu",
        visit: 3890,
      },
      {
        name: "Fri",
        visit: 4390,
      },
      {
        name: "Sat",
        visit: 5490,
      },
    ],
  };
  
  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Williams",
      firstName: "Flora",
      email: "FWilliams@gmail.com",
      phone: "925-469-2244",
      createdAt: "01.01.2024",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Charlotte",
      firstName: "Platt",
      email: "CPlatt@gmail.com",
      phone: "925-889-9949",
      createdAt: "01.01.2024",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Fisher",
      firstName: "Tom",
      email: "FisherTom@gmail.com",
      phone: "484-955-2233",
      createdAt: "01.01.2024",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Donaldson",
      firstName: "Sophia",
      email: "SDonaldson@gmail.com",
      phone: "610-225-3939",
      createdAt: "01.01.2024",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Thomas",
      firstName: "Mathias",
      email: "MathiasMail@gmail.com",
      phone: "744-227-2323",
      createdAt: "01.01.2024",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Wilson",
      firstName: "Harry",
      email: "HWilson@gmail.com",
      phone: "727-444-2332",
      createdAt: "01.01.2024",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Ryan",
      email: "RWilliams@gmail.com",
      phone: "111-222-3232",
      createdAt: "01.01.2024",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Robert",
      firstName: "Willis",
      email: "RWillis@gmail.com",
      phone: "773-232-7744",
      createdAt: "01.01.2024",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Phillips",
      firstName: "Lauren",
      email: "PhillipsFamily@gmail.com",
      phone: "884-232-2233",
      createdAt: "01.01.2024",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Shelton",
      firstName: "Carson",
      email: "CShelton@gmail.com",
      phone: "484-222-3334",
      createdAt: "01.01.2024",
      verified: true,
    },
  ];
  
  export const products = [
    {
      id: 1,
      img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      title: "Playstation 5 Digital Edition",
      color: "white",
      producer: "Sony",
      price: "$450.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 2,
      img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
      title: "Dell Laptop KR211822",
      color: "black",
      producer: "Dell",
      price: "$499.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 3,
      img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
      title: "Samsung TV 4K SmartTV",
      color: "gray",
      producer: "Samsung",
      price: "$999.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 4,
      img: "https://d2e6ccujb3mkqf.cloudfront.net/d384e509-3376-4405-995a-06dab8996a39-1_1e5bdda1-962b-48df-b2c3-978a4764b511.jpg",
      title: "Apple Iphone 14 Pro Max",
      color: "white",
      producer: "Apple",
      price: "$799.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 5,
      img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
      title: "Philips Hue Play Gradient",
      color: "rainbow",
      producer: "Philips",
      price: "$39.99",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
      title: "Logitech MX Master 3",
      color: "black",
      producer: "Logitech",
      price: "$59.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 7,
      img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
      title: "Rode Podcast Microphone",
      color: "gray",
      producer: "Rode",
      price: "$119.49",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
      title: "Toshiba Split AC 2",
      color: "white",
      producer: "Toshiba",
      price: "$899.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 9,
      img: "https://i5.walmartimages.com/seo/Sony-65-Class-BRAVIA-XR-A95L-QD-OLED-4K-HDR-Smart-TV-with-Google-TV-XR65A95L-2023-Model_654eb493-3487-47e7-b884-42b75c5373a0.b640b25d4238dec80e3cf2cffc5981c6.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
      title: "Sony Bravia KDL-47W805A",
      color: "black",
      producer: "Sony",
      price: "$970.49",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
      title: "Acer Laptop 16 KL-4804",
      color: "black",
      producer: "Acer",
      price: "$599.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
  ];
  
  
  
  export const singleUser = {
    id: 1,
    title: "Jack Thompson",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      username: "JackT33",
      fullname: "Jack Thompson",
      email: "Jack.Thompss@gmail.com",
      phone: "XXX-XXX-XXXX",
      status: "Verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 400,
          clicks: 240,
        },
        {
          name: "Mon",
          visits: 300,
          clicks: 140,
        },
        {
          name: "Tue",
          visits: 200,
          clicks: 380,
        },
        {
          name: "Wed",
          visits: 278,
          clicks: 390,
        },
        {
          name: "Thu",
          visits: 189,
          clicks: 480,
        },
        {
          name: "Fri",
          visits: 239,
          clicks: 380,
        },
        {
          name: "Sat",
          visits: 349,
          clicks: 430,
        },
      ],
    },
    activities: [
      {
        text: "Jack Thompson purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Jack Thompson added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Jack Thompson purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "Jack Thompson reviewed a product 5-Stars",
        time: "1 month ago",
      },
      {
        text: "Jack Thompson added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Jack Thompson reviewed a product",
        time: "2 months ago",
      },
    ],
  };
  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
      productId: "Ps5SDF1156d",
      color: "white",
      price: "$250.99",
      producer: "Sony",
      export: "Japan",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Jack Thompson purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Jack Thompson added Playstation 5 Digital Edition into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Jack Thompson purchased Playstation 5 Digital Edition",
        time: "2 weeks ago",
      },
      {
        text: "Jack Thompson reviewed the product",
        time: "1 month ago",
      },
      {
        text: "Jack Thompson added Playstation 5 Digital Edition into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Jack Thompson reviewed the product",
        time: "2 months ago",
      },
    ],
  };