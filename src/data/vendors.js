const vendors = [  
    {    
        id: 'kafe-siddiq',    
        name: 'Cafe Mahallah Siddiq',    
        location: 'Mahallah Siddiq, Upper Floor',    
        openHours: '7:00 am - 11:30 pm',    
        isOpen: true,    
        
        menu: [  
            { id: 'sid-1', name: 'Chicken Chop', description: 'Deep-fried chicken thigh or breast with black pepper sauce, french fries, and coleslaw', price: 7.5, category: 'Western', available: true, special: true },        
            { id: 'sid-2', name: 'Kuey Teow Sup', description: 'Flat rice noodle soup with chicken slices', price: 6.00, category: 'Noodles', available: true },
            { id: 'sid-3', name: 'Nasi Ayam Gepuk', description: 'Lightly smashed fried chicken with Fried tempeh, sambal kacang, and rice', price: 6, category: 'Rice', available: true },      
            { id: 'sid-4', name: 'Nasi Lemak Ayam', description: 'Fragrant coconut rice with spiced fried chicken', price: 8.50, category: 'Rice', available: true },
            { id: 'sid-5', name: 'Nasi Goreng Kampung', description: 'Traditional fried rice with anchovies and kangkung', price: 7.00, category: 'Rice', available: true },
            { id: 'sid-6', name: 'Nasi Kukus Ayam Berempah', description: 'Steamed rice served with aromatic curry and chicken', price: 8.50, category: 'Rice', available: true },
            { id: 'sid-7', name: 'Teh Tarik', description: 'Classic Malaysian pulled milk tea', price: 2.50, category: 'Drinks', available: true },  
            { id: 'sid-8', name: 'Teh Ais', description: 'iced milk tea served cold with ice.', price: 2.5, category: 'Drinks', available: false },    
        ],  
    },  
    
    {    
        id: 'kafe-aminah',    
        name: 'Kafe Mahallah Aminah',    
        location: 'Mahallah Aminah, Ground Floor',    
        openHours: '8:00 am - 9:00 pm',    
        isOpen: true,    
        
        menu: [      
            { id: 'ami-1', name: 'Nasi Ayam Penyet', description: 'Smashed fried chicken with sambal and rice', price: 6, category: 'Rice', available: true, special: true },      
            { id: 'ami-2', name: 'Laksa Johor', description: 'Spaghetti in spicy fish gravy with herbs', price: 8.00, category: 'Noodles', available: true },
            { id: 'ami-3', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },    
        ],  
    }, 

    {
    id: 'kafe-faruq',
    name: 'Kafe Mahallah Faruq',
    location: 'Mahallah Faruq, Block B',
    openHours: '6:00 pm - 1:00 am',
    isOpen: true,
    menu: [
        { id: 'far-1', name: 'Nasi Kukus Ayam Berempah', description: 'Steamed rice served with aromatic curry and chicken', price: 6.50, category: 'Rice', available: true, special: true },
        { id: 'far-2', name: 'Roti Canai', description: 'Crispy flatbread served with dhal and curry', price: 2.00, category: 'Roti', available: true },
        { id: 'far-3', name: 'Milo Ais', description: 'Iced chocolate malt beverage', price: 3.50, category: 'Drinks', available: true }
    ]
  }

] 

export default vendors
