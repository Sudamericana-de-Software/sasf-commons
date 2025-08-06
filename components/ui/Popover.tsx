import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  width?: string;
  height?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({ trigger, children, width = '400px', height = '300px', position = 'bottom', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [popoverStyles, setPopoverStyles] = useState({ top: 0, left: 0 });

  const togglePopover = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const popW = parseInt(width, 10);
    const popH = parseInt(height, 10);

    let topVal = 0;
    let leftVal = 0;

    switch (position) {
      case 'bottom':
        topVal = triggerRect.bottom + scrollY;
        leftVal = triggerRect.left + scrollX;
        break;
      case 'top':
        topVal = triggerRect.top + scrollY - popH;
        leftVal = triggerRect.left + scrollX;
        break;
      case 'left':
        topVal = triggerRect.top + scrollY;
        leftVal = triggerRect.left + scrollX - popW;
        break;
      case 'right':
        topVal = triggerRect.top + scrollY;
        leftVal = triggerRect.right + scrollX;
        break;
    }

    setPopoverStyles({ top: topVal, left: leftVal });
  }, [isOpen, position, width, height]);

  return (
    <>
      <div ref={triggerRef} className="inline-block cursor-pointer" onClick={togglePopover}>
        {trigger}
      </div>

      {isOpen &&
        createPortal(
          <div
            ref={popoverRef}
            className={`absolute bg-[var(--bg)] shadow-lg rounded-md p-3 border border-[var(--border)] ${className}`}
            style={{
              position: 'absolute',
              width,
              height,
              top: `${popoverStyles.top}px`,
              left: `${popoverStyles.left}px`,
              zIndex: 1040,
            }}
          >
            {children}
          </div>,
          document.body
        )}
    </>
  );
};
