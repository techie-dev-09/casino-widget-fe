import React from 'react';

function TableSortButton({
  className,
  value,
  topValue,
  bottomValue,
  onChange = () => {}
}) {
  return (
    <div className={'d-inline-flex flex-column ' + className}>
      {[topValue, bottomValue].map((v, i) => (
        <button
          key={i}
          type="button"
          className={
            'btn border-0 lh-1 font-size-10 btn-sm p-0 m-0 hover:text-dark ' +
            (value === v ? '' : 'text-muted')
          }
          onClick={() => onChange(value === v ? null : v)}>
          <i className={'fas fa-chevron-' + (i ? 'down' : 'up')}></i>
        </button>
      ))}
    </div>
  );
}

export default TableSortButton;
