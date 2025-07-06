import React from 'react';

function UserAvatar({ name, size = 'sm' }) {
  // Get first letters of name for avatar
  const firstLetter = name.split(' ')[0][0];
  const secondLetter = name.split(' ')[1] ? name.split(' ')[1][0] : '';
  const initials = firstLetter + secondLetter;
  
  // Pick colors for different people
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'];
  const colorIndex = name.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];
  
  // Different sizes for avatars
  let avatarSize = 'w-6 h-6 text-xs';
  if (size === 'md') {
    avatarSize = 'w-8 h-8 text-sm';
  }
  
  return (
    <div className={`${bgColor} ${avatarSize} rounded-full flex items-center justify-center text-white font-medium`}>
      {initials}
    </div>
  );
}

export default UserAvatar;
