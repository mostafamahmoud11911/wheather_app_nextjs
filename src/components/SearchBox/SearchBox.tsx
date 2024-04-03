import { cn } from "@/utils/cn";
import { IoSearchOutline } from "react-icons/io5";

type Props = {
  value: string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox({
  value,
  onChange,
  onSubmit,
  className,
}: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex items-center justify-center h-10", className)}
    >
      <input
        type="text"
        value={value}
        placeholder="search by location..."
        onChange={onChange}
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full"
      />
      <button  className="bg-blue-500 text-white h-full rounded-r-md px-4 py-[9px] focus:outline-none hover:bg-blue-600">
        <IoSearchOutline />
      </button>
    </form>
  );
}
