const GetStartedHero = () => {
  return (
    <div className="w-full h-full relative pointer-events-none">
      <div
        className={[
          'w-[290px] lg:w-[400px] h-[180px] bg-alternative border border-default',
          'rounded-t px-4 py-3 space-y-1 overflow-hidden',
        ].join(' ')}
      >
        <div className="text-xs font-mono space-x-4 flex items-center">
          <span className="text-foreground-light">1</span>
          <p className="text-blue-900">
            create table <span className="text-foreground">countries {`(`}</span>
          </p>
        </div>
        <div className="text-xs font-mono space-x-8 flex items-center">
          <span className="text-foreground-light">2</span>
          <p className="text-foreground">
            id <span className="text-blue-900">bigint generated by default</span>
          </p>
        </div>
        <div className="text-xs font-mono space-x-8 flex items-center">
          <span className="text-foreground-light">3</span>
          <p className="text-foreground">
            name <span className="text-blue-900">text</span>
          </p>
        </div>
        <div className="text-xs font-mono space-x-8 flex items-center">
          <span className="text-foreground-light">4</span>
          <p className="text-foreground">
            iso2 <span className="text-blue-900">text not null</span>
          </p>
        </div>
        <div className="text-xs font-mono space-x-8 flex items-center">
          <span className="text-foreground-light">5</span>
          <p className="text-foreground">
            iso3 <span className="text-blue-900">text</span>
          </p>
        </div>
        <div className="text-xs font-mono space-x-8 flex items-center">
          <span className="text-foreground-light">6</span>
          <p className="text-foreground">
            local_name <span className="text-blue-900">text</span>
          </p>
        </div>
        <div className="text-xs font-mono space-x-8 flex items-center">
          <span className="text-foreground-light">7</span>
          <p className="text-foreground">
            continent <span className="text-blue-900">continents</span>
          </p>
        </div>
        <div className="text-xs font-mono space-x-4 flex items-center">
          <span className="text-foreground-light">8</span>
          <p className="text-blue-900">{`);`}</p>
        </div>
      </div>
      <div
        className={[
          'w-[260px] lg:w-[320px] h-[160px] lg:h-[220px] bg-surface-100 border border-default',
          'absolute right-0 top-[50px] lg:-top-[40px] rounded-t overflow-y-hidden',
        ].join(' ')}
      >
        <div className="h-[24px] flex items-center border-b border-default">
          <div className="w-[10%] h-full flex items-center border-r border-default px-2">
            <div className="w-3 h-3 rounded border border-control" />
          </div>
          <div className="w-[20%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">id</p>
          </div>
          <div className="w-[40%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">name</p>
          </div>
          <div className="w-[30%] h-full flex items-center px-2">
            <p className="text-xs">iso2</p>
          </div>
        </div>
        <div className="h-[30px] flex items-center bg-background border-b border-default">
          <div className="w-[10%] h-full flex items-center border-r border-default px-2">
            <div className="w-3 h-3 rounded border border-control" />
          </div>
          <div className="w-[20%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">1</p>
          </div>
          <div className="w-[40%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">Angola</p>
          </div>
          <div className="w-[30%] h-full flex items-center px-2">
            <p className="text-xs">AO</p>
          </div>
        </div>
        <div className="h-[30px] flex items-center bg-background border-b border-default">
          <div className="w-[10%] h-full flex items-center border-r border-default px-2">
            <div className="w-3 h-3 rounded border border-control" />
          </div>
          <div className="w-[20%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">2</p>
          </div>
          <div className="w-[40%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">Timor-Leste</p>
          </div>
          <div className="w-[30%] h-full flex items-center px-2">
            <p className="text-xs">TL</p>
          </div>
        </div>
        <div className="h-[30px] flex items-center bg-background border-b border-default">
          <div className="w-[10%] h-full flex items-center border-r border-default px-2">
            <div className="w-3 h-3 rounded border border-control" />
          </div>
          <div className="w-[20%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">3</p>
          </div>
          <div className="w-[40%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">Serbia</p>
          </div>
          <div className="w-[30%] h-full flex items-center px-2">
            <p className="text-xs">RS</p>
          </div>
        </div>
        <div className="h-[30px] flex items-center bg-background border-b border-default">
          <div className="w-[10%] h-full flex items-center border-r border-default px-2">
            <div className="w-3 h-3 rounded border border-control" />
          </div>
          <div className="w-[20%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">4</p>
          </div>
          <div className="w-[40%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">Bahamas</p>
          </div>
          <div className="w-[30%] h-full flex items-center px-2">
            <p className="text-xs">BS</p>
          </div>
        </div>
        <div className="h-[30px] flex items-center bg-background border-b border-default">
          <div className="w-[10%] h-full flex items-center border-r border-default px-2">
            <div className="w-3 h-3 rounded border border-control" />
          </div>
          <div className="w-[20%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">5</p>
          </div>
          <div className="w-[40%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">Chile</p>
          </div>
          <div className="w-[30%] h-full flex items-center px-2">
            <p className="text-xs">CL</p>
          </div>
        </div>
        <div className="h-[30px] flex items-center bg-background border-b border-default">
          <div className="w-[10%] h-full flex items-center border-r border-default px-2">
            <div className="w-3 h-3 rounded border border-control" />
          </div>
          <div className="w-[20%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">6</p>
          </div>
          <div className="w-[40%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">Denmark</p>
          </div>
          <div className="w-[30%] h-full flex items-center px-2">
            <p className="text-xs">DK</p>
          </div>
        </div>
        <div className="h-[30px] flex items-center bg-background border-b border-default">
          <div className="w-[10%] h-full flex items-center border-r border-default px-2">
            <div className="w-3 h-3 rounded border border-control" />
          </div>
          <div className="w-[20%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">7</p>
          </div>
          <div className="w-[40%] h-full flex items-center border-r border-default px-2">
            <p className="text-xs">Singapore</p>
          </div>
          <div className="w-[30%] h-full flex items-center px-2">
            <p className="text-xs">SG</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedHero
