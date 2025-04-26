import { useState } from 'react'
import '../css/App.css'

export default () => {
  const [objs, setObjs] = useState<{id: number, name: string, age: number, isMarried: boolean}[]>([
      {"id": 1, "name": "Alice", "age": 30, "isMarried": true},
      {"id": 2, "name": "Bob", "age": 25, "isMarried": false},
      {"id": 3, "name": "Charlie", "age": 35, "isMarried": true},
      {"id": 4, "name": "Diana", "age": 28, "isMarried": false},
      {"id": 5, "name": "Eve", "age": 40, "isMarried": true},
      {"id": 6, "name": "Frank", "age": 22, "isMarried": false},
      {"id": 7, "name": "Grace", "age": 32, "isMarried": true},
      {"id": 8, "name": "Hank", "age": 29, "isMarried": false},
      {"id": 9, "name": "Ivy", "age": 38, "isMarried": true},
      {"id": 10, "name": "Jack", "age": 27, "isMarried": false}
  ]), [newObj, setNewObj] = useState<{id: number, name: string, age: number, isMarried: boolean}>({ id: 0, name: '', age: 0, isMarried: false });

  return <>
    <form className='flex-row' onSubmit={(e) => { e.preventDefault(); setObjs([...objs, {...newObj, id: ++objs.length }]) }}>
      <input type='text' onChange={ (e) => { setNewObj({ ...newObj, name: e.target.value }) } }/>
      <input type='number' onChange={ (e) => { setNewObj({ ...newObj, age: +e.target.value }) } } />
      <button type='submit'>Add person</button>
    </form>
    <p></p>
    <ul>
      { objs.map((o, i) => 
          <li className='flex-row person' key={ o.id }>
            { o.id < 10 && 
              <>
                <h3 className='heading'>{ o.name }</h3>
                <span>{ o.age }</span>
                <input type='checkbox' onChange={ () => { !objs[i].isMarried; setObjs([...objs]) } } checked={ o.isMarried } disabled></input>
                <button onClick={ () => { const temp=[...objs]; ++temp[i].age; setObjs(temp) } }>Happy Birthday!</button>
                <button onClick={ () => { objs.splice(i, 1); setObjs([...objs]) } }>Remove</button>
              </>
            /*  : (
              <span>Too little space to render more people.</span>
            ) */ }
          </li>
        ) }
    </ul>
  </>
}