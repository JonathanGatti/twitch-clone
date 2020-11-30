import React, {useEffect} from 'react';
import axios from 'axios';

function StreamList(): JSX.Element{
  const fetchData = () => {
    axios.get('http://localhost:8000/streams')
    .then((res: any) => {
      console.log(res.data);
    })
    .catch((e: Error) => {
      console.log(e)
    });
  }
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
      stream list
    </div>
  )
}

export default StreamList;