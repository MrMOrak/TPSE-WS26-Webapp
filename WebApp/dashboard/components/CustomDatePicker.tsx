'use client';

import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useForkRef } from '@mui/material/utils';
import Button from '@mui/material/Button';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { DatePickerFieldProps } from '@mui/x-date-pickers/DatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useParsedFormat, usePickerContext } from '@mui/x-date-pickers';

function ButtonField(_props: DatePickerFieldProps) {
  const pickerContext = usePickerContext();
  const handleRef = useForkRef(pickerContext.triggerRef, pickerContext.rootRef);
  const parsedFormat = useParsedFormat();
  const valueStr =
    pickerContext.value == null
      ? parsedFormat
      : pickerContext.value.format(pickerContext.fieldFormat);

  return (
    <Button
      variant="outlined"
      ref={handleRef}
      size="small"
      startIcon={<CalendarTodayRoundedIcon fontSize="small" />}
      sx={{ minWidth: 'fit-content' }}
      onClick={() => pickerContext.setOpen((prev) => !prev)}
    >
      {pickerContext.label ?? valueStr}
    </Button>
  );
}

export default function CustomDatePicker() {
  const [mounted, setMounted] = React.useState(false);
  const [value, setValue] = React.useState<Dayjs | null>(null);

  React.useEffect(() => {
    setValue(dayjs());
    setMounted(true);
  }, []);

  // Beim Prerender (Server) wird nur dieser Platzhalter gerendert,
  // der MUI-Picker erst im Browser.
  if (!mounted) {
    return (
      <Button
        variant="outlined"
        size="small"
        disabled
        startIcon={<CalendarTodayRoundedIcon fontSize="small" />}
        sx={{ minWidth: 'fit-content' }}
      >
        Datum
      </Button>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        label={value == null ? null : value.format('MMM DD, YYYY')}
        onChange={(newValue) => setValue(newValue)}
        slots={{ field: ButtonField }}
        slotProps={{
          nextIconButton: { size: 'small' },
          previousIconButton: { size: 'small' },
        }}
        views={['day', 'month', 'year']}
      />
    </LocalizationProvider>
  );
}