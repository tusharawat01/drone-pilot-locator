const dummyData = [
  // Delhi Region (20 entries)
  {
    name: "Amit Sharma",
    profileImage: "https://example.com/profiles/amitsharma.jpg",
    workExperience: 4, // in years
    location: {
      address: "Sector 22, Dwarka, New Delhi",
      coordinates: {
        lat: 28.5733,
        lng: 77.0126
      }
    }
  },
  {
    name: "Priya Singh",
    profileImage: "https://example.com/profiles/priyasingh.jpg",
    workExperience: 3, // in years
    location: {
      address: "Hauz Khas, New Delhi",
      coordinates: {
        lat: 28.5477,
        lng: 77.2065
      }
    }
  },
  {
    name: "Rahul Verma",
    profileImage: "https://example.com/profiles/rahulverma.jpg",
    workExperience: 5,
    location: {
      address: "Connaught Place, New Delhi",
      coordinates: {
        lat: 28.6315,
        lng: 77.2167
      }
    }
  },
  {
    name: "Neha Gupta",
    profileImage: "https://example.com/profiles/nehagupta.jpg",
    workExperience: 2,
    location: {
      address: "Lajpat Nagar, New Delhi",
      coordinates: {
        lat: 28.5679,
        lng: 77.2425
      }
    }
  },
  {
    name: "Ankur Kumar",
    profileImage: "https://example.com/profiles/ankurkumar.jpg",
    workExperience: 3,
    location: {
      address: "Vasant Kunj, New Delhi",
      coordinates: {
        lat: 28.5291,
        lng: 77.1543
      }
    }
  },
  {
    name: "Sneha Kapoor",
    profileImage: "https://example.com/profiles/snehakapoor.jpg",
    workExperience: 4,
    location: {
      address: "Saket, New Delhi",
      coordinates: {
        lat: 28.5245,
        lng: 77.2066
      }
    }
  },
  {
    name: "Ajay Kumar",
    profileImage: "https://example.com/profiles/ajaykumar.jpg",
    workExperience: 6,
    location: {
      address: "Rohini, New Delhi",
      coordinates: {
        lat: 28.7041,
        lng: 77.1025
      }
    }
  },
  {
    name: "Shweta Singh",
    profileImage: "https://example.com/profiles/shwetasingh.jpg",
    workExperience: 5,
    location: {
      address: "Pitampura, New Delhi",
      coordinates: {
        lat: 28.7035,
        lng: 77.1322
      }
    }
  },
  {
    name: "Vikram Mehta",
    profileImage: "https://example.com/profiles/vikrammehta.jpg",
    workExperience: 4,
    location: {
      address: "Karol Bagh, New Delhi",
      coordinates: {
        lat: 28.6526,
        lng: 77.1891
      }
    }
  },
  {
    name: "Pooja Sharma",
    profileImage: "https://example.com/profiles/poojasharma.jpg",
    workExperience: 3,
    location: {
      address: "Mayur Vihar, New Delhi",
      coordinates: {
        lat: 28.6006,
        lng: 77.2945
      }
    }
  },
  {
    name: "Deepak Malhotra",
    profileImage: "https://example.com/profiles/deepakmalhotra.jpg",
    workExperience: 4,
    location: {
      address: "South Extension, New Delhi",
      coordinates: {
        lat: 28.5671,
        lng: 77.2212
      }
    }
  },
  {
    name: "Reena Khanna",
    profileImage: "https://example.com/profiles/reenakhanna.jpg",
    workExperience: 3,
    location: {
      address: "Dwarka Sector 10, New Delhi",
      coordinates: {
        lat: 28.5845,
        lng: 77.0657
      }
    }
  },
  {
    name: "Rohit Kapoor",
    profileImage: "https://example.com/profiles/rohitkapoor.jpg",
    workExperience: 5,
    location: {
      address: "Greater Kailash, New Delhi",
      coordinates: {
        lat: 28.5273,
        lng: 77.2284
      }
    }
  },
  {
    name: "Suman Gupta",
    profileImage: "https://example.com/profiles/sumangupta.jpg",
    workExperience: 2,
    location: {
      address: "Rajouri Garden, New Delhi",
      coordinates: {
        lat: 28.6423,
        lng: 77.1166
      }
    }
  },
  {
    name: "Vivek Singh",
    profileImage: "https://example.com/profiles/viveksingh.jpg",
    workExperience: 3,
    location: {
      address: "Paschim Vihar, New Delhi",
      coordinates: {
        lat: 28.6692,
        lng: 77.091,
      }
    }
  },
  {
    name: "Anita Mehra",
    profileImage: "https://example.com/profiles/anitamehra.jpg",
    workExperience: 4,
    location: {
      address: "Janakpuri, New Delhi",
      coordinates: {
        lat: 28.6219,
        lng: 77.0878
      }
    }
  },
  {
    name: "Sanjay Gupta",
    profileImage: "https://example.com/profiles/sanjaygupta.jpg",
    workExperience: 5,
    location: {
      address: "Shahdara, New Delhi",
      coordinates: {
        lat: 28.675,
        lng: 77.2891
      }
    }
  },
  {
    name: "Kavita Sharma",
    profileImage: "https://example.com/profiles/kavitasharma.jpg",
    workExperience: 3,
    location: {
      address: "Patel Nagar, New Delhi",
      coordinates: {
        lat: 28.6459,
        lng: 77.1535
      }
    }
  },
  {
    name: "Arjun Kapoor",
    profileImage: "https://example.com/profiles/arjunkapoor.jpg",
    workExperience: 6,
    location: {
      address: "Nehru Place, New Delhi",
      coordinates: {
        lat: 28.5494,
        lng: 77.2528
      }
    }
  },
  {
    name: "Meera Sharma",
    profileImage: "https://example.com/profiles/meerasharma.jpg",
    workExperience: 4,
    location: {
      address: "Malviya Nagar, New Delhi",
      coordinates: {
        lat: 28.5286,
        lng: 77.2196
      }
    }
  },
  // Other Regions (80 entries)
  {
    name: "John Doe",
    profileImage: "https://example.com/profiles/johndoe.jpg",
    workExperience: 6,
    location: {
      address: "Bangalore",
      coordinates: {
        lat: 12.9716,
        lng: 77.5946
      }
    }
  },
  {
    name: "Emma Brown",
    profileImage: "https://example.com/profiles/emmabrown.jpg",
    workExperience: 4,
    location: {
      address: "Mumbai",
      coordinates: {
        lat: 19.076,
        lng: 72.8777
      }
    }
  },
  {
    name: "Alex Smith",
    profileImage: "https://example.com/profiles/alexsmith.jpg",
    workExperience: 3,
    location: {
      address: "Chennai",
      coordinates: {
        lat: 13.0827,
        lng: 80.2707
      }
    }
  },
  {
    name: "Sophia Williams",
    profileImage: "https://example.com/profiles/sophiawilliams.jpg",
    workExperience: 5,
    location: {
      address: "Hyderabad",
      coordinates: {
        lat: 17.385,
        lng: 78.4867
      }
    }
  },
  {
    name: "Michael Johnson",
    profileImage: "https://example.com/profiles/michaeljohnson.jpg",
    workExperience: 2,
    location: {
      address: "Pune",
      coordinates: {
        lat: 18.5204,
        lng: 73.8567
      }
    }
  },
  {
    name: "Julia Fernandez",
    profileImage: "https://example.com/profiles/juliafernandez.jpg",
    workExperience: 4,
    location: {
      address: "Goa",
      coordinates: {
        lat: 15.2993,
        lng: 74.124,
      }
    }
  },
  {
    name: "David Lee",
    profileImage: "https://example.com/profiles/davidlee.jpg",
    workExperience: 3,
    location: {
      address: "Jaipur",
      coordinates: {
        lat: 26.9124,
        lng: 75.7873
      }
    }
  },
  {
    name: "Lily Gupta",
    profileImage: "https://example.com/profiles/lilygupta.jpg",
    workExperience: 5,
    location: {
      address: "Lucknow",
      coordinates: {
        lat: 26.8467,
        lng: 80.9462
      }
    }
  },
  {
    name: "Ryan Patel",
    profileImage: "https://example.com/profiles/ryanpatel.jpg",
    workExperience: 3,
    location: {
      address: "Ahmedabad",
      coordinates: {
        lat: 23.0225,
        lng: 72.5714
      }
    }
  },
  {
    name: "Sophie Thomas",
    profileImage: "https://example.com/profiles/sophiethomas.jpg",
    workExperience: 4,
    location: {
      address: "Kolkata",
      coordinates: {
        lat: 22.5726,
        lng: 88.3639
      }
    }
  },
  {
    name: "Mark Wilson",
    profileImage: "https://example.com/profiles/markwilson.jpg",
    workExperience: 5,
    location: {
      address: "Chandigarh",
      coordinates: {
        lat: 30.7333,
        lng: 76.7794
      }
    }
  },
  {
    name: "Jessica Lee",
    profileImage: "https://example.com/profiles/jessicalee.jpg",
    workExperience: 2,
    location: {
      address: "Indore",
      coordinates: {
        lat: 22.7196,
        lng: 75.8577
      }
    }
  },
  {
    name: "Aryan Gupta",
    profileImage: "https://example.com/profiles/aryangupta.jpg",
    workExperience: 3,
    location: {
      address: "Surat",
      coordinates: {
        lat: 21.1702,
        lng: 72.8311
      }
    }
  },
  {
    name: "Amelia Johnson",
    profileImage: "https://example.com/profiles/ameliajohnson.jpg",
    workExperience: 4,
    location: {
      address: "Visakhapatnam",
      coordinates: {
        lat: 17.6868,
        lng: 83.2185
      }
    }
  },
  {
    name: "Anil Kumar",
    profileImage: "https://example.com/profiles/anilKumar.jpg",
    workExperience: 5,
    location: {
      address: "Rajendra Nagar, New Delhi",
      coordinates: {
        lat: 28.6425,
        lng: 77.1706
      }
    }
  },
  {
    name: "Seema Verma",
    profileImage: "https://example.com/profiles/seemaVerma.jpg",
    workExperience: 3,
    location: {
      address: "Rohini Sector 15, New Delhi",
      coordinates: {
        lat: 28.7265,
        lng: 77.124
      }
    }
  },
  {
    name: "Ravi Kumar",
    profileImage: "https://example.com/profiles/raviKumar.jpg",
    workExperience: 4,
    location: {
      address: "Saket, New Delhi",
      coordinates: {
        lat: 28.5245,
        lng: 77.2066
      }
    }
  },
  {
    name: "Geeta Sharma",
    profileImage: "https://example.com/profiles/geetaSharma.jpg",
    workExperience: 5,
    location: {
      address: "Sarita Vihar, New Delhi",
      coordinates: {
        lat: 28.5236,
        lng: 77.2969
      }
    }
  },
  {
    name: "Aman Malhotra",
    profileImage: "https://example.com/profiles/amanMalhotra.jpg",
    workExperience: 2,
    location: {
      address: "Laxmi Nagar, New Delhi",
      coordinates: {
        lat: 28.6304,
        lng: 77.2772
      }
    }
  },
  {
    name: "Sneha Khanna",
    profileImage: "https://example.com/profiles/snehaKhanna.jpg",
    workExperience: 3,
    location: {
      address: "Mayur Vihar, New Delhi",
      coordinates: {
        lat: 28.6006,
        lng: 77.2945
      }
    }
  },
  {
  name: "John Smith",
    profileImage: "https://example.com/profiles/johnsmith.jpg",
    workExperience: 3,
    location: {
      address: "Mumbai",
      coordinates: {
        lat: 19.076,
        lng: 72.8777
      }
    }
  },
  {
    name: "Emily Brown",
    profileImage: "https://example.com/profiles/emilybrown.jpg",
    workExperience: 4,
    location: {
      address: "Bangalore",
      coordinates: {
        lat: 12.9716,
        lng: 77.5946
      }
    }
  },
  {
    name: "Michael Johnson",
    profileImage: "https://example.com/profiles/michaeljohnson.jpg",
    workExperience: 5,
    location: {
      address: "Chennai",
      coordinates: {
        lat: 13.0827,
        lng: 80.2707
      }
    }
  },
  {
    name: "Sophia Williams",
    profileImage: "https://example.com/profiles/sophiawilliams.jpg",
    workExperience: 3,
    location: {
      address: "Hyderabad",
      coordinates: {
        lat: 17.385,
        lng: 78.4867
      }
    }
  },
  {
    name: "Daniel Miller",
    profileImage: "https://example.com/profiles/danielmiller.jpg",
    workExperience: 4,
    location: {
      address: "Pune",
      coordinates: {
        lat: 18.5204,
        lng: 73.8567
      }
    }
  },
  {
    name: "Olivia Jones",
    profileImage: "https://example.com/profiles/oliviajones.jpg",
    workExperience: 5,
    location: {
      address: "Kochi",
      coordinates: {
        lat: 9.9312,
        lng: 76.2673
      }
    }
  },
  {
    name: "Matthew Davis",
    profileImage: "https://example.com/profiles/matthewdavis.jpg",
    workExperience: 3,
    location: {
      address: "Jaipur",
      coordinates: {
        lat: 26.9124,
        lng: 75.7873
      }
    }
  },
  {
    name: "Emma Wilson",
    profileImage: "https://example.com/profiles/emmawilson.jpg",
    workExperience: 4,
    location: {
      address: "Lucknow",
      coordinates: {
        lat: 26.8467,
        lng: 80.9462
      }
    }
  },
  {
    name: "Noah Garcia",
    profileImage: "https://example.com/profiles/noahgarcia.jpg",
    workExperience: 5,
    location: {
      address: "Ahmedabad",
      coordinates: {
        lat: 23.0225,
        lng: 72.5714
      }
    }
  },
  {
    name: "Isabella Martinez",
    profileImage: "https://example.com/profiles/isabellamartinez.jpg",
    workExperience: 3,
    location: {
      address: "Kolkata",
      coordinates: {
        lat: 22.5726,
        lng: 88.3639
      }
    }
  },
  {
    name: "Ethan Rodriguez",
    profileImage: "https://example.com/profiles/ethanrodriguez.jpg",
    workExperience: 4,
    location: {
      address: "Chandigarh",
      coordinates: {
        lat: 30.7333,
        lng: 76.7794
      }
    }
  },
  {
    name: "Ava Hernandez",
    profileImage: "https://example.com/profiles/avahernandez.jpg",
    workExperience: 5,
    location: {
      address: "Indore",
      coordinates: {
        lat: 22.7196,
        lng: 75.8577
      }
    }
  },
  {
    name: "James Wilson",
    profileImage: "https://example.com/profiles/jameswilson.jpg",
    workExperience: 3,
    location: {
      address: "Surat",
      coordinates: {
        lat: 21.1702,
        lng: 72.8311
      }
    }
  },
  {
    name: "Mia Lopez",
    profileImage: "https://example.com/profiles/mialopez.jpg",
    workExperience: 4,
    location: {
      address: "Visakhapatnam",
      coordinates: {
        lat: 17.6868,
        lng: 83.2185
      }
    }
  },
  {
    name: "Logan Moore",
    profileImage: "https://example.com/profiles/loganmoore.jpg",
    workExperience: 5,
    location: {
      address: "Bhopal",
      coordinates: {
        lat: 23.2599,
        lng: 77.4126
      }
    }
  },
  {
    name: "Harper Taylor",
    profileImage: "https://example.com/profiles/harpertaylor.jpg",
    workExperience: 3,
    location: {
      address: "Nagpur",
      coordinates: {
        lat: 21.1458,
        lng: 79.0882
      }
    }
  },
  {
    name: "Lucas Anderson",
    profileImage: "https://example.com/profiles/lucasanderson.jpg",
    workExperience: 4,
    location: {
      address: "Gurgaon",
      coordinates: {
        lat: 28.4595,
        lng: 77.0266
      }
    }
  },
  {
    name: "Ella Thomas",
    profileImage: "https://example.com/profiles/ellathomas.jpg",
    workExperience: 5,
    location: {
      address: "Faridabad",
      coordinates: {
        lat: 28.4089,
        lng: 77.3178
      }
    }
  },
  {
    name: "Liam Clark",
    profileImage: "https://example.com/profiles/liamclark.jpg",
    workExperience: 2,
    location: {
      address: "Noida",
      coordinates: {
        lat: 28.5355,
        lng: 77.391
      }
    }
  },
  {
    name: "Avery Lewis",
    profileImage: "https://example.com/profiles/averylewis.jpg",
    workExperience: 3,
    location: {
      address: "Jaipur",
      coordinates: {
        lat: 26.9124,
        lng: 75.7873
      }
    }
  },
  {
    name: "Evelyn Young",
    profileImage: "https://example.com/profiles/evelynyoung.jpg",
    workExperience: 4,
    location: {
      address: "Lucknow",
      coordinates: {
        lat: 26.8467,
        lng: 80.9462
      }
    }
  },
  {
    name: "Owen King",
    profileImage: "https://example.com/profiles/owenking.jpg",
    workExperience: 5,
    location: {
      address: "Ahmedabad",
      coordinates: {
        lat: 23.0225,
        lng: 72.5714
      }
    }
  },
  {
    name: "Scarlett Scott",
    profileImage: "https://example.com/profiles/scarlettscott.jpg",
    workExperience: 3,
    location: {
      address: "Kolkata",
      coordinates: {
        lat: 22.5726,
        lng: 88.3639
      }
    }
  },
  {
    name: "Elijah Wright",
    profileImage: "https://example.com/profiles/elijahwright.jpg",
    workExperience: 4,
    location: {
      address: "Chandigarh",
      coordinates: {
        lat: 30.7333,
        lng: 76.7794
      }
    }
  },
  {
    name: "Grace Green",
    profileImage: "https://example.com/profiles/gracegreen.jpg",
    workExperience: 5,
    location: {
      address: "Indore",
      coordinates: {
        lat: 22.7196,
        lng: 75.8577
      }
    }
  },
  {
    name: "Benjamin Walker",
    profileImage: "https://example.com/profiles/benjaminwalker.jpg",
    workExperience: 3,
    location: {
      address: "Surat",
      coordinates: {
        lat: 21.1702,
        lng: 72.8311
      }
    }
  },
  {
    name: "Zoe Hall",
    profileImage: "https://example.com/profiles/zoehall.jpg",
    workExperience: 4,
    location: {
      address: "Visakhapatnam",
      coordinates: {
        lat: 17.6868,
        lng: 83.2185
      }
    }
  },
  {
    name: "John Doe",
    profileImage: "https://example.com/profiles/johndoe.jpg",
    workExperience: 3,
    location: {
      address: "New York City, USA",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    }
  },
  {
    name: "Jane Smith",
    profileImage: "https://example.com/profiles/janesmith.jpg",
    workExperience: 4,
    location: {
      address: "Los Angeles, USA",
      coordinates: {
        lat: 34.0522,
        lng: -118.2437
      }
    }
  },
  {
    name: "Michael Johnson",
    profileImage: "https://example.com/profiles/michaeljohnson.jpg",
    workExperience: 5,
    location: {
      address: "London, UK",
      coordinates: {
        lat: 51.5074,
        lng: -0.1278
      }
    }
  },
  {
    name: "Emily Brown",
    profileImage: "https://example.com/profiles/emilybrown.jpg",
    workExperience: 3,
    location: {
      address: "Sydney, Australia",
      coordinates: {
        lat: -33.8688,
        lng: 151.2093
      }
    }
  },
  {
    name: "Daniel Miller",
    profileImage: "https://example.com/profiles/danielmiller.jpg",
    workExperience: 4,
    location: {
      address: "Toronto, Canada",
      coordinates: {
        lat: 43.65107,
        lng: -79.347015
      }
    }
  },
  {
    name: "Sophia Wilson",
    profileImage: "https://example.com/profiles/sophiawilson.jpg",
    workExperience: 2,
    location: {
      address: "Paris, France",
      coordinates: {
        lat: 48.8566,
        lng: 2.3522
      }
    }
  },
  {
    name: "David Garcia",
    profileImage: "https://example.com/profiles/davidgarcia.jpg",
    workExperience: 3,
    location: {
      address: "Madrid, Spain",
      coordinates: {
        lat: 40.4165,
        lng: -3.70256
      }
    }
  },
  {
    name: "Emma Martinez",
    profileImage: "https://example.com/profiles/emmamartinez.jpg",
    workExperience: 4,
    location: {
      address: "Berlin, Germany",
      coordinates: {
        lat: 52.5200,
        lng: 13.4050
      }
    }
  },
  {
    name: "James Lee",
    profileImage: "https://example.com/profiles/jameslee.jpg",
    workExperience: 5,
    location: {
      address: "Seoul, South Korea",
      coordinates: {
        lat: 37.5665,
        lng: 126.9780
      }
    }
  },
  {
    name: "Olivia Taylor",
    profileImage: "https://example.com/profiles/oliviataylor.jpg",
    workExperience: 3,
    location: {
      address: "Tokyo, Japan",
      coordinates: {
        lat: 35.6895,
        lng: 139.6917
      }
    }
  },
  {
    name: "Noah Brown",
    profileImage: "https://example.com/profiles/noahbrown.jpg",
    workExperience: 4,
    location: {
      address: "Rome, Italy",
      coordinates: {
        lat: 41.9028,
        lng: 12.4964
      }
    }
  },
  {
    name: "Ava Garcia",
    profileImage: "https://example.com/profiles/avagarcia.jpg",
    workExperience: 5,
    location: {
      address: "Moscow, Russia",
      coordinates: {
        lat: 55.7558,
        lng: 37.6176
      }
    }
  },
  {
    name: "Liam Martin",
    profileImage: "https://example.com/profiles/liammartin.jpg",
    workExperience: 3,
    location: {
      address: "Dubai, UAE",
      coordinates: {
        lat: 25.276987,
        lng: 55.296249
      }
    }
  },
  {
    name: "Isabella Perez",
    profileImage: "https://example.com/profiles/isabellaperez.jpg",
    workExperience: 4,
    location: {
      address: "Cape Town, South Africa",
      coordinates: {
        lat: -33.9249,
        lng: 18.4241
      }
    }
  },
  {
    name: "Lucas Rodriguez",
    profileImage: "https://example.com/profiles/lucasrodriguez.jpg",
    workExperience: 5,
    location: {
      address: "São Paulo, Brazil",
      coordinates: {
        lat: -23.5505,
        lng: -46.6333
      }
    }
  },
  {
    name: "Charlotte Wright",
    profileImage: "https://example.com/profiles/charlottewright.jpg",
    workExperience: 3,
    location: {
      address: "Mexico City, Mexico",
      coordinates: {
        lat: 19.4326,
        lng: -99.1332
      }
    }
  },
  {
    name: "Mateo Lopez",
    profileImage: "https://example.com/profiles/mateolopez.jpg",
    workExperience: 4,
    location: {
      address: "Buenos Aires, Argentina",
      coordinates: {
        lat: -34.6037,
        lng: -58.3816
      }
    }
  },
  {
    name: "Amelia Hall",
    profileImage: "https://example.com/profiles/ameliahall.jpg",
    workExperience: 5,
    location: {
      address: "Sydney, Australia",
      coordinates: {
        lat: -33.8688,
        lng: 151.2093
      }
    }
  },
  {
    name: "Mateo Young",
    profileImage: "https://example.com/profiles/mateoyoung.jpg",
    workExperience: 3,
    location: {
      address: "Toronto, Canada",
      coordinates: {
        lat: 43.65107,
        lng: -79.347015
      }
    }
  },
  {
    name: "Aria Harris",
    profileImage: "https://example.com/profiles/ariaharris.jpg",
    workExperience: 4,
    location: {
      address: "Paris, France",
      coordinates: {
        lat: 48.8566,
        lng: 2.3522
      }
    }
  }
  
];

export default dummyData;
