// App.js

import "/node_modules/rc-tabs/assets/index.css";

import Tabs, { TabPane } from "rc-tabs";

import React, { useState, useEffect } from "react";
import Review from "../../CoursePreview/Review";
import Collapsable from "../../Collapsable/Collapsable";
import axios from "../../../../HOC/Axios/Axios";
function LearningTabs({ description, id }) {
  console.log(description);
  function callback(e) {
    console.log(e);
  }
  // faq section starts

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
            console.log("read data", res);
          }
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("id", id);
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
  // faq  section ends

  return (
    <div className="LearningTabs bg-gray-200 my-10 font-extrabold ">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Overview" key="1">
          <div
            className="h-148 scroll text-xs md:text-base text-justify   font-openSansFour "
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </TabPane>
        <TabPane tab="FAQ" key="2">
          <div className="w-11/12  h-148 scroll text-xs md:text-base text-justify  font-openSansFour mx-auto">
            {/* {data.map((val, i) => { */}
            {/* return ( */}

            <Collapsable
              method={""}
              method_second={""}
              // title={val.title}
              data={data}
              body={body}
              identity="FAQ"
              unique={true}
              // id={val.id}
              setID={setID}
            >
              {/* {ID === val.id
                ? body.map((val, i) => (
                    <div>
                      {val.id}.{val.title}
                    </div>
                  ))
                : null} */}
            </Collapsable>
            {/* ); */}
            {/* })} */}
          </div>
        </TabPane>
        <TabPane tab="Review" key="3">
          <Review cid={id} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default LearningTabs;
