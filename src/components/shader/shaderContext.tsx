"use client";

import { createContext, memo, useCallback, useContext, useMemo } from "react";

type Props = {
  children: React.ReactNode;
  shaders: Record<string, string>;
};

const ShaderContext = createContext<{
  getShader: (name: string) => string | undefined;
}>({
  getShader: () => "",
});

function ShaderProvider({ children, shaders }: Props) {
  const getShader = useCallback(
    (name: string) => {
      return shaders[name] ?? undefined;
    },
    [shaders]
  );

  const value = useMemo(() => ({ getShader }), [getShader]);

  return (
    <ShaderContext.Provider value={value}>{children}</ShaderContext.Provider>
  );
}

export function useShader(name: string) {
  const { getShader } = useContext(ShaderContext);

  const shader = getShader(name);

  if (!shader) {
    throw new Error(`Shader ${name} not found`);
  }

  return shader;
}

export default memo(ShaderProvider);
