"use client";

import { auth, db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const DisplayProduct = () => {
  const [product, setProduct] = useState<any>([]);
  useEffect(() => {
    if (!auth) return;
    const todoRef = collection(db, "products");
    onSnapshot(todoRef, snapshot => {
      setProduct(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <div>
      <div>DisplayProduct</div>
      {product.map((pdt: any) =>
        <div
          key={pdt.id}
          className="border border-black flex justify-between gap-4"
        >
          <p>
            {pdt.createdAt}
          </p>
          <p>
            {pdt.name}
          </p>
          <p>
            {pdt.oldPrice}
          </p>
          <p>
            {pdt.newPrice}
          </p>
          <p>
            {pdt.discount}
          </p>
          <p>
            {pdt.comment}
          </p>
          <p>
            {pdt.arrival}
          </p>
          <p>
            {pdt.Categories}
          </p>
          <p>
            {pdt.rating}
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayProduct;
