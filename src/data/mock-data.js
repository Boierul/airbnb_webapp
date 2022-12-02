import {
    MdOutlineApartment,
    MdHouseSiding,
    MdOutlineWater,
    MdCabin,
} from 'react-icons/md';
import {BsSnow} from 'react-icons/bs';
import {BiHomeAlt} from 'react-icons/bi';
import {
    GiKidSlide,
    GiSpaceNeedle,
    GiCampingTent,
    GiLightningDome,
    GiEvilTree,
    GiWaveSurfer,
    GiMountainCave,
    GiCaveEntrance,
    GiGolfFlag,
} from 'react-icons/gi';
import {AiOutlineCoffee} from 'react-icons/ai';
import {FaCampground, FaUmbrellaBeach, FaSwimmingPool} from 'react-icons/fa';
import {RiEarthquakeFill} from 'react-icons/ri';

export const locationsTab = [
    {id: 1, label: 'Design', icon: <MdOutlineApartment size={24}/>},
    {id: 2, label: 'Arctic', icon: <BsSnow size={24}/>},
    {id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24}/>},
    {id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24}/>},
    {id: 5, label: 'National Parks', icon: <GiKidSlide size={24}/>},
    {id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24}/>},
    {id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24}/>},
    {id: 8, label: 'Camping', icon: <FaCampground size={24}/>},
    {id: 9, label: 'A-frames', icon: <GiCampingTent size={24}/>},
    {id: 10, label: 'Domes', icon: <GiLightningDome size={24}/>},
    {id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24}/>},
    {id: 12, label: 'Treehouses', icon: <GiEvilTree size={24}/>},
    {id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24}/>},
    {id: 14, label: 'CountrySide', icon: <GiMountainCave size={24}/>},
    {id: 15, label: 'Caves', icon: <GiCaveEntrance size={24}/>},
    {id: 16, label: 'Golfing', icon: <GiGolfFlag size={24}/>},
    {id: 17, label: 'Cabins', icon: <MdCabin size={24}/>},
    {id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24}/>},
    {id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24}/>},
    {id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24}/>},
];

export const locations = [
    {
        id: 1,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
            },
        ],
        location: 'Gardon Reveira, Italy',
        days: 'Oct 2-9',
        price: '14,999 DKK night',
        isNew: true,
        rating: 4.5,
    },
    {
        id: 2,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1592196791548-dd820f3df5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1623284161455-26b238c3946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1586777144836-129b0d1789c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1621708206243-a2808f979adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            },
        ],
        location: 'Joshua tree, USA',
        days: 'Sep 2-11',
        price: '3,000 DKK night',
        isNew: false,
        rating: 4.99,
    },
    {
        id: 3,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1615838496505-11b8ed1a043c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8VXZpdGElMjByb3NhJTJDJTIwQ29zdGElMjBSaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1658191700559-a38059e1da9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fFV2aXRhJTIwcm9zYSUyQyUyMENvc3RhJTIwUmljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1547057231-e2c7dea46a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fFV2aXRhJTIwcm9zYSUyQyUyMENvc3RhJTIwUmljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1641536179425-ff5446794806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fFV2aXRhJTIwcm9zYSUyQyUyMENvc3RhJTIwUmljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            },
        ],
        location: 'Uvita rosa, Costa Rica',
        days: 'Nov 19-22',
        price: '1,129 DKK night',
        isNew: true,
        rating: 4.6,
    },
    {
        id: 4,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1628048662994-d62d9f76e9ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8TmF2aWRhZCUyQyUyMENoaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1584910560997-239693879943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8TmF2aWRhZCUyQyUyMENoaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1628048661723-6c12deb12a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fE5hdmlkYWQlMkMlMjBDaGlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1443479579455-1860f114bf77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fE5hdmlkYWQlMkMlMjBDaGlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'            },
        ],
        location: 'Navidad, Chile',
        days: 'Sep 13-18',
        price: '1,208 DKK night',
        isNew: false,
        rating: 4.2,
    },
    {
        id: 5,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1533299398575-0f8798b7c8e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8VXZpdGElMjByb3NhJTJDJTIwQ29zdGElMjBSaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1607171260603-1a6da062da36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8VXZpdGElMjByb3NhJTJDJTIwQ29zdGElMjBSaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1587502537815-0c8b5c9ba39a?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Paraty, Brazil',
        days: 'Aug 1-6',
        price: '1,243 DKK night',
        isNew: true,
        rating: 4.1,
    },
    {
        id: 6,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1572445009480-47abf897f475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fE5hdmlkYWQlMkMlMjBDaGlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Raelington, Norway',
        days: 'Oct 9-15',
        price: '2698 DKK night',
        isNew: false,
        rating: 4.6,
    },
    {
        id: 7,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1518730518541-d0843268c287?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fFRlcnJhc2luaSUyQyUyMEl0YWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Terrasini, Italy',
        days: 'June 7-12',
        price: '1,467 DKK night',
        isNew: true,
        rating: 4.7,
    },
    {
        id: 8,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1612643171284-656bb7c84a66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8U2FuJTIwSm9zZSUyQyUyME1leGljb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1496256654245-8f3d0ef3bebe?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'San Jose, Mexico',
        days: 'Jun 11-16',
        price: '1,767 DKK night',
        isNew: false,
        rating: 4.8,
    },
    {
        id: 9,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Tulum, Mexico',
        days: 'Jul 1-6',
        price: '1,910 DKK night',
        isNew: true,
        rating: 4.3,
    },
    {
        id: 10,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1654126835431-b8f5c075beb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SW5nbGlzJTJDJTIwQ2FuYWRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1526137844794-45f1041f397a?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1476209446441-5ad72f223207?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Inglis, Canada',
        days: 'Jun 12-18',
        price: '1,629 DKK night',
        isNew: false,
        rating: 4.6,
    },
    {
        id: 11,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1650555425089-4a2ddd9d81f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amVubmVyJTIwY2FsaWZvcm5pYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1531756716853-09a60d38d820?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Jenner, California',
        days: 'Nov 2-7',
        price: '2,595 DKK night',
        isNew: false,
        rating: 4.1,
    },
    {
        id: 12,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1503686982867-43fb1b9fb691?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fE1hbGlidSUyQyUyMFVTfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1564574662330-73fb2940ff5d?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Malibu, US',
        days: 'Jun 3-4',
        price: '4,467 DKK night',
        isNew: false,
        rating: 4.2,
    },
    {
        id: 13,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1517639493569-5666a7b2f494?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1605708896118-957f660c1555?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Bolzano, Italy',
        days: 'Sep 22-25',
        price: '1,358 DKK night',
        isNew: true,
        rating: 4.5,
    },
    {
        id: 14,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1533387520709-752d83de3630?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Hawaii, US',
        days: 'Nov 4-10',
        price: '1,777 DKK night',
        isNew: true,
        rating: 4.8,
    },
    {
        id: 15,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1544892504-5a42d285ab6f?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Lagos, Portugal',
        days: 'Sep 25-Oct 2',
        price: '2,999 DKK night',
        isNew: true,
        rating: 4.88,
    },
    {
        id: 16,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'LunenBurg, Canada',
        days: 'Oct 4-9',
        price: '1,500 DKK night',
        isNew: false,
        rating: 4.2,
    },
    {
        id: 17,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1504803900752-c2051699d0e8?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1528184039930-bd03972bd974?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Santa Rosa, US',
        days: 'Jun 2-9',
        price: '3,369 DKK night',
        isNew: false,
        rating: 4.1,
    },
    {
        id: 18,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1465147264724-326b45c3c59b?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1562095241-8c6714fd4178?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Carlux, France',
        days: 'Oct 28-Nov 4',
        price: '2,511 DKK night',
        isNew: true,
        rating: 4.5,
    },
    {
        id: 19,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1485067801970-70573e3f77d0?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Palm desert, US',
        days: 'Jun 11-16',
        price: '3,200 DKK night',
        isNew: true,
        rating: 4.7,
    },
    {
        id: 20,
        locationImages: [
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1494280986787-c49b328829dd?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
                id: 4,
                url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&h=250&q=60',
            },
        ],
        location: 'Ressaca, Brazil',
        days: 'Oct 2-9',
        price: '4,999 DKK night',
        isNew: false,
        rating: 4.5,
    },
];
