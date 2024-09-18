import { mount } from 'sidebar/SidebarApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    const { unmount } = mount(ref.current);

    return (() => { unmount() })
  }, []);

  return <div ref={ref} />;
};
