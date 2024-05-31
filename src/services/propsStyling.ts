 import { type Product } from "../types";
 import parse from "html-react-parser";

 function propStyling(product:Product | undefined) {
    
     const indexDescExp = product?.description?.search(/<h4>/);
     const indexDesc = product?.description?.slice(0, indexDescExp);
     const charactersSlice = product?.characters?.slice(0, 5);
     if (indexDesc && indexDesc.length > 300) {
        const resumeIndexDesc = indexDesc.slice(0,300) + '...';
        const parsedDescription = parse(resumeIndexDesc?resumeIndexDesc:'');
        return {
            description: parsedDescription,
            characters: charactersSlice
        }
     }else{
        return {
            description: parse(indexDesc?indexDesc:''),
            characters: charactersSlice
        }
     }

 } 
  
 export default propStyling;