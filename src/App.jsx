import React, { useEffect, useState } from "react";
import List from "./Components/List";
import './App.css'
import Button from "./Components/Button";

const App = () => {
  const [showList, setShowList] = useState([]);
  const [listCount, setListCount] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const newsCall = async () => {
    try {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!responce.ok) {
        throw new Error("Failed to load news ...");
      }
      const data = await responce.json();
      setShowList(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    newsCall();
  }, []);

  const showMore = () => {
    setListCount((prev) => {
      return prev + 5 <= showList.length ? prev + 5 : showList.length;
    });
    // console.log(setListCount);
  };

  const hideContent = () => {
    setListCount(5);
  };

  return (
    <div className="container">
      <h1 className="heading">List of todays Headlines...</h1>
      {/* loading states */}
      {loading && <h1 className="loading">Loading News....!</h1>}
      {/* Error states */}
      {error && <h1 className="error">Error :{error.message}</h1>}
      {/*success sate */}
      {!loading &&
        !error &&
        showList.slice(0, listCount).map((item) => {
          return <List news={item} key={item.id} />;
        })}
      <div className="btn-group">
      <Button onClick={showMore} lable="Show More" className="showMore" />
      <Button className="hide" onClick={hideContent} lable="Hide" />
      </div>
    </div>
  );
};

export default App;
