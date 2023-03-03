import React, { useState } from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

const Home: React.FC = () => {
  const [currentId, setCurrentId] = useState<string>("");

  return (
    <div className="flex md:flex-row md:flex-nowrap sm:flex-wrap sm:flex-col-reverse justify-between mt-10">
      <div className="md:justify-start ml-2">
        <Posts setCurrentId={setCurrentId} />
      </div>
      <div className="md:justify-end md:mr-2 md:mt-5">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
};

export default Home;
