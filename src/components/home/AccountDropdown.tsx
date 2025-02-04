import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleView = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div onClick={toggleView} className="relative">
      <Image
        src="/navbar/account.svg"
        className="hover:bg-red-500 w-full rounded-full items-center justify-center text-sm"
        alt="cart"
        width={32}
        height={32}
      />

      {isOpen &&
        <div className="flex flex-col w-[225px] top-8 right-1 gap-3 p-4 z-10 absolute backdrop-blur-[150px] bg-black bg-opacity-20 text-white">
          <Link href="/account" className="flex gap-2">
            <Image
              src="/navbar/account/account.svg"
              alt="account"
              width={24}
              height={24}
              className=""
            />
            Manage My Account
          </Link>
          <Link href="/cart" className="flex gap-2">
            <Image
              src="navbar/account/order.svg"
              width={24}
              height={24}
              alt="order"
            />
            My Order
          </Link>
          <Link href="/cart" className="flex gap-2">
            <Image
              src="navbar/account/cancellation.svg"
              width={24}
              height={24}
              alt="cancel"
            />
            My Cancellations
          </Link>
          <Link href="/cart" className="flex gap-2">
            {" "}<Image
              src="navbar/account/review.svg"
              width={24}
              height={24}
              alt="review"
            />My Reviews
          </Link>
          <Link href="/cart" className="flex gap-2">
            {" "}<Image
              src="navbar/account/logout.svg"
              width={24}
              height={24}
              alt="logout"
            />Logout
          </Link>
        </div>}
    </div>
  );
};

export default AccountDropdown;
