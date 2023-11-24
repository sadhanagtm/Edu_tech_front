import React, { useEffect, useState } from "react";

import Home from "../../components/StudentProfileSetting/Home";
import Spinner from "../../components/UI/Spinner/Spinner";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import UserInfoContextApi from "../../HOC/ContextApi/UserInfo";

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
				<UserInfoContextApi>
					<Home />
				</UserInfoContextApi>
			) : (
				<div>
					<Spinner />
				</div>
			)}
		</div>
	);
}

export default Index;
