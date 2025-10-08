export default function BlogPost(props) {
  return (
    <div className="flex flex-col p-1 justify-center items-center mb-5 w-[90vw]">
      <div className="flex text-xl p-1 justify-center text-center text-white font-semibold border-2 bg-[#121212] border-white w-full rounded-xl">
        {props.title}
      </div>
      <div className="font-light p-2">{props.body}</div>
    </div>
  );
}
