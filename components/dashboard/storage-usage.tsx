export function StorageUsage() {
  return (
    <div className="col-span-1 lg:col-span-2 bg-secondary/30 rounded-xl p-6">
      <div className="flex items-center">
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 rounded-full border-8 border-brand/30"></div>
          <div 
            className="absolute inset-0 rounded-full border-8 border-brand"
            style={{ 
              clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 75%)",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="h5 text-white">76.9%</span>
            <span className="caption text-muted-foreground">Space used</span>
          </div>
        </div>
        <div className="ml-8">
          <h2 className="h5 text-white">Available Storage</h2>
          <p className="body text-muted-foreground">1.54 GB / 2GB</p>
        </div>
      </div>
    </div>
  )
}