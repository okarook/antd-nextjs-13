import { extractStyle } from "@ant-design/static-style-extract";
import { ConfigProvider } from "antd";
import fs from "fs";

const outputPath = "./public/antd.min.css";

// const css = extractStyle();

const css = extractStyle((node: React.ReactNode) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "red",
      },
    }}
  >
    {node}
  </ConfigProvider>
));

fs.writeFileSync(outputPath, css);

console.log(`🎉 Antd CSS generated at ${outputPath}`);
