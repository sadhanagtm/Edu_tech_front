import React, { useEffect, useState } from "react";

import Spinner from "../../components/UI/Spinner/Spinner";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Indexs from "../../components/PageComponents/MyCourses/index";
function Index() {
  const [Status, setStatus] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
      if (cookie.get("token")) {
        setStatus(true);
      } else {
        router.push("/");
        setStatus(false);
      }
    }
  }, [cookie]);
  return (
    <div>
      {Status ? (
        <Indexs />
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Index;
