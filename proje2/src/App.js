
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const key = "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json";
  const [veri, setVeri] = useState();//veriler değişseceği için
  const [tarih, setTarih] = useState("");//tarihe göre veri çekceğimiz için 

  useEffect(() => {

    axios.get(key)
    .then(res => setVeri(res.data[tarih]))
    .catch(err => console.log(err))

  }, [veri, tarih])



  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className=" mx auto mt-4 ">

            <h2 className="text-center text-white display-3" >TÜRKİYE COVİD-19 Arama Motoru</h2>
            <input type="text" placeholder="GG/AA/YY" className="form-control" 
            onChange={(e)=>setTarih(e.target.value)}/>
            <table className="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Ölüm Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr  className={veri===undefined ? "bg-danger":"bg-success"}>
                  <th scope="row">1</th>
                  <td >{veri===undefined ?"Veri Bekleniyor": veri.totalTests}</td>
                  <td >{veri===undefined ?"Veri Bekleniyor": veri.patients}</td>
                  <td >{veri===undefined ?"Veri Bekleniyor": veri.deaths}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
