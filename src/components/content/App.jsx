
import './App.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, orderBy, query} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from 'react';
import {MdCreate} from 'react-icons/md'

const firebaseConfig = {
  apiKey: "AIzaSyA5ELq9Yvuan7A9IpZTUh1D23HabsGhD6I",
  authDomain: "friendly-cargo-334408.firebaseapp.com",
  projectId: "friendly-cargo-334408",
  storageBucket: "friendly-cargo-334408.appspot.com",
  messagingSenderId: "139949167810",
  appId: "1:139949167810:web:54a1adad0036435066575b",
  measurementId: "G-YNFJZWSLSP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let db = getFirestore();
let date = new Date()


function App() {
  let d = `${date.getFullYear()}-${date.getMonth()+1}`
  const [items, setItems] = useState([])

  useEffect( async () => {
    getDo()
  },[])

  const getDo = async () => {
    setItems([])
    let querySnapshot = await getDocs(
      query(
        collection(
          db, `/trainning/GLCehSxZyxAtw3RLuqHL/${d}`), 
          orderBy("day", "desc")
        ));
    querySnapshot.forEach((doc) => {
      setItems((prev) => [...prev, doc])
    })
  }


  

  const additem = () => {
    console.log(items)
  }

  // const changeitem = (item, idx) => {
  //   items[idx].abs.done = !items[idx].abs.done
  //   setItems(
  //     items.map((item, index) => {
  //     })
  //   )
  // }

  return (
    <>
      <div className="App">
        <a href="#create" className="app__create-button">
          新しい記録
          <MdCreate className="create__icon"/>
        </a>
        <div className="app__items">
          {items.map((doc, index1)  => {
            return (
              <div key={index1} className="app__item">
                <div className="app__item-day">
                  <h1>{doc.data().day}</h1>
                </div>
                <div className="app__item-parts">
                  {doc.data().training.map(({parts_name, done, set_count}, index2) => {
                    return(
                    <div key={index2} className={"app__item-part" + (done ? " bg-green": " bg-grey")}>
                      <h3>{parts_name}</h3>
                      <h5>{set_count}回</h5>
                    </div>
                    )})}
                </div>
              </div>
            )})}
        </div>
      </div>
    </>
  );
}

export default App;
