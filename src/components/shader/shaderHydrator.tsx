import ShaderProvider from "./shaderContext";
import fs from "fs/promises";

type Props = {
  children: React.ReactNode;
  shaderFiles: string[];
};

export default async function ShaderHydrator({ children, shaderFiles }: Props) {
  const shaders = (
    await Promise.all(
      shaderFiles.map(async (fileName) => {
        const shader = await fs.readFile(fileName, "utf8");
        return { [fileName]: shader };
      })
    )
  ).reduce((acc, curr) => ({ ...acc, ...curr }), {});

  return <ShaderProvider shaders={shaders}>{children}</ShaderProvider>;
}
