import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="relative w-1/3">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <input 
        type="text" 
        placeholder="Search..." 
        className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary/50 text-foreground border-none focus:outline-none focus:ring-2 focus:ring-[#3fcda0]"
      />
    </div>
  )
}