import React from 'react';

export default function UseNavigationOpen() {
  const [openNavBar, setOpenNavBar] = React.useState(false);

  const handleOpenNavBar = () => {
    setOpenNavBar(!openNavBar);
  };

  return [openNavBar, handleOpenNavBar];
}
