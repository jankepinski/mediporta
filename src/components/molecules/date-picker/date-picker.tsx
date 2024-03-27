/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";

export const DatePicker = ({
  value,
  onChange,
}: {
  value: any;
  onChange: (date: any) => void;
}) => {
  return (
    <MuiDatePicker
      disableHighlightToday
      value={value}
      onChange={onChange}
      slotProps={{
        textField: { size: "small", sx: { width: 180 } },
        openPickerButton: {
          sx: {
            ":focus": {
              outline: "none",
            },
          },
        },
        day: {
          sx: {
            ":focus": {
              outline: "none",
            },
          },
        },
      }}
    />
  );
};
