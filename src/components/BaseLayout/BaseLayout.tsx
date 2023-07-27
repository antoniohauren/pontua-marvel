import { BaseLayoutProps } from ".";

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex h-screen w-full justify-center bg-blue/800">
      <div className="w-full max-w-[1200px] p-10">
        <div className="mb-4">
          <img src="/logo_pontua_white.svg" alt="logo pontua" />
        </div>

        <div className=" grid grid-cols-1 gap-10 md:grid-cols-2">
          <img
            src="/building.svg"
            alt="building illust"
            className="order-last w-full md:order-first"
          />
          <div className="order-first md:order-last">{children}</div>
        </div>
      </div>
    </div>
  );
}
