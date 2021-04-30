import React, { useEffect, useState } from 'react';
import Card from '../../components/card';
import Header from '../../components/header';
import { Loader } from '../../components/loader';
import Paginator from '../../components/pagination';
import { users } from '../../helpers/data';

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setItems([...items, ...users.slice(offset, offset + 10)]);
      setLoading(false);
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  return <div>
    <Header title="Users" />
    <Paginator loading={loading}
      total={users.length}
      totalRecords={items.length}
      setOffset={setOffset}
      offset={offset}
      className="list-container" >
      {
        items.map((item, index) =>
          <Card item={item} key={index} />
        )
      }
      {
        loading && <Loader />
      }
    </Paginator>
  </div >
}