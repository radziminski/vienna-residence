// Rooms photos
import QueenRoomImg from './img/rooms/room-queen.jpg';
import DoubleBedRoomImg from './img/rooms/room-two-bed.jpg';
import SignleBedRoomImg from './img/rooms/room-single.jpg';
import ExclusiveQueenRoomImg from './img/rooms/room-queen-exc.jpg';

// Spa photos
import spaPhotoFirst from './img/spa/spa-1.jpg';
import spaPhotoSecond from './img/spa/spa-2.jpg';
import spaPhotoThird from './img/spa/spa-3.jpg';
import spaPhotoFourth from './img/spa/spa-4.jpg';

export const viennaResRooms = [
    {
        img: SignleBedRoomImg,
        title: "Single Bed Room",
        subTitle: "Standard experiance - 15m^2",
        price: "249",
        hotel: "Vienna Res. ****",
        bed: "Single Bed",
        people: "1",
        desc: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue orci ut egestas aliquet. Proin vel sagittis libero. Fusce ullamcorper risus et augue volutpat, sit amet ornare nibh laoreet. "
    },
    {
        img: DoubleBedRoomImg,
        title: "Double Bed Room",
        subTitle: "Standard experiance - 20m^2",
        price: "399",
        hotel: "Vienna Res. ****",
        bed: "2 Single Beds",
        people: "2",
        desc: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue orci ut egestas aliquet. Proin vel sagittis libero. Fusce ullamcorper risus et augue volutpat, sit amet ornare nibh laoreet. "
    },
    {
        img: QueenRoomImg,
        title: "Standard Queen Room",
        subTitle: "Standard experiance - 20m<span className=\"u-upper-text\">2</span>",
        price: "399",
        hotel: "Vienna Res. ****",
        bed: "Double Bed",
        people: "2",
        desc: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue orci ut egestas aliquet. Proin vel sagittis libero. Fusce ullamcorper risus et augue volutpat, sit amet ornare nibh laoreet. "
    },
    {
        img: ExclusiveQueenRoomImg,
        title: "Premium Queen Room",
        subTitle: "Exclusive experiance - 40m^2",
        price: "499",
        hotel: "Vienna Res. ****",
        bed: "Double Bed",
        people: "2",
        desc: "LLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue orci ut egestas aliquet. Proin vel sagittis libero. Fusce ullamcorper risus et augue volutpat, sit amet ornare nibh laoreet. "
    },

];

export const colors = {
    primary: '#2D787C',
    primaryLight: '#548BB0',
    primaryDark: 'rgb(36, 80, 94)',
    primaryDarkSuper: 'rgb(26, 57, 66)',
    white: '#fff',
}

export const spaPhotos = [spaPhotoFirst, spaPhotoSecond, spaPhotoThird, spaPhotoFourth];