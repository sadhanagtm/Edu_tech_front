import React, { useEffect, useState } from "react";

import Collapsable from "../Collapsable/Collapsable";
import axios from "../../../HOC/Axios/Axios";
import { get } from "react-hook-form";

function Syallabus({ id }) {
  const [show, setShow] = useState(false);
  const [ID, setID] = useState(0);
  const [Data, setData] = useState([]);
  const [Sub, setSub] = useState([]);

  const data = [];
  const body = [];

  const getSyallabus = () => {
    try {
      axios
        .get(`/course-section/onCourse/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setData(res.data);
          }
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  const getCourses = (id) => {
    try {
      axios
        .get(`/course-content/bySection/${id}`)
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
    getSyallabus();
  }, [id]);

  console.log(Data);
  Data.map((val, i) => {
    let datas = {
      id: val.id,
      title: val.section_title,
    };
    data.push(datas);
  });
  console.log(Sub);

  Sub !== undefined
    ? Sub.map((val, i) => {
        let datas = {
          id: val.id,
          title: val.content_title,
        };
        body.push(datas);
      })
    : null;
  return (
    <div className="w-11/12  mx-auto">
      <Collapsable
        method="chapter"
        method_second="Lesson"
        data={data}
        body={body}
        getsub={getCourses}
      ></Collapsable>
    </div>
  );
}

export default Syallabus;
