import React, { useEffect, useState } from "react";

import Collapsable from "../Collapsable/Collapsable";
import axios from "../../../HOC/Axios/Axios";

function FAQ({ id }) {
  const [show, setShow] = useState(false);
  const [ID, setID] = useState(0);
  const [Sub, setSub] = useState([]);

  const data = [];
  const body = [];

  const getFaq = () => {
    try {
      axios
        .get(`/faq/${id}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setSub(res.data.data);
          }
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(id);
    getFaq();
  }, []);

  Sub.map((val, i) => {
    let datas = {
      id: val.id,
      title: val.question,
    };
    let answer = {
      id: val.id,
      title: val.answer,
    };
    data.push(datas);
    body.push(answer);
  });
  console.log(Sub);

  return (
    <div className="w-11/12  mx-auto">
      <Collapsable
        method={""}
        method_second={""}
        data={data}
        body={body}
        identity="FAQ"
        unique={true}
        setID={setID}
      ></Collapsable>
    </div>
  );
}

export default FAQ;
