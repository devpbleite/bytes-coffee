import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="next coffee" width={77} height={38} />
    </Link>
  );
};

export default Logo;
