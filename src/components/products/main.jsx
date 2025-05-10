import Card from "./card";
import { useEffect, useState } from "react";
import axios from "axios";
import Cover from "./cover";
import { AnimatePresence, motion } from "framer-motion";
import CardSkeleton from "../../cardSkeleton";
function Main({ Carthandler, filter }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpages, setLength] = useState(0);
  useEffect(() => {
    setProducts([]);
    axios
      .post(import.meta.env.VITE_SERVER + "/fetchProducts/0", filter)
      .then((response) => {
        setPage(1);
        setProducts(response.data.content);
        setLength(response.data.totalPages);
      });
  }, [filter]);

  useEffect(() => {
    axios
      .post(
        import.meta.env.VITE_SERVER + "/fetchProducts/" + `${page - 1}`,
        filter
      )
      .then((response) => {
        setProducts(response.data.content);
      });
  }, [page]);

  return (
    <div className="h-full w-full relative top-0">
      {" "}
      <div className="h-[900px] w-full py-20 ">
        <div className="h-full w-full px-40 py-20 grid grid-cols-3 grid-rows-2 gap-y-16 gap-x-14 ">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                Carthandler={Carthandler}
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <CardSkeleton />
          )}
        </div>
        <div className="w-full h-24  bg-transparent">
          <div className="py-1.5 px-1 relative left-1/3 bottom-16 flex justify-between w-1/3 ">
            <div
              onClick={() => {
                if (page > 1) {
                  setProducts([]);
                  setPage(page - 1);
                }
              }}
              className="text-gray-700 dark:text-white"
            >
              Previous
            </div>{" "}
            {totalpages >= 3 ? (
              <div className="rounded-sm h-7 relative top-0 dark:text-white bg-transparent  text-black ">
                {Math.min(page, totalpages - 2)}{" "}
                {Math.min(page, totalpages - 2) == page ? <Cover /> : <></>}
              </div>
            ) : (
              <></>
            )}
            {totalpages >= 2 ? (
              <div className="rounded-sm relative top-0 dark:text-white bg-transparent text-black">
                {Math.min(page + 1, totalpages - 1)}{" "}
                {Math.min(page + 1, totalpages - 1) == page ? <Cover /> : <></>}
              </div>
            ) : (
              <></>
            )}
            {totalpages >= 1 ? (
              <div className="rounded-sm relative top-0 dark:text-white bg-transparent text-black">
                {Math.min(page + 2, totalpages)}{" "}
                {Math.min(page + 2, totalpages) == page ? <Cover /> : <></>}
              </div>
            ) : (
              <></>
            )}
            <div className="rounded-sm dark:text-white bg-transparent text-black text-2xl">
              . . . .
            </div>
            <div className="rounded-sm dark:text-white bg-transparent text-black">
              {totalpages}
            </div>
            <div
              onClick={() => {
                if (page < totalpages) {
                  setPage(page + 1);
                  setProducts([]);
                }
              }}
              className="bg-black dark:bg-white w-24 px-4 h-8 py-1 text-red-400 flex rounded-lg "
            >
              Next{" "}
              <svg fill="red" xmlns="http://www.w3.org/2000/svg" stroke="red">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g data-name="Layer 2">
                    {" "}
                    <g data-name="arrow-forward">
                      {" "}
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(-90 12 12)"
                        opacity="0"
                      ></rect>{" "}
                      <path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
