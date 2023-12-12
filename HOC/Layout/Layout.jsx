import React, { useState } from "react";
import Axu from "../Axu/Axu";
import BreakPointTest from "../../components/test/BreakPointTest";
import Footer from "../Footer/Footer";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";
import SubHeader from "../../components/Navigation/Toolbar/SubHeader";
import ToolBar from "../../components/Navigation/Toolbar/ToolBar";
import UserInfoContextApi from "../ContextApi/UserInfo.jsx";

function 
Layout(props) {
  const [show, setShow] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [showInputData, setShowInputData] = useState(false);
  const [inputTwister, setInputTwister] = useState(false);

  return (
    <div className=" bg-white scroll p-0 m-0">
      <SubHeader />
      <div className={"bg-white w-full  "}>
        <UserInfoContextApi>
          <ToolBar
            show={show}
            setShow={setShow}
            showSearchForm={showSearchForm}
            setShowSearchForm={setShowSearchForm}
            showInputData={showInputData}
            setShowInputData={setShowInputData}
            inputTwister={inputTwister}
            setInputTwister={setInputTwister}
          />
        </UserInfoContextApi>
      </div>
      {show ? <Sidebar show={show} setShow={setShow} /> : null}
      <div
        className=" m-0 lg:m-0 
       xl:m-0 2xl:my-0"
        onClick={() => {
          setShowSearchForm(false);
          setShowInputData(false);
          setInputTwister(false);
        }}
      >
        {props.children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
