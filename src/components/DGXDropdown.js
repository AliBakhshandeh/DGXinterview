import { useCallback, useEffect, useMemo, useState } from "react";

const DGXDropdown = ({ list = [], action = () => {}, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    key: -1,
    name: "یک مورد را انتخاب کنید",
  });
  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const selectItem = useCallback(
    (item) => {
      setIsOpen(false);
      setSelectedItem(item);
      action(item);
    },
    [setSelectedItem]
  );

  const renderOptions = useMemo(() => {
    if (list.length === 0)
      return (
        <div className="list size color">
          <div className="item size text" onClick={handleClick}>
            اطلاعات موجود نیست
          </div>
        </div>
      );
    return (
      <>
        {isOpen && (
          <div
            onBlur={() => handleClick()}
            tabIndex={0}
            className="list size color"
          >
            {list.map((item, i) => (
              <div
                key={`${item.name}-${item.key}-${i}}`}
                className="item size text"
                onClick={() => selectItem(item)}
              >
                {item?.name}
              </div>
            ))}
          </div>
        )}
      </>
    );
  }, [list, selectItem, handleClick, isOpen]);

  useEffect(() => {
    if (defaultValue) {
      const val = list?.find((item) => item?.key === defaultValue);
      setSelectedItem(val);
    }
  }, [list]);
  return (
    <>
      <div className="drop-down">
        <div
          className={`input size text color ${isOpen && "active"}`}
          onClick={handleClick}
        >
          {selectedItem?.name}
        </div>
        {renderOptions}
      </div>
    </>
  );
};
export default DGXDropdown;
