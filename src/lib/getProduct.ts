import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as {
        name: string;
        price: number;
        description: string;
        imageUrl: string;
        category: string;
        stock: number;
      })
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
