import React from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";

//import Products from "../../modules/Home/Products";

const Forum = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <PageLayout darkMode={darkMode}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
    </PageLayout>
  );
};

export default Forum;
