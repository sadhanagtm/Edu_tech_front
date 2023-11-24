import React, { useEffect, useState } from "react";

import Home from "../../components/PageComponents/LearnPage/Home";
import Spinner from "../../components/UI/Spinner/Spinner";
import cookie from "js-cookie";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { watch_v } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/course/enrolled_contents/${watch_v}`
  );
  const resed = await fetch(
    `${process.env.NEXT_PUBLIC_API}/instructor/byCourse/${watch_v}`
  );

  const { data } = await res.json();
  const instructor = await resed.json();

  // Pass data lto the page via props
  return { props: { data, watch_v, instructor } };
}
function Index({ data, watch_v, instructor }) {
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
        <Home data={data} watch_v={watch_v} instructor={instructor} />
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Index;
