import React from 'react';
import PropTypes from 'prop-types';
import * as LucideIcons from 'lucide-react';

const AppIcon = ({ name, size = 24, className = '' }) => {
  const IconComponent = LucideIcons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

AppIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string
};

export default AppIcon;