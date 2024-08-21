import React from "react";
import dayjs from "dayjs";

import "dayjs/locale/zh-cn";

import { Calendar, theme } from "antd";
import type { Dayjs } from "dayjs";
import dayLocaleData from "dayjs/plugin/localeData";
import { SelectInfo } from "antd/es/calendar/generateCalendar";

dayjs.extend(dayLocaleData);

const Kalendorius: React.FC = () => {
  const { token } = theme.useToken();

  const dateChange = (value: Dayjs, selectInfo: SelectInfo) => {
    if (selectInfo.source == "date") {
      console.log(value.format("YYYY-MM-DD"));
    }
  };

  const wrapperStyle: React.CSSProperties = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} onSelect={dateChange} />
    </div>
  );
};

export default Kalendorius;
