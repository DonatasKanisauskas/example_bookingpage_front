import React from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  hour: string;
  "0min": string;
  "15min": string;
  "30min": string;
  "45min": string;
}

const ScheduleTable: React.FC = () => {
  const hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16"];

  const columns: ColumnsType<DataType> = [
    {
      title: "Hour",
      dataIndex: "hour",
      key: "hour",
      align: "center",
    },
    {
      title: "0 min",
      dataIndex: "0min",
      key: "0min",
      align: "center",
      render: (text) => <Button>{text}</Button>,
    },
    {
      title: "15 min",
      dataIndex: "15min",
      key: "15min",
      align: "center",
      render: (text) => <Button>{text}</Button>,
    },
    {
      title: "30 min",
      dataIndex: "30min",
      key: "30min",
      align: "center",
      render: (text) => <Button>{text}</Button>,
    },
    {
      title: "45 min",
      dataIndex: "45min",
      key: "45min",
      align: "center",
      render: (text) => <Button disabled>{text}</Button>,
    },
  ];

  const data: DataType[] = hours.map((hour) => ({
    hour: `${hour}:00`,
    "0min": "Available",
    "15min": "Available",
    "30min": "Available",
    "45min": "Available",
  }));

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      size="small"
      style={{ borderRadius: "25px" }}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            console.log(`Clicked row ${rowIndex}, cell ${record.hour}`);
          },
        };
      }}
    />
  );
};

export default ScheduleTable;
