import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './component/Navbar';
function App() {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let [query, setQuery] = useState('Coding');
  let [per_page, setPer_page] = useState(10);
  let [loading, setLoading] = useState(false);
  let api = '-BsUDI2UUH9LOsrZ8wryEVh95FQ_W0NsugTFsIAhf2Y';
  const getData = async () => {
    setLoading(true);
    let responce = await fetch(`https://api.unsplash.com/search/photos?client_id=${api}&query=${query}&page=${page}&per_page=${per_page}`);
    let data = await responce.json();
    setData((old) => [...old, ...data.results]);
    setLoading(false);
  }
  useEffect(() => {
    let handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1) {
        setPage((pre) => pre + 1);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])

  // let handleScroll = () => {
  //   let jitnaDikhRah = window.innerHeight;
  //   let jitnaScrollHochuka = window.scrollY;
  //   let jitnaContentHein = document.body.offsetHeight;
  //   console.log(jitnaDikhRah, "jitna dikh rah hein")
  //   console.log(jitnaScrollHochuka, "jitna scroll ho chuka")
  //   console.log(jitnaContentHein, "jitna cintent hein total")
  //   if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight ) {
  //     setPage((pre) => pre + 1);
  //   }
  // }
  // window.addEventListener('scroll', handleScroll);

  useEffect(() => {
    getData();
  }, [page])

  return (
    <>
    <Navbar setQuery={setQuery} setData = {setData} getData={getData}/>
      <div className="img-container">
        {data.map((ele, idx) => (
          <div key={`id_${idx}`} className="img-div">
            <a href={ele.links.download} target='_blank' rel="noopener noreferrer">
              <img src={ele.urls.raw} alt={ele.slug} />
              <p>{ele.slug}</p>
            </a>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </>
  )
}

export default App
