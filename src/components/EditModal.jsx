
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Select, { components } from "react-select";
import { FaMapMarkerAlt, FaEdit, FaTimes } from "react-icons/fa";

const EditModal = ({ isOpen, onRequestClose, row, countries, onSave }) => {
  const [name, setName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [initialName, setInitialName] = useState("");
  const [initialCountry, setInitialCountry] = useState(null);
  const [nameError, setNameError] = useState("");

  // Populate from selected row
  useEffect(() => {
    if (row) {
      const rowName = row.name || row.entity || "";
      const rowCountry = row.country || "";

      setName(rowName);
      setInitialName(rowName);

      const countryOption =
        countries?.find(
          (c) => c.label === rowCountry || c.value === rowCountry
        ) || null;

      setSelectedCountry(countryOption);
      setInitialCountry(countryOption);
    }
  }, [row, countries]);

  const hasChanged =
    name !== initialName ||
    (selectedCountry?.value || "") !== (initialCountry?.value || "");

  const handleSave = async () => {
    if (!hasChanged || isSaving) return;

    if (!name.trim()) {
      setNameError("Name is required");
      return;
    }

    setNameError("");
    setIsSaving(true);
    try {
      await onSave({
        ...row,
        name,
        entity: name,
        country: selectedCountry?.label || selectedCountry?.value || "",
      });
      onRequestClose();
    } finally {
      setIsSaving(false);
    }
  };

  // ====== react-select styling (Figma-ish) ======
  const selectStyles = {
    control: (base, state) => ({
      ...base,
      width: "100%",
      minHeight: "44px",
      height: "44px",
      borderRadius: "8px",
      borderColor: state.isFocused ? "#6F3FF5" : "#E5E5E5",
      boxShadow: state.isFocused ? "0 0 0 1px #6F3FF5" : "none",
      backgroundColor: "#F9FAFB",
      cursor: "pointer",
      boxSizing: "border-box",
      "&:hover": {
        borderColor: state.isFocused ? "#6F3FF5" : "#E5E5E5",
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0 16px",
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
      fontSize: "14px",
      color: "#111827",
      fontFamily: "Inter, sans-serif",
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: "14px",
      fontWeight: 400,
      color: "#111827",
      fontFamily: "Inter, sans-serif",
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: "14px",
      color: "#9CA3AF",
      fontFamily: "Inter, sans-serif",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      paddingRight: "12px",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      padding: "8px",
      color: state.isFocused ? "#6F3FF5" : "#6B6B6B",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (base) => ({
      ...base,
      marginTop: 4,
      borderRadius: 8,
      border: "1px solid #E7E6EB",
      boxShadow:
        "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
      overflow: "hidden",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "#F7F4FF"
        : state.isSelected
        ? "#F4EBFF"
        : "#FFFFFF",
      color: "#111827",
      padding: 0,
      cursor: "pointer",
    }),
    menuList: (base) => ({
      ...base,
      padding: "4px",
      maxHeight: "132px",
    }),
  };

  // Custom option with location icon + pencil, like Figma
  const CustomOption = (props) => {
    const { data, isFocused, innerProps } = props;
    return (
      <div
        {...innerProps}
        className="flex items-center justify-between rounded cursor-pointer"
        style={{
          padding: "12px 16px",
          backgroundColor: isFocused ? "#F7F4FF" : "transparent",
        }}
      >
        <div className="flex items-center" style={{ gap: '16px' }}>
          <FaMapMarkerAlt size={14} className="text-[#6B6B6B]" style={{ flexShrink: 0 }} />
          <span
            className="text-[#111827]"
            style={{ 
              fontSize: '14px',
              fontFamily: "Inter, sans-serif", 
              fontWeight: 400 
            }}
          >
            {data.label}
          </span>
        </div>
        <FaEdit size={14} className="text-[#6F3FF5]" style={{ flexShrink: 0 }} />
      </div>
    );
  };

  const customComponents = {
    Option: CustomOption,
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick
      style={{
        overlay: {
          backgroundColor: "rgba(15, 23, 42, 0.55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50,
        },
        content: {
          position: "relative",
          inset: "auto",
          padding: 0,
          border: "none",
          borderRadius: 8,
          width: 560,
          maxWidth: "calc(100% - 40px)",
          maxHeight: "calc(100vh - 80px)",
          overflow: "hidden",
          fontFamily: "Inter, sans-serif",
        },
      }}
    >
      {/* Modal shell: header + content + footer */}
      <div className="flex flex-col h-full bg-white">
        {/* Header */}
        <div
          className="flex items-center justify-between border-b"
          style={{
            borderColor: "#E5E7EB",
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          <h2
            className="text-[20px]"
            style={{ fontWeight: 600, color: "#111827" }}
          >
            Edit Customer
          </h2>
          <button
            type="button"
            onClick={onRequestClose}
            className="flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
            style={{ width: "24px", height: "24px" }}
          >
            <FaTimes className="text-black" size={20} />
          </button>
        </div>

        {/* Content */}
        <div
          className="flex-1"
          style={{
            paddingTop: 32,
            paddingBottom: 32,
            paddingLeft: 32,
            paddingRight: 32,
            minHeight: "280px",
          }}
        >
          {/* Name */}
          <div style={{ marginBottom: '40px' }}>
            <label
              className="block text-[13px] mb-[10px]"
              style={{ fontWeight: 500, color: "#6B6B6B" }}
            >
              Name <span style={{ color: "#EF4444" }}>*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-[44px] rounded-[8px] border text-[14px] outline-none"
              style={{
                width: '100%',
                boxSizing: 'border-box',
                paddingLeft: '16px',
                paddingRight: '16px',
                borderColor: "#E5E5E5",
                backgroundColor: "#F9FAFB",
                color: "#111827",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
              }}
              onFocus={(e) => (e.target.style.borderColor = "#6F3FF5")}
              onBlur={(e) => (e.target.style.borderColor = "#E5E5E5")}
            />
            {nameError && (
              <p
                className="mt-1 text-[12px]"
                style={{ color: "#EF4444", fontFamily: "Inter, sans-serif" }}
              >
                {nameError}
              </p>
            )}
          </div>

          {/* Country */}
          <div className="mb-8">
            <label
              className="block text-[13px] mb-[10px]"
              style={{ fontWeight: 500, color: "#6B6B6B" }}
            >
              Country
            </label>
            <Select
              value={selectedCountry}
              onChange={(value) => setSelectedCountry(value)}
              options={countries}
              styles={selectStyles}
              components={customComponents}
              isSearchable={false}
              menuPlacement="auto"
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-end border-t"
          style={{
            borderColor: "#E5E7EB",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 32,
            paddingRight: 32,
            gap: "12px"
          }}
        >
          <button
            type="button"
            onClick={onRequestClose}
            className="rounded-[8px] text-[14px] font-medium transition-colors hover:bg-[#F9FAFB]"
            style={{
              border: "1px solid #E5E5E5",
              backgroundColor: "#FFFFFF",
              color: "#374151",
              fontFamily: "Inter, sans-serif",
              padding: "12px 24px",
              minWidth: "100px",
              height: "44px",
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={!hasChanged || isSaving}
            className="rounded-[8px] text-[14px] font-medium text-white disabled:cursor-not-allowed transition-colors hover:opacity-90"
            style={{
              backgroundColor:
                !hasChanged || isSaving ? "#D4C7FF" : "#6F3FF5",
              fontFamily: "Inter, sans-serif",
              padding: "12px 24px",
              minWidth: "100px",
              height: "44px",
            }}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;

