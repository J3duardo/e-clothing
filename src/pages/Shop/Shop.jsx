import React from 'react';
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";

const Shop = () => {
  document.title = "Crown | Our Shop"
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
}

export default Shop;