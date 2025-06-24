import logo from './logo.png'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import homeIcon from './homeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import closeMenu from './closeMenu.svg'
import roomImg1 from './roomImg1.jpg'
import roomImg2 from './roomImg2.jpg'
import roomImg3 from './roomImg3.jpg'
import roomImg4 from './roomImg4.jpg'
import regImage from './regImage.jpg'
import exclusiveOfferCardImg1AmparaWildlifeSafari from "./exclusiveOfferCardImg1_Ampara-Wildlife-Safari.png";
import excexclusiveOfferCardImg2AnuradhapuraLakeRetreatlusiveOfferCardImg2 from "./exclusiveOfferCardImg2_Anuradhapura-Lake-Retreat.png";
import exclusiveOfferCardImg3BadullaMountainEscape from "./exclusiveOfferCardImg3_Badulla-Mountain-Escape.png";
import addIcon from "./addIcon.png";
import dashboardIcon from "./dashboardIcon.png";
import listIcon from "./listIcon.png";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.png";
import totalRevenueIcon from "./totalRevenueIcon.png";
import freeWifiIcon from './freeWifiIcon.png';
import freeBreakfastIcon from './freeBreakfastIcon.png';
import roomServiceIcon from './roomServiceIcon.png';
import mountainIcon from './mountainIcon.png';
import poolIcon from './poolIcon.png';
import acIcon from './acIcon.png';
import beachIcon from './beachIcon.png';
import tvIcon from './tvIcon.png';
import gymIcon from './gymIcon.png';
import laundryIcon from './laundryIcon.png';
import yaliniThevakumarHotelOwner from './yaliniThevakumarHotelOwner.jpg'
import sutharsanRajHotelOwner from './sutharsanRajHotelOwner.jpg'
import nadeeshaKarunaratneHotelOwner from './nadeeshaKarunaratneHotelOwner.jpg'
import tharinduSenanayakeHotelOwner from './tharinduSenanayakeHotelOwner.jpg'

export const assets = {
    logo,
    userIcon,
    calenderIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    closeMenu,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    acIcon,
    beachIcon,
    tvIcon,
    gymIcon,
    laundryIcon,
    yaliniThevakumarHotelOwner,
    sutharsanRajHotelOwner,
    nadeeshaKarunaratneHotelOwner,
    tharinduSenanayakeHotelOwner
}

export const districts = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Moneragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
];


/*-------- Exclusive Offers Dummy Data --------*/
export const exclusiveOffers = [{ _id: 1, title: "Ampara Wildlife Safari", description: "Stay near Gal Oya National Park with free safari tours.", priceOff: 30, expiryDate: "25th August 2025", image: exclusiveOfferCardImg1AmparaWildlifeSafari},
    { _id: 2, title: "Anuradhapura Lake Retreat", description: "Relax by the Nuwara Wewa Lake with luxury resort views.", priceOff: 27, expiryDate: "10th September 2025", image: excexclusiveOfferCardImg2AnuradhapuraLakeRetreatlusiveOfferCardImg2},
    { _id: 3, title: "Badulla Mountain Escape", description: "Chill in Ella’s green mountains with scenic resort stays.", priceOff: 28, expiryDate: "30th August 2025", image: exclusiveOfferCardImg3BadullaMountainEscape},
];


/*-------- Testimonials Dummy Data --------*/
export const testimonials = [
    { 
        id: 1, 
        name: "Anjali Ravindran", 
        address: "Vavuniya", 
        image: "https://i.pinimg.com/736x/30/fa/13/30fa134d0d9995805f244d913ad9f710.jpg", 
        rating: 5, 
        review: "Snap Nest made my stay in Vavuniya so comfortable. The hospitality was amazing, and the service was top-notch!" 
    },
    { 
        id: 2, 
        name: "Aravind Kumar", 
        address: "Kilinochchi", 
        image: "https://i.pinimg.com/236x/da/74/0c/da740cb04006c083d10c80bd90f6849e.jpg", 
        rating: 4, 
        review: "I had a wonderful experience booking with Snap Nest. It made my trip to Kilinochchi so easy, and the hotel was great!" 
    },
    { 
        id: 3, 
        name: "Tharushi Silva", 
        address: "Negombo", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5G8RK6TM5S3GOlDtav7F5W1xYaWjEtXHH_A&s", 
        rating: 5, 
        review: "Snap Nest helped me find the perfect hotel in Negombo. The booking was fast and simple. Highly recommend it!" 
    }
];

/*-------- Facility Icon --------*/
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
    "Air Conditioning": assets.acIcon,
    "Beach Access": assets.beachIcon,
    "Flat-Screen TV": assets.tvIcon,
    "Fitness Center": assets.gymIcon,
    "Laundry Service": assets.laundryIcon,
};
  
/*-------- For Room Details Page --------*/
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

/*-------- User Dummy Data Start --------*/
/*-------- User Dummy Data 1--------*/
export const userDummyData1 = {
    _id: "user_001",
    username: "Yalini Thevakumar",
    email: "yalini@example.com",
    image: yaliniThevakumarHotelOwner,
    role: "hotelOwner",
    createdAt: "2025-01-10T08:00:00.000Z",
    updatedAt: "2025-04-20T09:30:00.000Z",
    __v: 1,
    recentSearchedDistricts: ["Jaffna", "Kilinochchi"]
};

/*-------- User Dummy Data 2--------*/
export const userDummyData2 = {
    _id: "user_002",
    username: "Sutharsan Raj",
    email: "sutharsan@example.com",
    image: sutharsanRajHotelOwner,
    role: "hotelOwner",
    createdAt: "2025-01-12T09:15:00.000Z",
    updatedAt: "2025-04-21T10:10:10.000Z",
    __v: 1,
    recentSearchedDistricts: ["Batticaloa", "Vavuniya"]
};

/*-------- User Dummy Data 3--------*/
export const userDummyData3 = {
    _id: "user_003",
    username: "Nadeesha Karunaratne",
    email: "nadeesha@example.com",
    image: nadeeshaKarunaratneHotelOwner,
    role: "hotelOwner",
    createdAt: "2025-02-01T11:11:11.000Z",
    updatedAt: "2025-04-22T08:20:00.000Z",
    __v: 1,
    recentSearchedDistricts: ["Galle", "Matara"]
};

/*-------- User Dummy Data 4--------*/
export const userDummyData4 = {
    _id: "user_004",
    username: "Tharindu Senanayake",
    email: "tharindu@example.com",
    image: tharinduSenanayakeHotelOwner,
    role: "hotelOwner",
    createdAt: "2025-02-05T10:00:00.000Z",
    updatedAt: "2025-04-23T09:40:00.000Z",
    __v: 1,
    recentSearchedDistricts: ["Kandy", "Kurunegala"]
};

export const userDummyData = [
    userDummyData1,
    userDummyData2,
    userDummyData3,
    userDummyData4,
];
/*-------- User Dummy Data End --------*/

/*---------------- Hotel Dummy Datas Start ----------------*/
/*-------- Hotel Dummy Data 1 --------*/
export const hotelDummyData1 = {
    "_id": "a3f76393197ac559e4089b72",
    "name": "Cinnamon Grand",
    "address": "No 77, Galle Road, Colombo 03, Colombo",
    "contact": "+94 000 000 000",
    "owner": userDummyData1,
    "district": "Colombo",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

/*-------- Hotel Dummy Data 2 --------*/
export const hotelDummyData2 = {
    "_id": "b4f76393197ac559e4089b72",
    "name": "Heritance Kandalama",
    "address": "No 101, Kandalama, Dambulla, Dambulla",
    "contact": "+94 111 111 1111",
    "owner": userDummyData2,
    "district": "Matale",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

/*-------- Hotel Dummy Data 3 --------*/
export const hotelDummyData3 = {
    "_id": "c5f76393197ac559e4089b72",
    "name": "Jetwing Blue",
    "address": "No 123, Negombo Beach Road, Negombo",
    "contact": "+94 222 222 2222",
    "owner": userDummyData3,
    "district": "Gampaha",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

/*-------- Hotel Dummy Data 4 --------*/
export const hotelDummyData4 = {
    "_id": "d6f76393197ac559e4089b72",
    "name": "Fox Resort Vavuniya",
    "address": "No 50, Vavuniya Town, Vavuniya",
    "contact": "+94 444 444 444",
    "owner": userDummyData4,
    "district": "Vavuniya",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const hotelDummyData = [
    hotelDummyData1,
    hotelDummyData2,
    hotelDummyData3,
    hotelDummyData4,
];

/*---------------- Hotel Dummy Datas End ----------------*/

/*-------- Rooms Dummy Data --------*/
export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyData1,
        "roomType": "Double Bed",
        "pricePerNight": 7250,
        "amenities": [ "Free WiFi", "Room Service", "Pool Access", "Flat-Screen TV", "Beach Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyData2,
        "roomType": "Double Bed",
        "pricePerNight": 6150,
        "amenities": ["Free Breakfast", "Air Conditioning", "Laundry Service", "Mountain View", "Free WiFi"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyData3,
        "roomType": "Double Bed",
        "pricePerNight": 4850,
        "amenities": ["Fitness Center", "Flat-Screen TV", "Room Service", "Air Conditioning"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": hotelDummyData4,
        "roomType": "Single Bed",
        "pricePerNight": 3250,
        "amenities": ["Free WiFi", "Laundry Service", "Free Breakfast"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
]

/*-------- User Bookings Dummy Data --------*/
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData1,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData1,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 3425,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData2,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData2,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 2760,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData3,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData3,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 3815,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

/*-------- Dashboard Dummy Data --------*/
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 326572,
    "bookings": userBookingsDummyData
}