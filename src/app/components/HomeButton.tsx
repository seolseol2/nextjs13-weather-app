// 클라이언트 컴포넌트는 최대한 트리의 말단으로
// 이렇게 분리 해둬야 나중에 말단으로 빼기 더 쉬워진다
"use client";

import { useRouter } from "next/navigation";

const HomeButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return <button onClick={handleClick}>홈으로</button>;
};

export default HomeButton;
