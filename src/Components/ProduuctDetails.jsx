const productDetails = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      price: 29.99,
      title: 'Grilled Chicken',
      category: 'Fast Food'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D',
      price: 19.99,
      title: 'Biryani',
      category: 'Desi Food'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      price: 39.99,
      title: 'Salad',
      category: 'Healthy Food'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D',
      price: 49.99,
      title: 'Pulao',
      category: 'Desi Food'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RlYWt8ZW58MHx8MHx8fDA%3D',
      price: 59.99,
      title: 'Grilled Steak',
      category: 'Grilled Food'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8fDA%3D',
      price: 34.99,
      title: 'Sushi',
      category: 'Japanese Food'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFjbyUyMGJlcm9zfGVufDB8fDB8fHww%3D',
      price: 24.99,
      title: 'Taco',
      category: 'Mexican Food'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D',
      price: 22.99,
      title: 'Pasta',
      category: 'Italian Food'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3NlJTIwYnVyZ2VyfGVufDB8fDB8fHww',
      price: 14.99,
      title: 'Cheeseburger',
      category: 'Fast Food'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FuZHdpY2glMjBzZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 9.99,
      title: 'Sandwich',
      category: 'Fast Food'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1662116765994-1e4200c43589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNoYXdhcm1hfGVufDB8fDB8fHww',
      price: 54.99,
      title: 'Shawarma',
      category: 'Middle Eastern Food'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzaGl8ZW58MHx8MHx8fDA%3D',
      price: 44.99,
      title: 'Salmon Sushi',
      category: 'Japanese Food'
    },
    {
      id: 13,
      image: 'https://images.unsplash.com/photo-1528658948776-cf610b846f80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhZ2UlMjBjYXJib25hcmF8ZW58MHx8MHx8fDA%3D',
      price: 28.99,
      title: 'Spaghetti Carbonara',
      category: 'Italian Food'
    },
    {
      id: 14,
      image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFtZW58ZW58MHx8MHx8fDA%3D',
      price: 18.99,
      title: 'Ramen',
      category: 'Japanese Food'
    },
    {
      id: 15,
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D',
      price: 12.99,
      title: 'Chicken Biryani',
      category: 'Desi Food'
    }
  ];
  
  export default productDetails;
  