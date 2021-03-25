import React from "react";
import useRouter from "../utils/useRouter";

function Content({ user }) {
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, []);

  return (
    <div>
      <h1>Hello from content!</h1>
    </div>
  );
}

export default Content;
