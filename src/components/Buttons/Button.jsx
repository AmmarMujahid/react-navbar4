// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
  return (
    <div>
      <button className="bg-[#FCFAF9] text-[#333333] text-lg font-medium px-4 py-2 inline rounded-md">
        {children}
      </button>
    </div>
  );
}
