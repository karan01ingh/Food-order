import { assets } from "./src/assets/assets"
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{ 
        'textanimate':{
          '0%':{
            
          }
        }
        
     }
    },
  },
  plugins: [],
}