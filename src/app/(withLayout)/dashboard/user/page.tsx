import Link from "next/link";
import React from "react";

const userPage = () => {
  return (
    <div>
      <h1>This is User Page</h1>
      <Link href={`admin`}>Go to admin</Link>
    </div>
  );
};

export default userPage;
