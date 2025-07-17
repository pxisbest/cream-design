import Icon from "../Icon/icon";
import Input, { type InputProps } from "../Input/input";
import { useEffect, useRef, useState } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useDebounce from "../../hooks/useDebounce";
import classNames from "classnames";
import useClickOutside from "../../hooks/useClickOutside";

//更复杂的数据类型
interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps<T = {}>
  extends Omit<InputProps, "onSelect"> {
  value?: string;
  fetchSuggestions: (
    str: string
  ) => DataSourceType<T>[] | Promise<DataSourceType<T>[]>; //获取建议列表的函数
  onSelect?: (item: string) => void;
  renderOption?: (item: DataSourceType<T>) => React.ReactElement; //用户自定义模板
}

export const AutoComplete = <T extends {}>(props: AutoCompleteProps<T>) => {
  const { fetchSuggestions, onSelect, value, renderOption, ...restProps } =
    props;
  const [inputValue, setInputValue] = useState(() => {
    return typeof value === "string" ? value : "";
  });
  const [suggestions, setSuggestions] = useState<DataSourceType<T>[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1); //初始没有任何高亮
  //useRef解决二次搜索问题
  const triggerSearch = useRef(false);
  //clickoutside功能
  const componentRef = useRef<HTMLDivElement>(null); //创建一个ref来引用组件的DOM元素
  useClickOutside(componentRef, () => {
    setSuggestions([]); //点击外部时清空建议列表
  });
  //使用useDebounce防抖
  const debouncedValue = useDebounce(inputValue, 500);
  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      const results = fetchSuggestions(debouncedValue);
      if (results instanceof Promise) {
        setIsLoading(true);
        results.then((data) => {
          setIsLoading(false);
          setSuggestions(data);
        });
      } else {
        setSuggestions(results);
      }
    } else {
      setSuggestions([]);
    }
    setHighlightIndex(-1); //每次输入变化时重置高亮索引
  }, [debouncedValue]); //inputValue变化时触发副作用
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true; //标记为触发搜索
  };

  const handleSelect = (item: DataSourceType<T>) => {
    setInputValue(item.value);
    setSuggestions([]);
    if (onSelect) {
      onSelect(item.value);
    }
    triggerSearch.current = false; //选择后重置标记
  };
  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) index = suggestions.length - 1;
    setHighlightIndex(index);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //上下箭头回车esc
    switch (e.key) {
      case "Enter":
        handleSelect(suggestions[highlightIndex]);
        break;
      case "ArrowUp":
        highlight(highlightIndex - 1);
        break;
      case "ArrowDown":
        highlight(highlightIndex + 1);
        break;
      case "Escape":
        setSuggestions([]);
        break;
      default:
        break;
    }
  };
  const renderTemplate = (item: DataSourceType<T>) => {
    return renderOption ? renderOption(item) : item.value;
  };

  const generateDropdown = () => {
    return (
      <ul className="cream-suggestion-list">
        {suggestions.map((item, index) => {
          const cnames = classNames("suggestion-item", {
            "is-active": index === highlightIndex,
          });
          return (
            <li
              key={index}
              className={cnames}
              onClick={() => handleSelect(item)}
            >
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="cream-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {isLoading && (
        <ul className="cream-suggestion-list">
          <li className="suggstions-loading-icon">
            <Icon icon={faSpinner} spin />
          </li>
        </ul>
      )}
      {/* 如果有建议列表，则渲染下拉菜单 */}
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};
