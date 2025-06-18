import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownUp } from "lucide-react";
import { Button } from "../ui/button";

export default function SortAndFilter({
  handleSortChange,
  handleFilterChange,
  handleSortingOrderChange,
}: {
  handleSortChange?: (value: string) => void;
  handleFilterChange?: (value: string) => void;
  handleSortingOrderChange?: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <Select onValueChange={handleSortChange}>
        <SelectTrigger className="w-[120px] md:w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort by:</SelectLabel>
            <SelectItem value="Upload date">Upload date</SelectItem>
            <SelectItem value="alphabetically">alphabetically</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        className="mr-4 md:mr-12"
        variant={"default"}
        onClick={handleSortingOrderChange}
      >
        <ArrowDownUp className="text-gray-200 scale-125" />
      </Button>
      <Select onValueChange={handleFilterChange}>
        <SelectTrigger className="w-[120px] md:w-[180px]">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filter by:</SelectLabel>
            <SelectItem value="Music">Music</SelectItem>
            <SelectItem value="Videos">Videos</SelectItem>
            <SelectItem value="Photos">Photos</SelectItem>
            <SelectItem value="Others">Others</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
