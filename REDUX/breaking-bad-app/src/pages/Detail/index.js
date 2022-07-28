import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

function Detail() {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .then(() => setLoading(false));
  }, [char_id]);
  console.log(char);
  return (
    <div>
      {loading && <Loading />}
      {char && (
        <div>
          <h1 style={{ padding: "0", margin: "0" }}>{char.name}</h1>
          <h3 style={{ padding: "0", margin: "0 auto 10px auto" }}>
            ({char.nickname})
          </h3>
          <img src={char.img} alt={char.char_id} width={"20%"} />
        </div>
      )}
    </div>
  );
}

export default Detail;
