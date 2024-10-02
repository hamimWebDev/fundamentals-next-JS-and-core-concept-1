
import React from "react";

const Page = ({ params, searchParams }:{params:any, searchParams:any}) => {
  console.log(searchParams);
  console.log(88);
  return (
    <div>
      <h1>This is dynamic single product page {params.productId}, </h1>
    </div>
  );
};

export default Page;
