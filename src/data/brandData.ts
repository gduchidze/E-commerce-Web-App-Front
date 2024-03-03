export interface BrandDataProps {
    id:number;
    imgUrl:string;
    website:string;
    name:string;
}
const brandData: BrandDataProps[] = [
  {
    id: 1,
    imgUrl: "https://colman.be/media/82020/chanel.png",
    website: 'https://www.chanel.com/us/',
    name:'chanel',
  },
  {
    id: 2,
    imgUrl: "https://pngimg.com/uploads/nike/nike_PNG12.png",
    website: 'https://www.nike.com/',
    name:'nike',
  },
  {
    id: 3,
    imgUrl: "https://logos-marques.com/wp-content/uploads/2020/08/Zara-Logo-1980s.png",
    website: 'https://www.zara.com/',
    name:'zara',
  },
  {
    id: 4,
    imgUrl: "https://seeklogo.com/images/C/calvin-klein-logo-501C5505BD-seeklogo.com.png",
    website: 'https://www.calvinklein.us/en',
    name:'calvin klein',
  },
  {
    id: 5,
    imgUrl: "https://i.pinimg.com/originals/3d/4d/81/3d4d810374330a63d5621388ec54d9f0.png",
    website: 'https://www.prada.com/ww/en.html',
    name:'prada',
  },
  {
    id: 6,
    imgUrl: "https://www.freepnglogos.com/uploads/adidas-logo-photo-png-3.png",
    website: 'https://www.adidas.com/us',
    name:'adidas',
  },
  {
    id: 7,
    imgUrl: "https://i.pinimg.com/736x/70/ac/b3/70acb32ff9a5b46e3cbe3fa11bc4c8de.jpg",
    website: 'https://global.lacoste.com/en/homepage',
    name:'lacoste',
  },
];
export default brandData;