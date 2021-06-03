import * as React from "react";
import clsx from "clsx";
import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import ukLocale from "date-fns/locale/uk";

const LifeTimeDatePicker = ({
  className,
  birthValue,
  deathValue,
  setBirthDate,
  setDeathDate,
}) => {
  const handleChange = (value, isDeath) => {
    if (isDeath) {
      setDeathDate(value);
      return;
    }

    setBirthDate(value);
  };

  return (
    <div className={clsx("life-date__container", className)}>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ukLocale}>
        <DatePicker
          className={clsx("life-date__item")}
          disableFuture
          openTo="year"
          label="Дата народження"
          value={birthValue}
          onChange={handleChange}
          onError={(err) => console.log("err", err)}
          renderInput={(params) => (
            <TextField
              className={clsx("life-date__item")}
              {...params}
              helperText={null}
            />
          )}
        />

        <DatePicker
          className={clsx("life-date__item")}
          disableFuture
          openTo="year"
          label="Дата смерті"
          value={deathValue}
          onChange={(value) => handleChange(value, true)}
          renderInput={(params) => (
            <TextField
              className={clsx("life-date__item")}
              {...params}
              helperText={null}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default LifeTimeDatePicker;
