export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FDF9F2]">
      <div className="flex flex-col items-center">
        
        <div className="relative mb-6">
          <div className="h-16 w-16 animate-spin rounded-full border border-[#800E13]/20 border-t-[#800E13]" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-sm font-semibold text-[#800E13]">
              BY
            </span>
          </div>
        </div>

        <p className="font-serif text-lg text-[#351414]">
          Bin Yameen Travels
        </p>

        <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#800E13]/60">
          Preparing your journey
        </p>

      </div>
    </main>
  );
}