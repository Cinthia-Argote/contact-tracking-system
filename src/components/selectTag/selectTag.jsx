import { useState } from "react";
import { Tag } from "antd";
import { useDispatch } from "react-redux";
import { searchBy } from "../../store/candidateSlice";

const { CheckableTag } = Tag;
const tagsData = [
  {
    label: "First Name",
    value: "firstName",
    checked: false,
  },
  {
    label: "Last Name",
    value: "lastName",
    checked: false,
  },
  {
    label: "Email",
    value: "email",
    checked: false,
  },
  {
    label: "Phone",
    value: "phone",
    checked: false,
  },
  {
    label: "Zip Code",
    value: "zipCode",
    checked: false,
  },
];

const SelectTag = () => {
  const [selectedTags, setSelectedTags] = useState(tagsData);
  const dispatch = useDispatch();

  const handleChange = (tag, checked) => {
    const nextSelectedTags = tagsData.map((item) => {
      if (checked && item.value === tag.value) {
        return {
          ...item,
          checked: true,
        };
      } else {
        return {
          ...item,
          checked: false,
        };
      }
    });
    setSelectedTags(nextSelectedTags);
    const value = checked ? tag.value : "";
    dispatch(searchBy(value));
  };

  return (
    <>
      <span
        style={{
          marginRight: 8,
        }}
      >
        Search By:
      </span>
      {selectedTags.map((tag) => (
        <CheckableTag
          key={tag.value}
          checked={tag.checked}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag.label}
        </CheckableTag>
      ))}
    </>
  );
};

export default SelectTag;
