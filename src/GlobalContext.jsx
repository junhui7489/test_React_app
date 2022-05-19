import React, {createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";


export const UserContext = createContext();

export default function UserProvider(props){
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const posts = await res.json();
      return posts;
    }
    fetchAPI().then((fetch_data)=>{
      console.log(fetch_data);
      setData(fetch_data.splice(0,10));
    })
  }, []);
  return(
   <UserContext.Provider value={[data,setData]}>
    {props.children}
  </UserContext.Provider>
  );
};
