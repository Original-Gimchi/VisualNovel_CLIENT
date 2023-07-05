import classNames from 'classnames';
import { HTMLAttributes } from 'react';

interface CompanyItemProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export default function CompanyItem({ className, children }: CompanyItemProps) {
  return (
    <div className={classNames('bg-black-500 shadow-lg shadow-black-500/50 bg-[white]', className)}>{children}</div>
  );
}
