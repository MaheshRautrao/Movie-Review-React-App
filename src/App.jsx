import { useEffect } from "react";
import { fetchDataFromTMDB } from "./utils/api.js";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    console.log(
      fetchDataFromTMDB(
        "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
      )
    );
  };

  return <>mahesh</>;
}

export default App;
