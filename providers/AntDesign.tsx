"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry";


const AntDesignContextProvider = ({ children }: { children: React.ReactNode }) => {
    return <AntdRegistry>{children}</AntdRegistry>;
  }

  export default AntDesignContextProvider;