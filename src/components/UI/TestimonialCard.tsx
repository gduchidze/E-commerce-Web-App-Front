import { BrandDataProps } from "../../data/brandData";
type TestimonialCardProps={
    data:BrandDataProps;
}

const TestimonialCard = ({data}:TestimonialCardProps) => {
 
    console.log(data);
    
  return (
    <a href={data.website} target="_blank" className="flex justify-center items-center">
        <img src={data.imgUrl} alt="Brand Logos" className={`w-auto h-28 object-cover ${data.id === 5 || data.id === 6 ?'scale-150' :''}`}/>
    </a>
  )
}

export default TestimonialCard