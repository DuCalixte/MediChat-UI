import React, { useState } from 'react';

export const handleToggleState = (start) => {
  const [open, setOpen] = useState(start);

  const handleOpenToggle = () => { setOpen(true) }
  const handleCloseToggle = () => { setOpen(false) }

  return { open, handleOpenToggle, handleCloseToggle }
}
