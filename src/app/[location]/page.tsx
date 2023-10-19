type Props = {
  params: {
    location: string;
  };
};

const Detail = ({ params }: Props) => {
  const name = params.location === "seoul" ? "서울" : "부산";

  return <h1>{name}의 예보</h1>;
};

export default Detail;
