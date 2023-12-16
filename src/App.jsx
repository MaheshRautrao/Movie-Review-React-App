import { useEffect } from "react";
import { fetchDataFromTMDB } from "./utils/api.js";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice.js";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    const data = fetchDataFromTMDB(
      "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    );

    // dispatch(getApiConfiguration(data));
  };

  return <></>;
}

export default App;
