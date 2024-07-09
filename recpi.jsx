import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import images from  "./images/airport.jpg"
// import { RecipeCard } from "./recipe-card"
// import { Data } from "./components/data"
// import { Data } from "./data";
// import { Search } from "./search";

export const Recipe = () => {
  const[text,settext]=useState('')
  const [items, setitem] = useState([
    {
      id: 0,
      title1: "Sindhi Biryani",
      title2: "bombay Biryani",
      title3: "Chicken Biryani",
      img1: "./src/images/sindhi.jpg",
      img2:"./src/images/bombay.jpg",
      img3:"./src/images/chicken.jpg",
    text:'STEPS OF COOKING',
       detaile1 :"Fry onions in hot oil until light golden. Add meat and garlic paste. Stir fry for 4-5 minutes on high heat.",
       detaile2 :"Fry onions in hot oil until light golden. Add meat and garlic paste. Stir fry for 4-5 minutes on high heat.",
       detaile3 :"Add Shan Sindhi Biryani Mix, potatoes, yogurt, ginger paste and stir fry for 5 minutes.",
      
      
    },
    {
      id: 1,
      title1: "Chicken Karahi",
      title2: "Beef Karahi",
      title3:"mutton Karachi",
       img1: "./src/images/karahi1.jpg",
       img2:"./src/images/beef.jpg",
       img3:"./src/images/karahi1.jpg",
      
        text:'STEPS OF COOKING',
       
        detaile1 :"Fry onions in hot oil until golden. Add tomatoes and fry until oil separates.",
        detaile2 :"Add meat, garlic paste, ginger paste, yogurt, potatoes and Shan Special button Biryani Mix. Stir fry for 10 minutes.",
    //    detaile3 :"Add Shan Bombay Biryani Mix, potatoes, yogurt, ginger paste and stir fry for 5 minutes.",
    },
    {
        id: 3,
        title1: "malai Boti",
        title2: "Bihari Boti",
        title3:"Chicken",
         img1: "./src/images/malai.jpg",
         img2:"./src/images/bihari.jpg",
         img3:"./src/images/boti1.jpg",
        
          text:'STEPS OF COOKING',
          detaile1 :"Malai Chicken Boti is a grilled chicken dish, which is extremely creamy in taste. ",
         detaile2 :"Malai Chicken Boti is a grilled chicken dish, which is extremely creamy in taste. "

      //    detaile3 :"Add Shan Bombay Biryani Mix, potatoes, yogurt, ginger paste and stir fry for 5 minutes.",
      },
   
  ]);
  return (
    <>


    <div className="container">
       <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Search</span>
  <input type="search" className="form-control" placeholder="Search"  onChange={(e) => settext(e.target.value)}/>
</div>
        
          
         
            
            {items.filter((items) => {
                return text.toLowerCase() === ''
                  ? items
                  : items.title1.toLowerCase().includes(text)  ||
                  items.title2.toLowerCase().includes(text) ||
                  items.detaile1.toLowerCase().includes(text) ||
                  items.detaile2.toLowerCase().includes(text) 
                  
                  

              }
            ).map((item) => (

            //     <div className="card mb-2" style= {{maxWidth:"0px;"}}>
            //     <div className="row g-0">
            //       <div className="col-md-5">
            //         <img src={item.img} className="img-fluid rounded-start" alt="..."/>
            //       </div>
            //       <div className="col-md-7">
            //         <div className="card-body" style={{textAlign:'start',}}>
            //         <h3 className="card-title">{item.title}</h3>
            //           <h5 className="card-title">{item.text}</h5>
            //         <ol> <li> <p className="card-text">{item.detaile1}</p></li>
            //          <li> <p className="card-text">{item.detaile2}</p></li>
            //          <li> <p className="card-text">{item.detaile3}</p></li> </ol>
            //           <p className="card-text"><small class="text-muted"></small></p>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
              <div class="card-group mb-3" >
  <div class="card">
    <img src={item.img1}  className="card-img-top" style={{width:'100%'}} alt=""/>
   <div className="card-body " style={{textAlign:'start',}} >
   <h4 className="card-title">{item.title1}</h4>
   <h6 className="card-title">{item.text}</h6>
   <ol>  <li> <p className="card-text">{item.detaile1}</p></li> 
   <li> <p className="card-text">{item.detaile2}</p></li>
   </ol>
    
    </div>
  </div>
  
  <div class="card">
    <img src={item.img2}  className="card-img-top"  alt=""/>
   <div className="card-body " style={{textAlign:'start',}} >
   <h4 className="card-title">{item.title2}</h4>
   <h6 className="card-title">{item.text}</h6>
   <ol>  <li> <p className="card-text">{item.detaile1}</p></li> 
   <li> <p className="card-text">{item.detaile2}</p></li>
  
   </ol>
    
    </div>
  </div>
  <div class="card">
    <img src={item.img3}  className="card-img-top" alt=""/>
   <div className="card-body " style={{textAlign:'start',}} >
   <h4 className="card-title">{item.title3}</h4>
   <h6 className="card-title">{item.text}</h6>
   <ol>  <li> <p className="card-text">{item.detaile1}</p></li> 
   <li> <p className="card-text">{item.detaile2}</p></li>
   {/* <li> <p className="card-text">{item.detaile5}</p></li> */}
   </ol>
    
    </div>
  </div>
  
  
 
</div>
               ))}
            </div>
         
     
    </>
  );
};


