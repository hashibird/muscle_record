import React, { useState } from 'react'
import './create.css'
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Input } from './Input';
import {MdCreate} from 'react-icons/md'




let db = getFirestore();
let date = new Date()
let d = `${date.getFullYear()}-${date.getMonth()+1}`



export const Create = () => {
  const parts = ["腕トレ", "胸トレ", "肩トレ", "腕立て伏せ", "背中", "脚トレ", "腹筋"]
  const temp_bool = Array(parts.length).fill(false)
  const temp_num = Array(parts.length).fill(0)
  const [checks, setChecks] = useState(temp_bool)
  const [counts, setCounts] = useState(temp_num)
  const [day, setDay] = useState(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
  

  function changeChecks(idx) {
    let ret = checks.map((check, index)  => {
      return index === idx ? !check : check
    })
    setChecks(ret)
  }

  function changecounts(new_count, idx) {
    console.log("a")
    let ret = counts.map((count, index)  => {
      return index === idx ? new_count : count
    })
    setCounts(ret)
    console.log(counts)
  }

  const onClickAdd = async () => {
    try {
      let training = parts.map((part, index) => {
        return{
        parts_name: part,
        done: checks[index],
        set_count: counts[index]
      }}) 
      const docRef = await addDoc(collection(db, `/trainning/GLCehSxZyxAtw3RLuqHL/${d}`), {
        day: day,
        training: training
      });

      setDay("")
      setChecks(temp_bool)
      setCounts(temp_num)
      // console.log(training);

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div id="create" className="create__container">
      <div className="create__title">
        <h1>新しい記録</h1>
        <div className="divi"></div>
        <div className="create__field">
          <div className="create__day">
            <p>日付</p>
            <input type="text" value={day} onChange={(v) => setDay(v.target.value)}/>
          </div>
          <div className="create__parts">
            {parts.map((part, index) => {
              return (
                <div className="create__part">
                  <Input key={index}
                            check={checks[index]} 
                            changeChecks={changeChecks}
                            idx={index}
                            parts={part}
                            count={counts[index]}
                            changecounts={changecounts}/>
                </div>
            )})}
          </div>
          <button className="app__create-button" onClick={() => onClickAdd()}>
            新しい記録
            <MdCreate className="create__icon"/>
          </button>

        </div>
        
      </div>
    </div>
  )
}
