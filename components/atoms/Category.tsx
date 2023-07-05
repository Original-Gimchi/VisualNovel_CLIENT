import classNames from 'classnames';
import { HTMLAttributes } from 'react';

interface CategoryProps extends HTMLAttributes<HTMLButtonElement> {
  varient?: 'primary' | 'secondary';
  disabled?: boolean;
}

export default function Category({ className, disabled = false, ...props }: CategoryProps) {
  return (
    <button
      style={{
        boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.1)'
      }}
      className={classNames(
        'px-[12px] py-[4px] rounded-[999px] bg-black-500 bg-[#f7f8fa]',
        'text-[12px] font-[600] text-[gray]',
        className
      )}
      {...props}
    />
  );
}
