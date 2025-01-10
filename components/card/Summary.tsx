interface Props {
  heading: string;
  count: number;
}

const Summary = ({ heading, count }: Props) => {
  return (
    <div className="shadow bg-white py-3 px-4 rounded">
      <h4 className="text-textGray font-light uppercase text-sm">{heading}</h4>
      <h3 className="font-semibold text-4xl">{count}</h3>
    </div>
  );
};

export default Summary;
