import React from "react";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import "./combobox.css";

export default function ComboboxExample({ placeholder, options }) {
  return (
    <Combobox>
      <ComboboxInput
        className="input"
        aria-labelledby="demo"
        placeholder={placeholder}
      />
      <ComboboxPopover>
        <ComboboxList aria-labelledby="demo">
          {options.map((option) => (
            <ComboboxOption value={option} key={option} />
          ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
