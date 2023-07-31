"use client";
import { chartData } from "@/app/constants/mockup";
import { base64ToArrayBuffer } from "@/app/utils/functions";
import { Column } from "@ant-design/charts";
import type { ColumnConfig } from "@ant-design/plots";
import { Button, message } from "antd";
import html2canvas from "html2canvas";
import { PDFDocument } from "pdf-lib";
import React, { useState } from "react";

const ChartPage = () => {
  const [data, setData] = useState(chartData);

  const config: ColumnConfig = {
    data,
    isStack: true,
    xField: "day",
    yField: "value",
    seriesField: "type",
    columnStyle: {
      stroke: "black",
      lineWidth: 1,
    },
    color: ({ type }) => {
      let c = "rgb(30,30,30)";
      if (type === "oa") {
        c = "lightgreen";
      } else if (type === "mc_loss") {
        c = "orange";
      } else if (type === "addon_loss") {
        c = "red";
      }
      return c;
    },
    label: {
      position: "middle",
    },
    interactions: [{ type: "active-region", enable: false }],
    connectedArea: {
      style: (oldStyle, _) => {
        return {
          fill: "rgba(0,0,0,0.25",
          stroke: oldStyle.fill,
          lineWidth: 0.5,
        };
      },
    },
  };

  const generate = async () => {
    const chart = document.getElementById("chart");
    if (!chart) {
      message.error("not found Chart element");
      return;
    }
    const canvas = await html2canvas(chart);
    const b64 = canvas.toDataURL("image/png");
    const arrBuf = base64ToArrayBuffer(b64.split("base64,")[1]);

    const doc = await PDFDocument.create();
    const page = doc.addPage();
    const image = await doc.embedPng(arrBuf);
    page.drawImage(image, { x: 30, y: 30, width: 300, height: 100 });
    const pdf = await doc.save();
    const blob = new Blob([pdf.buffer], { type: "application/pdf" });
    window.open(URL.createObjectURL(blob));
  };

  return (
    <div>
      <Button type="primary" onClick={generate}>
        Generate
      </Button>
      <div id="chart" style={{ width: "80vw" }}>
        <Column {...config} />
      </div>
    </div>
  );
};

export default ChartPage;
