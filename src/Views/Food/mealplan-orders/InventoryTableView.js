import React, { useState } from "react";
import TabHeader from "./TabHeader";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import ProductDetails from "./ProductDetails";
import SellerDetails from "./SellerDetails";
import { LoadingIcon } from "svg";

const InventoryTableView = ({
  loading,
  events: { data = [], last_page },
  dispatch,
  pageNumber,
  setPageNumber,
}) => {
  const [active, setActive] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSeller, setSelectedSeller] = useState(null);
  return (
    <div className="w-full mt-8">
      <TabHeader
        active={active}
        setActive={setActive}
        length={data?.length}
        activeLength={
          data.filter((item) => item.meal_plan.status === "active").length
        }
        inactiveLength={
          data.filter((item) => item.meal_plan.status === "inactive").length
        }
      />
      <div className="bg-white overflow-x relative rounded-b-2xl rounded-tr-2xl p-10 z-40 md:p-4 md:-mx-6">
        <TableHeader
          active={active}
          setActive={setActive}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          lastPage={last_page}
          loading={loading}
        />
        {loading ? (
          <div className="mt-20 mb-20 flex justify-center">
            <LoadingIcon />
            <span className="text-purple-500 animate-pulse">
              Loading orders...
            </span>
          </div>
        ) : (
          <TableBody
            setSelectedProduct={setSelectedProduct}
            setSelectedSeller={setSelectedSeller}
            active={active}
            setActive={setActive}
            events={data}
            dispatch={dispatch}
            // filterInput={filterInput}
          />
        )}
      </div>
      {selectedProduct && (
        <ProductDetails
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      <SellerDetails
        selectedSeller={selectedSeller}
        setSelectedSeller={setSelectedSeller}
      />
    </div>
  );
};

export default InventoryTableView;