import React, { useState } from "react";
import classNames from "classnames";

interface AlertProps {
  className?: string; //自定义类名
  title: string;
  type?: "success" | "danger" | "warning" | "default"; //警告类型
  description?: string; //描述信息
  closable?: boolean; //是否可关闭
  onClose?: () => void; // 可选关闭回调
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    className,
    title,
    type = "default",
    description,
    closable = true, //是否可关闭
    onClose,
  } = props;
  const [visible, setVisible] = useState(true);
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type, //根据type添加不同的样式
  });
  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };
  if (!visible) {
    return null; //如果不可见，返回null
  }
  return (
    <div className={classes}>
      <span className="alert-title">{title}</span>
      {description && <p className="alert-description">{description}</p>}
      {closable && (
        <span className="alert-close" onClick={handleClose}>
          ×
        </span>
      )}
    </div>
  );
};
export default Alert;
